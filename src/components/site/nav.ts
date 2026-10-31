export type PageKey = 'home' | 'apps' | 'bze' | 'program' | 'network' | 'roadmap' | 'news' | 'notfound';

export interface NavItem {
    label: string;
    href: string;
    /** The page this item marks as current. */
    page?: PageKey;
    external?: boolean;
}

/** The main menu, in order, for the header and the phone menu. */
export const MAIN_NAV: NavItem[] = [
    { label: 'How it works', href: '/#how' },
    { label: 'Apps', href: '/apps/', page: 'apps' },
    { label: 'BZE', href: '/bze/', page: 'bze' },
    { label: 'Roadmap', href: '/roadmap/', page: 'roadmap' },
    { label: 'News', href: '/news/', page: 'news' },
    { label: 'Founding Program', href: '/founding-program/', page: 'program' },
    { label: 'Docs', href: 'https://docs.getbze.com', external: true },
];
