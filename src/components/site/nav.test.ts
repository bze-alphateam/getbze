import { mainNav } from './nav';

describe('mainNav', () => {
    it('has Founding Program while the program is shown', () => {
        expect(mainNav({ state: 'soon' }).map((item) => item.label)).toContain('Founding Program');
        expect(mainNav({ state: 'open', url: 'https://example.com/apply' }).map((item) => item.label)).toContain('Founding Program');
    });

    it('drops only Founding Program while the program is hidden', () => {
        const shown = mainNav({ state: 'soon' }).map((item) => item.label);

        expect(mainNav({ state: 'hidden' }).map((item) => item.label)).toEqual(shown.filter((label) => label !== 'Founding Program'));
    });
});
