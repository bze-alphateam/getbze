import { render, screen } from '@testing-library/react';

import { ProgramApply } from './program-apply';

describe('ProgramApply', () => {
    it('links to the form in a new tab when open', () => {
        render(<ProgramApply link={{ state: 'open', url: 'https://forms.example.com/apply' }} />);

        const link = screen.getByRole('link', { name: /Apply now/ });
        expect(link).toHaveAttribute('href', 'https://forms.example.com/apply');
        expect(link).toHaveAttribute('target', '_blank');
        expect(link).toHaveAttribute('rel', 'noopener');
    });

    it('is a disabled "Coming soon" button when soon', () => {
        render(<ProgramApply link={{ state: 'soon' }} />);

        expect(screen.getByRole('button', { name: 'Coming soon' })).toBeDisabled();
        expect(screen.queryByRole('link')).toBeNull();
    });
});
