import { ChakraProvider, createSystem, defaultConfig } from '@chakra-ui/react';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { MEDIUM_URL } from './live/articles';
import { DeliveredYears, UpNextGrid } from './roadmap';

const system = createSystem(defaultConfig, { preflight: false });

describe('roadmap details', () => {
    it('opens a delivered item with its details and the Medium link, and closes', async () => {
        render(<ChakraProvider value={system}><DeliveredYears /></ChakraProvider>);

        fireEvent.click(screen.getByRole('button', { name: 'BZE Explorer' }));

        const dialog = await screen.findByRole('dialog');
        expect(dialog).toHaveTextContent('A block explorer built specifically for BeeZee.');
        expect(dialog).toHaveTextContent('Q4 2026');
        expect(screen.getByRole('link', { name: 'Read our updates on Medium ↗' })).toHaveAttribute('href', MEDIUM_URL);

        fireEvent.click(screen.getByRole('button', { name: 'Close' }));
        await waitFor(() => expect(screen.queryByRole('dialog')).not.toBeInTheDocument());
    });

    it('opens an up-next item too', async () => {
        render(<ChakraProvider value={system}><UpNextGrid /></ChakraProvider>);

        fireEvent.click(screen.getByRole('button', { name: 'Roadmap 2027' }));

        expect(await screen.findByRole('dialog')).toHaveTextContent('The BZE roadmap for 2027.');
    });

    it('carries no per-item links', () => {
        render(<ChakraProvider value={system}><UpNextGrid /><DeliveredYears /></ChakraProvider>);

        expect(screen.queryAllByRole('link')).toHaveLength(0);
    });
});
