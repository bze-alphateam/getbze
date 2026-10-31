// @vitest-environment node
import { readdirSync } from 'node:fs';
import path from 'node:path';

import robots from '@/app/robots';
import sitemap from '@/app/sitemap';

import { homeJsonLd, listedPages, PAGES, pageMetadata, SOCIAL_PROFILES } from './seo';

const APP_DIR = path.resolve(__dirname, '../app');

/** Every route that has a page.tsx under src/app, as served (trailing slash). */
function appRoutes(dir = APP_DIR, prefix = '/'): string[] {
    return readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
        if (entry.isFile()) {
            return entry.name === 'page.tsx' ? [prefix] : [];
        }

        return appRoutes(path.join(dir, entry.name), `${prefix}${entry.name}/`);
    });
}

describe('sitemap', () => {
    it('lists exactly the routes that have a page while the program is shown', () => {
        for (const program of [{ state: 'open', url: 'https://example.com/apply' }, { state: 'soon' }] as const) {
            const listed = listedPages(program).map((page) => page.path);

            expect([...listed].sort()).toEqual(appRoutes().sort());
        }
    });

    it('leaves Founding Program out while the program is hidden', () => {
        const listed = listedPages({ state: 'hidden' }).map((page) => page.path);

        expect([...listed].sort()).toEqual(appRoutes().filter((route) => route !== '/founding-program/').sort());
    });

    it('uses absolute getbze.com URLs', () => {
        for (const entry of sitemap()) {
            expect(entry.url).toMatch(/^https:\/\/getbze\.com\//);
        }
    });

    it('is linked from robots.txt', () => {
        expect(robots().sitemap).toBe('https://getbze.com/sitemap.xml');
    });
});

describe('pageMetadata', () => {
    it('gives every page a unique title and description within the search limits', () => {
        const pages = Object.values(PAGES);

        expect(new Set(pages.map((p) => p.title)).size).toBe(pages.length);
        expect(new Set(pages.map((p) => p.description)).size).toBe(pages.length);
        for (const page of pages) {
            expect(page.title.length).toBeLessThanOrEqual(60);
            expect(page.title.endsWith(' | BeeZee')).toBe(true);
            expect(page.description.length).toBeLessThanOrEqual(155);
        }
    });

    it('sets the canonical URL, robots and the share tags from one row', () => {
        const meta = pageMetadata('program');

        expect(meta.title).toEqual({ absolute: PAGES.program.title });
        expect(meta.alternates?.canonical).toBe('https://getbze.com/founding-program/');
        expect(meta.robots).toEqual({ index: true, follow: true });
        expect(meta.openGraph).toMatchObject({
            type: 'website',
            siteName: 'BeeZee',
            title: PAGES.program.title,
            description: PAGES.program.description,
            url: 'https://getbze.com/founding-program/',
            locale: 'en_US',
            images: [{ url: 'https://getbze.com/og-image.png', width: 1200, height: 630 }],
        });
        expect(meta.twitter).toMatchObject({
            card: 'summary_large_image',
            site: '@BZEdgeCoin',
            title: PAGES.program.title,
            images: [{ url: 'https://getbze.com/og-image.png' }],
        });
    });
});

describe('homeJsonLd', () => {
    it('describes the organization and the website', () => {
        const [org, site] = homeJsonLd() as Record<string, unknown>[];

        expect(org).toMatchObject({ '@type': 'Organization', name: 'BeeZee', url: 'https://getbze.com/', sameAs: SOCIAL_PROFILES });
        expect(site).toMatchObject({ '@type': 'WebSite', name: 'BeeZee', url: 'https://getbze.com/' });
    });
});
