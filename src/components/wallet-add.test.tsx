import { act, render, screen } from '@testing-library/react';
import type { ReactNode } from 'react';

import type { FetchFn } from '@/lib/live-client';

import { EARLY_FLAG, EARLY_SCRIPT } from '@/lib/wallet-add';

import { WalletAdd, type WalletAddBrowser } from './wallet-add';

const DENOM = 'factory/bze1abcdefghijklmnopqrstuvwxyz0123456789ab/mytoken';

interface FakeBrowser extends WalletAddBrowser {
    fireOpened: () => void;
    listenerCount: () => number;
}

function fakeBrowser(over: Partial<WalletAddBrowser> = {}): FakeBrowser {
    const listeners = new Set<() => void>();

    return {
        pathname: '/wallet/add/',
        search: `?code=${encodeURIComponent(DENOM)}`,
        hash: '',
        referrer: '',
        origin: 'https://getbze.com',
        openedEarly: false,
        redirect: vi.fn(),
        rewriteUrl: vi.fn(),
        onOpened: (l) => {
            listeners.add(l);

            return () => listeners.delete(l);
        },
        copy: vi.fn().mockResolvedValue(undefined),
        fireOpened: () => listeners.forEach((l) => l()),
        listenerCount: () => listeners.size,
        ...over,
    };
}

function metadataFetch(symbol = 'TOK', name = 'My Token'): FetchFn {
    return vi.fn().mockResolvedValue({ ok: true, json: async () => ({ metadata: { symbol, name } }) } as Response);
}

async function mount(browser: FakeBrowser, opts: { storeUrl?: string; fetchFn?: FetchFn } = {}) {
    const fetchFn = opts.fetchFn ?? metadataFetch();
    render(<WalletAdd restHost="https://rest.test" storeUrl={opts.storeUrl ?? 'https://store.test/beepocket'} fetchFn={fetchFn} getBrowser={() => browser} />);
    await act(async () => {});

    return fetchFn;
}

beforeEach(() => {
    vi.useFakeTimers();
});
afterEach(() => {
    vi.useRealTimers();
});

describe('WalletAdd states', () => {
    it('says it is opening BeePocket while it waits', async () => {
        await mount(fakeBrowser());

        expect(screen.getByRole('heading', { name: 'Opening BeePocket…' })).toBeInTheDocument();
    });

    it('confirms when the wallet event arrives before 2 s', async () => {
        const browser = fakeBrowser();
        await mount(browser);

        await act(async () => {
            vi.advanceTimersByTime(1000);
            browser.fireOpened();
        });

        expect(screen.getByRole('heading', { name: 'Opened in BeePocket' })).toBeInTheDocument();
        expect(screen.getByText('Check the BeePocket window to add TOK.')).toBeInTheDocument();
        await act(async () => {
            vi.advanceTimersByTime(5000);
        });
        expect(screen.getByRole('heading', { name: 'Opened in BeePocket' })).toBeInTheDocument();
    });

    it('offers the install when no event arrives within 2 s', async () => {
        await mount(fakeBrowser());

        await act(async () => {
            vi.advanceTimersByTime(2000);
        });

        expect(screen.getByText('TOK')).toBeInTheDocument();
        expect(screen.getByText('My Token')).toBeInTheDocument();
        expect(screen.getByText(/Install it, and it will start with this token/)).toBeInTheDocument();
        const link = screen.getByRole('link', { name: 'Install BeePocket' });
        expect(link).toHaveAttribute('href', 'https://store.test/beepocket');
        expect(link).toHaveAttribute('target', '_blank');
        expect(link).toHaveAttribute('rel', 'noopener');
    });

    it('shows "coming soon" instead of the button while the store link is empty', async () => {
        await mount(fakeBrowser(), { storeUrl: '' });
        await act(async () => {
            vi.advanceTimersByTime(2000);
        });

        expect(screen.getByText('BeePocket is coming soon')).toBeInTheDocument();
        expect(screen.queryByRole('link', { name: 'Install BeePocket' })).toBeNull();
    });

    it('copies the full code', async () => {
        const browser = fakeBrowser();
        await mount(browser);
        await act(async () => {
            vi.advanceTimersByTime(2000);
        });

        await act(async () => {
            screen.getByRole('button', { name: 'Copy' }).click();
        });

        expect(browser.copy).toHaveBeenCalledWith(DENOM);
        expect(screen.getByRole('button', { name: 'Copied' })).toBeInTheDocument();
    });

    it('shows the generic page without a code, without waiting', async () => {
        const fetchFn = await mount(fakeBrowser({ search: '' }));

        expect(screen.getByRole('heading', { name: 'BeePocket' })).toBeInTheDocument();
        expect(screen.getByRole('link', { name: 'Install BeePocket' })).toBeInTheDocument();
        expect(fetchFn).not.toHaveBeenCalled();
    });

    it('shows the generic page for an invalid code and never asks the chain', async () => {
        const fetchFn = await mount(fakeBrowser({ search: '?code=9%20bad' }));

        expect(screen.getByRole('heading', { name: 'BeePocket' })).toBeInTheDocument();
        expect(fetchFn).not.toHaveBeenCalled();
    });
});

describe('WalletAdd early event', () => {
    it('shows "Opened" when the wallet answered before the component mounted', async () => {
        await mount(fakeBrowser({ openedEarly: true }));

        expect(screen.getByRole('heading', { name: 'Opened in BeePocket' })).toBeInTheDocument();
        await act(async () => {
            vi.advanceTimersByTime(5000);
        });
        expect(screen.getByRole('heading', { name: 'Opened in BeePocket' })).toBeInTheDocument();
    });

    it('records the event with the inline script, before React runs', () => {
        const win = window as unknown as Record<string, unknown>;
        delete win[EARLY_FLAG];
        new Function(EARLY_SCRIPT)();

        window.dispatchEvent(new Event('beepocket#add-token-opened'));

        expect(win[EARLY_FLAG]).toBe(true);
        delete win[EARLY_FLAG];
    });

    it('stops listening and stops the timer on unmount', async () => {
        const browser = fakeBrowser();
        const { unmount } = render(<WalletAdd restHost="https://rest.test" storeUrl="" fetchFn={metadataFetch()} getBrowser={() => browser} />);
        await act(async () => {});
        expect(browser.listenerCount()).toBe(1);

        unmount();

        expect(browser.listenerCount()).toBe(0);
        expect(vi.getTimerCount()).toBe(0);
    });
});

describe('WalletAdd shell', () => {
    const shell = (children: ReactNode) => <div data-testid="shell">{children}</div>;

    it('wraps the page in the shell', async () => {
        render(<WalletAdd restHost="https://rest.test" storeUrl="" fetchFn={metadataFetch()} getBrowser={() => fakeBrowser()} shell={shell} />);
        await act(async () => {});

        expect(screen.getByTestId('shell')).toBeInTheDocument();
    });

    it('renders no shell at all while a slash-less URL is redirected', async () => {
        render(<WalletAdd restHost="https://rest.test" storeUrl="" fetchFn={metadataFetch()} getBrowser={() => fakeBrowser({ pathname: '/wallet/add' })} shell={shell} />);
        await act(async () => {});

        expect(screen.queryByTestId('shell')).toBeNull();
    });
});

describe('WalletAdd token info', () => {
    async function missing(code: string, fetchFn: FetchFn) {
        await mount(fakeBrowser({ search: `?code=${encodeURIComponent(code)}` }), { fetchFn });
        await act(async () => {
            vi.advanceTimersByTime(2000);
        });
    }

    it('asks the chain REST host for the metadata', async () => {
        const fetchFn = await mount(fakeBrowser());

        expect(fetchFn).toHaveBeenCalledWith(`https://rest.test/cosmos/bank/v1beta1/denoms_metadata_by_query_string?denom=${encodeURIComponent(DENOM)}`);
    });

    it('says the wallet will look the token up on a 404', async () => {
        await missing(DENOM, vi.fn().mockResolvedValue({ ok: false, status: 404 } as Response));

        expect(screen.getByText('BeePocket will look this token up when it opens.')).toBeInTheDocument();
        expect(screen.getByTitle(DENOM)).toBeInTheDocument();
    });

    it('treats a failed request like missing metadata', async () => {
        await missing(DENOM, vi.fn().mockRejectedValue(new Error('offline')));

        expect(screen.getByText('BeePocket will look this token up when it opens.')).toBeInTheDocument();
    });

    it('knows ubze without asking the chain', async () => {
        const fetchFn = vi.fn();
        await missing('ubze', fetchFn);

        expect(screen.getByText('BZE')).toBeInTheDocument();
        expect(screen.getByText('BeeZee')).toBeInTheDocument();
        expect(fetchFn).not.toHaveBeenCalled();
    });

    it('shows ibc tokens by code, without a lookup', async () => {
        const fetchFn = vi.fn();
        const code = 'ibc/27394FB092D2ECCD56123C74F36E4C1F926001CEADA9CA97EA622B25F41E5EB2';
        await missing(code, fetchFn);

        expect(screen.getByTitle(code)).toBeInTheDocument();
        expect(screen.queryByText(/look this token up/)).toBeNull();
        expect(fetchFn).not.toHaveBeenCalled();
    });
});

describe('WalletAdd URL handling', () => {
    it('writes from=<referrer origin> from a cross-origin https referrer', async () => {
        const browser = fakeBrowser({ referrer: 'https://community.example/some/page' });
        await mount(browser);

        expect(browser.rewriteUrl).toHaveBeenCalledWith(`/wallet/add/?code=${encodeURIComponent(DENOM)}&from=https%3A%2F%2Fcommunity.example`);
    });

    it('does not overwrite an existing from', async () => {
        const browser = fakeBrowser({ search: `?code=${encodeURIComponent(DENOM)}&from=https%3A%2F%2Fmine.example`, referrer: 'https://community.example/' });
        await mount(browser);

        expect(browser.rewriteUrl).not.toHaveBeenCalled();
    });

    it.each([['empty', ''], ['same origin', 'https://getbze.com/apps/'], ['http', 'http://community.example/'], ['garbage', 'not a url']])('ignores a %s referrer', async (_n, referrer) => {
        const browser = fakeBrowser({ referrer });
        await mount(browser);

        expect(browser.rewriteUrl).not.toHaveBeenCalled();
    });

    it('moves /wallet/add?code=x to the slash form and renders nothing', async () => {
        const browser = fakeBrowser({ pathname: '/wallet/add', search: '?code=x', hash: '#h' });
        const fetchFn = await mount(browser);

        expect(browser.redirect).toHaveBeenCalledWith('/wallet/add/?code=x#h');
        expect(screen.queryByRole('heading')).toBeNull();
        expect(fetchFn).not.toHaveBeenCalled();
        expect(browser.rewriteUrl).not.toHaveBeenCalled();
    });
});
