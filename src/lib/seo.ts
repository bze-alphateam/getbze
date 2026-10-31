import type { Metadata } from 'next';

import { type ProgramLink, programShown } from './program';

// Search and share metadata for every page, in one place so the pages, the sitemap and
// the export tests read the same table.

export const SITE_URL = 'https://getbze.com';
export const SITE_NAME = 'BeeZee';
export const X_HANDLE = '@BZEdgeCoin';

/** The shared share image (1200 × 630), the getbze.com image of the brand kit. */
export const OG_IMAGE = {
    url: '/og-image.png',
    width: 1200,
    height: 630,
    alt: 'BeeZee, a fast, low-cost blockchain for your project',
};

export const SOCIAL_PROFILES = [
    'https://x.com/BZEdgeCoin',
    'https://t.me/BZEdgeOfficial',
    'https://discord.gg/wb68JV3QhZ',
    'https://github.com/bze-alphateam',
];

export interface PageSeo {
    /** The route as served (static export with trailing slashes). */
    path: string;
    title: string;
    description: string;
}

export const PAGES = {
    home: {
        path: '/',
        title: 'Create Your Own Crypto Token, No Code | BeeZee',
        description: "Launch your community's token in a few setup steps. BeeZee is a fast, low-cost Cosmos blockchain where trading, staking and rewards work together.",
    },
    apps: {
        path: '/apps/',
        title: 'Token Launchpad, DEX and Staking Apps | BeeZee',
        description: 'Create a token in Factory, trade it on the DEX, burn it, stake BZE and give your community its own page. BeeZee apps that work together.',
    },
    bze: {
        path: '/bze/',
        title: 'BeeZee (BZE) Coin: Buy, Stake & Track | BeeZee',
        description: 'BZE is the coin behind BeeZee. See the live supply, where to buy BZE, how staking works and its APR, and where to track the price.',
    },
    program: {
        path: '/founding-program/',
        title: 'Launch Your Community Token With Us | BeeZee',
        description: "BeeZee's Founding Program: ten hand-picked communities and projects get their launch costs covered and a guide from our team at every step.",
    },
    network: {
        path: '/under-the-hood/',
        title: 'How BeeZee Works: Cosmos SDK, IBC & Audit | BeeZee',
        description: 'What the BeeZee chain can do, the Cosmos chains it connects to over IBC, its Oak Security audit, block explorers and how to build on it.',
    },
    roadmap: {
        path: '/roadmap/',
        title: "Roadmap: What We're Building Next | BeeZee",
        description: "What's next for the BeeZee blockchain and its apps, plus every upgrade and release we've delivered since 2023.",
    },
    news: {
        path: '/news/',
        title: 'News, Articles and Community | BeeZee',
        description: 'The latest BeeZee articles and updates, and where to talk with the team and the community on Discord, Telegram and X.',
    },
} satisfies Record<string, PageSeo>;

export type SeoPage = keyof typeof PAGES;

/** The pages that are live (the sitemap): Founding Program only while it is shown. */
export function listedPages(program: ProgramLink): PageSeo[] {
    return Object.entries(PAGES)
        .filter(([key]) => key !== 'program' || programShown(program))
        .map(([, page]) => page);
}

export const NOT_FOUND_TITLE = 'Page not found | BeeZee';

export function absoluteUrl(path: string): string {
    return new URL(path, SITE_URL).toString();
}

/** Title, description, canonical URL, robots and the Open Graph and X tags of one page. */
export function pageMetadata(page: SeoPage): Metadata {
    const { path, title, description } = PAGES[page];
    const url = absoluteUrl(path);
    const image = { ...OG_IMAGE, url: absoluteUrl(OG_IMAGE.url) };

    return {
        title: { absolute: title },
        description,
        alternates: { canonical: url },
        robots: { index: true, follow: true },
        openGraph: {
            type: 'website',
            siteName: SITE_NAME,
            title,
            description,
            url,
            locale: 'en_US',
            images: [image],
        },
        twitter: {
            card: 'summary_large_image',
            site: X_HANDLE,
            title,
            description,
            images: [{ url: image.url, alt: image.alt }],
        },
    };
}

/** Organization and WebSite structured data for Home. */
export function homeJsonLd(): object[] {
    return [
        {
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: SITE_NAME,
            url: absoluteUrl('/'),
            logo: absoluteUrl('/icon-512.png'),
            sameAs: SOCIAL_PROFILES,
        },
        {
            '@context': 'https://schema.org',
            '@type': 'WebSite',
            name: SITE_NAME,
            url: absoluteUrl('/'),
        },
    ];
}
