import { act, fireEvent, render, screen } from '@testing-library/react';
import type { ReactNode } from 'react';
import { describe, expect, it, vi } from 'vitest';

import type { LiveClient, RaffleData } from '@/lib/live-client';

import { HomeArticles, NewsArticles } from './articles';
import { BzeStats } from './bze-stats';
import { EarnRow } from './earn-row';
import { FeeCoin } from './fee-coin';
import { LiveClientProvider } from './live-context';
import { StakeApr, UnbondingNote } from './staking';

const fail = () => Promise.reject(new Error('down'));

function mockClient(over: Partial<LiveClient> = {}): LiveClient {
    return {
        totalSupply: () => Promise.resolve('282618524585643'),
        stakingPool: () => Promise.resolve({ bonded_tokens: '157249424072001', not_bonded_tokens: '0' }),
        communityPool: () => Promise.resolve([{ denom: 'ubze', amount: '35202603554140.26' }]),
        inflation: () => Promise.resolve('0.05'),
        stakingParams: () => Promise.resolve({ unbonding_time: '1814400s' }),
        tradebinParams: () => Promise.resolve({ minNativeLiquidityForModuleSwap: '100000000000' }),
        raffles: () => Promise.resolve([]),
        currentEpoch: () => Promise.resolve('70'),
        articles: () => Promise.resolve([]),
        ...over,
    };
}

const withClient = (client: LiveClient, ui: ReactNode) => render(<LiveClientProvider client={client}>{ui}</LiveClientProvider>);

describe('BzeStats', () => {
    it('shows the live numbers', async () => {
        withClient(mockClient(), <BzeStats />);
        expect(await screen.findByText('282.62M')).toBeInTheDocument();
        expect(screen.getByText('157.25M')).toBeInTheDocument();
        expect(screen.getByText('35.2M')).toBeInTheDocument();
        expect(screen.getByText('400M')).toBeInTheDocument();
    });

    it('turns numbers into dashes with one Try again line, and retries', async () => {
        const totalSupply = vi.fn<LiveClient['totalSupply']>().mockRejectedValueOnce(new Error('down')).mockResolvedValue('282618524585643');
        withClient(mockClient({ totalSupply }), <BzeStats />);

        expect(await screen.findByText(/Couldn't load the live numbers/)).toBeInTheDocument();
        expect(screen.getAllByText('—')).toHaveLength(3);
        expect(screen.getByText('400M')).toBeInTheDocument();

        fireEvent.click(screen.getByRole('button', { name: 'Try again' }));
        expect(await screen.findByText('282.62M')).toBeInTheDocument();
    });
});

describe('StakeApr and UnbondingNote', () => {
    it('show the APR and the unbonding days from the chain', async () => {
        withClient(mockClient(), <><StakeApr /><p><UnbondingNote /></p></>);
        expect(await screen.findByText('8.99%')).toBeInTheDocument();
        expect(await screen.findByText('Unstaking takes 21 days.')).toBeInTheDocument();
    });

    it('shows a dash and APR unavailable when the chain fails', async () => {
        withClient(mockClient({ inflation: fail }), <StakeApr />);
        expect(await screen.findByText(/APR unavailable/)).toBeInTheDocument();
        expect(screen.getByText('—')).toBeInTheDocument();
    });
});

describe('EarnRow', () => {
    const open: RaffleData = { pot: '1500000000', duration: '7', chances: '1', ratio: '0.5', end_at: '120', winners: '1', ticket_price: '2500000', denom: 'ubze', total_won: '0' };

    it('renders no raffle card when none is open', async () => {
        const raffles = vi.fn<LiveClient['raffles']>().mockResolvedValue([]);
        withClient(mockClient({ raffles }), <EarnRow stake={<div>stake</div>} />);
        await act(async () => {
            await vi.waitFor(() => expect(raffles).toHaveBeenCalled());
        });
        expect(screen.getByText('stake')).toBeInTheDocument();
        expect(screen.queryByTestId('raffle-card')).not.toBeInTheDocument();
    });

    it('renders no raffle card when the raffle data fails', async () => {
        const raffles = vi.fn<LiveClient['raffles']>().mockRejectedValue(new Error('down'));
        withClient(mockClient({ raffles }), <EarnRow stake={<div>stake</div>} />);
        await act(async () => {
            await vi.waitFor(() => expect(raffles).toHaveBeenCalled());
        });
        expect(screen.queryByTestId('raffle-card')).not.toBeInTheDocument();
    });

    it('renders the raffle card while a BZE raffle is open', async () => {
        withClient(mockClient({ raffles: () => Promise.resolve([open]) }), <EarnRow stake={<div>stake</div>} />);
        expect(await screen.findByTestId('raffle-card')).toBeInTheDocument();
        expect(screen.getByText('1,500 BZE')).toBeInTheDocument();
        expect(screen.getByText('Ends in 2d 2h.')).toBeInTheDocument();
    });
});

describe('FeeCoin', () => {
    it('puts the live minimum in the sentence and on the meter', async () => {
        withClient(mockClient(), <FeeCoin intro={null} actions={null} />);
        expect(await screen.findByText('100,000 BZE')).toBeInTheDocument();
        expect(screen.getByText('of 100,000 min')).toBeInTheDocument();
        expect(screen.getByTestId('fee-meter')).toBeInTheDocument();
    });

    it('drops the number and hides the meter when the minimum fails', async () => {
        withClient(mockClient({ tradebinParams: fail }), <FeeCoin intro={null} actions={null} />);
        expect(await screen.findByText('the minimum amount of BZE')).toBeInTheDocument();
        expect(screen.queryByTestId('fee-meter')).not.toBeInTheDocument();
        expect(screen.queryByText(/100,000/)).not.toBeInTheDocument();
    });
});

describe('articles', () => {
    const articles = ['2026-10-29', '2026-10-23', '2026-10-07', '2026-06-05'].map((d, i) => ({
        title: `Article ${i}`, url: `https://medium.com/${i}`, picture_url: '', description: '', publish_date: `${d}T10:00:00Z`, author_name: 'beezee',
    }));

    it('shows the latest two on Home and three on News', async () => {
        withClient(mockClient({ articles: () => Promise.resolve(articles) }), <><HomeArticles /><NewsArticles /></>);
        expect(await screen.findAllByText('Article 0')).toHaveLength(2);
        expect(screen.getAllByText('Article 1')).toHaveLength(2);
        expect(screen.getAllByText('Article 2')).toHaveLength(1);
        expect(screen.queryByText('Article 3')).not.toBeInTheDocument();
    });

    it('falls back to the Medium link when the feed fails', async () => {
        withClient(mockClient({ articles: fail }), <HomeArticles />);
        expect(await screen.findByText('Read them on Medium ↗')).toBeInTheDocument();
    });
});
