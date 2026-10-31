// The Founding Program's application link, from NEXT_PUBLIC_FOUNDING_PROGRAM_URL:
// "soon" shows the program with a disabled "Coming soon" button, an http(s) link opens
// the form in a new tab, and anything else (unset included) hides the program everywhere.

export type ProgramLink = { state: 'open'; url: string } | { state: 'soon' } | { state: 'hidden' };

export const PROGRAM_SOON = 'soon';

export function parseProgramLink(raw: string | undefined): ProgramLink {
    const value = raw?.trim() ?? '';
    if (value === PROGRAM_SOON) {
        return { state: 'soon' };
    }

    try {
        const url = new URL(value);
        if (url.protocol === 'https:' || url.protocol === 'http:') {
            return { state: 'open', url: url.toString() };
        }
    } catch {
        // not a URL: hidden
    }

    return { state: 'hidden' };
}

export function programShown(link: ProgramLink): boolean {
    return link.state !== 'hidden';
}
