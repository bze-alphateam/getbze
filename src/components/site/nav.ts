import { PROGRAM_LINK } from '@/data/links';
import { type ProgramLink, programShown } from '@/lib/program';

export type PageKey = 'home' | 'apps' | 'bze' | 'program' | 'network' | 'roadmap' | 'news' | 'notfound';

export interface NavItem {
    label: string;
    href: string;
    /** The page this item marks as current. */
    page?: PageKey;
    external?: boolean;
}

const NAV: NavItem[] = [
    { label: 'How it works', href: '/#how' },
    { label: 'Apps', href: '/apps/', page: 'apps' },
    { label: 'BZE', href: '/bze/', page: 'bze' },
    { label: 'Roadmap', href: '/roadmap/', page: 'roadmap' },
    { label: 'News', href: '/news/', page: 'news' },
    { label: 'Founding Program', href: '/founding-program/', page: 'program' },
    { label: 'Docs', href: 'https://docs.getbze.com', external: true },
];

/** The main menu, in order; Founding Program only while the program is shown. */
export function mainNav(program: ProgramLink): NavItem[] {
    return programShown(program) ? NAV : NAV.filter((item) => item.page !== 'program');
}

/** The main menu for the header and the phone menu. */
export const MAIN_NAV = mainNav(PROGRAM_LINK);
