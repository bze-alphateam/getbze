import { parseProgramLink, programShown } from './program';

describe('parseProgramLink', () => {
    it('opens the form for an http(s) link', () => {
        expect(parseProgramLink('https://forms.example.com/apply')).toEqual({ state: 'open', url: 'https://forms.example.com/apply' });
        expect(parseProgramLink(' http://example.com/form ')).toEqual({ state: 'open', url: 'http://example.com/form' });
    });

    it('shows "Coming soon" for "soon"', () => {
        expect(parseProgramLink('soon')).toEqual({ state: 'soon' });
        expect(parseProgramLink(' soon ')).toEqual({ state: 'soon' });
    });

    it.each([undefined, '', 'Soon', 'later', '#apply', '/apply', 'example.com/form', 'mailto:team@example.com', 'javascript:alert(1)'])(
        'hides the program for %s',
        (raw) => {
            expect(parseProgramLink(raw)).toEqual({ state: 'hidden' });
        },
    );
});

describe('programShown', () => {
    it('is false only when hidden', () => {
        expect(programShown({ state: 'open', url: 'https://example.com' })).toBe(true);
        expect(programShown({ state: 'soon' })).toBe(true);
        expect(programShown({ state: 'hidden' })).toBe(false);
    });
});
