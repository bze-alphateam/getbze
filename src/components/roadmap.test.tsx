import { ChakraProvider, createSystem, defaultConfig } from '@chakra-ui/react';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { readFileSync } from 'node:fs';
import { join } from 'node:path';

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

// jsdom runs no animations, so the tests above close the dialog even when the browser
// cannot: the dialog unmounts only when its exit animation ends, and Chakra's own exit
// keyframes are never emitted on this site. The page must close it with keyframes it defines.
describe('roadmap dialog close animation', () => {
    const css = readFileSync(join(__dirname, '../styles/pages/roadmap.css'), 'utf8');
    const keyframes = new Set([...css.matchAll(/@keyframes\s+([\w-]+)/g)].map((m) => m[1]));

    it.each(['.rd-back', '.rd'])('%s closes with keyframes the page defines', (selector) => {
        const rule = css.match(new RegExp(`\\.pg-roadmap ${selector.replace('.', '\\.')}\\[data-state="closed"\\]\\{animation:([\\w-]+)`));
        expect(rule).not.toBeNull();
        expect(keyframes).toContain(rule?.[1]);
    });
});
