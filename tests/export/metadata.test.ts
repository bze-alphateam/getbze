// Reads the static export (out/), so it runs after `yarn build`: `yarn test:export`.
import { existsSync, readdirSync, readFileSync } from 'node:fs';
import path from 'node:path';

const OUT = path.resolve(__dirname, '../../out');
const NOT_FOUND = 'Page not found | BeeZee';

/**
 * Every exported page route (out/<route>/index.html), as served. out/404/ is the
 * not-found page again (trailingSlash export), checked on its own below.
 */
function exportedRoutes(dir = OUT, prefix = '/'): string[] {
    return readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
        if (entry.isFile()) {
            return entry.name === 'index.html' ? [prefix] : [];
        }
        if (entry.name.startsWith('_') || (prefix === '/' && entry.name === '404')) {
            return [];
        }

        return exportedRoutes(path.join(dir, entry.name), `${prefix}${entry.name}/`);
    });
}

function load(file: string): Document {
    return new DOMParser().parseFromString(readFileSync(path.join(OUT, file), 'utf8'), 'text/html');
}

function meta(doc: Document, key: string): string | null {
    return doc.querySelector(`meta[property="${key}"], meta[name="${key}"]`)?.getAttribute('content') ?? null;
}

const OG_TAGS = ['og:type', 'og:site_name', 'og:title', 'og:description', 'og:url', 'og:locale', 'og:image', 'og:image:alt', 'og:image:width', 'og:image:height'];
const TWITTER_TAGS = ['twitter:card', 'twitter:site', 'twitter:title', 'twitter:description', 'twitter:image', 'twitter:image:alt'];

describe('static export', () => {
    it('exists', () => {
        expect(existsSync(path.join(OUT, 'index.html'))).toBe(true);
    });

    // A hidden page (Founding Program without a link) is exported as the 404 page: not a route.
    const routes = existsSync(OUT) ? exportedRoutes().filter((route) => load(path.join(route, 'index.html')).title !== NOT_FOUND) : [];

    it.each(routes)('%s carries the search and share tags', (route) => {
        const doc = load(path.join(route, 'index.html'));
        const url = `https://getbze.com${route}`;

        expect(doc.title).not.toBe('');
        expect(meta(doc, 'description')).toBeTruthy();
        expect(doc.querySelector('link[rel="canonical"]')?.getAttribute('href')).toBe(url);
        expect(meta(doc, 'robots')).toBe('index, follow');
        for (const tag of [...OG_TAGS, ...TWITTER_TAGS]) {
            expect(meta(doc, tag), tag).toBeTruthy();
        }
        expect(meta(doc, 'og:url')).toBe(url);
        expect(meta(doc, 'og:title')).toBe(doc.title);
        expect(meta(doc, 'og:image')).toMatch(/^https:\/\//);
        expect(meta(doc, 'twitter:image')).toMatch(/^https:\/\//);
        expect(meta(doc, 'og:image:width')).toBe('1200');
        expect(meta(doc, 'og:image:height')).toBe('630');
        expect(meta(doc, 'twitter:card')).toBe('summary_large_image');
        expect(meta(doc, 'twitter:site')).toBe('@BZEdgeCoin');
    });

    it('gives every page its own title', () => {
        const titles = routes.map((route) => load(path.join(route, 'index.html')).title);

        expect(new Set(titles).size).toBe(routes.length);
    });

    it('puts the structured data on Home only', () => {
        const ld = load('index.html').querySelector('script[type="application/ld+json"]');
        const types = (JSON.parse(ld?.textContent ?? '[]') as { '@type': string }[]).map((item) => item['@type']);

        expect(types).toEqual(['Organization', 'WebSite']);
        expect(load('apps/index.html').querySelector('script[type="application/ld+json"]')).toBeNull();
    });

    it('keeps the 404 page out of search', () => {
        const doc = load('404.html');

        expect(doc.title).toBe(NOT_FOUND);
        expect(meta(doc, 'robots')).toContain('noindex');
    });

    it('lists exactly the exported routes in the sitemap', () => {
        const xml = new DOMParser().parseFromString(readFileSync(path.join(OUT, 'sitemap.xml'), 'utf8'), 'application/xml');
        const listed = [...xml.getElementsByTagName('loc')].map((loc) => new URL(loc.textContent ?? '').pathname);

        expect(listed.sort()).toEqual([...routes].sort());
    });

    it('points robots.txt to the sitemap', () => {
        expect(readFileSync(path.join(OUT, 'robots.txt'), 'utf8')).toContain('Sitemap: https://getbze.com/sitemap.xml');
    });
});
