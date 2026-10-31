import { ChakraProvider, createSystem, defaultConfig } from '@chakra-ui/react';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { PhoneMenu } from './PhoneMenu';

const system = createSystem(defaultConfig, { preflight: false });

describe('PhoneMenu', () => {
    it('opens with the current page marked, and closes with Escape', async () => {
        render(<ChakraProvider value={system}><PhoneMenu page="roadmap" /></ChakraProvider>);

        const button = screen.getByRole('button', { name: 'Open the menu' });
        expect(button).toHaveAttribute('aria-expanded', 'false');
        fireEvent.click(button);

        const current = await screen.findByRole('link', { name: /Roadmap/ });
        expect(current).toHaveAttribute('aria-current', 'page');
        expect(current).toHaveTextContent("You're here");
        expect(button).toHaveAttribute('aria-expanded', 'true');
        expect(screen.getByRole('link', { name: /Apps/ })).not.toHaveAttribute('aria-current');

        fireEvent.keyDown(document.activeElement ?? document.body, { key: 'Escape' });
        await waitFor(() => expect(button).toHaveAttribute('aria-expanded', 'false'));
    });
});
