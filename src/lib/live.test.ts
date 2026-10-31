import BigNumber from 'bignumber.js';
import { describe, expect, it } from 'vitest';

import {
    activeBzeRaffle,
    feeCoinMinimum,
    feeMeter,
    formatCompactBze,
    formatHours,
    latestArticles,
    stakingApr,
    toSupplyStats,
    unbondingDays,
} from './live';
import type { ArticleData, RaffleData } from './live-client';

const raffle = (over: Partial<RaffleData>): RaffleData => ({
    pot: '1500000000', duration: '7', chances: '100', ratio: '0.5', end_at: '120', winners: '3',
    ticket_price: '2500000', denom: 'ubze', total_won: '0', ...over,
});

describe('formatCompactBze', () => {
    it('shows millions with up to two decimals', () => {
        expect(formatCompactBze(new BigNumber('282618524.585643'))).toBe('282.62M');
        expect(formatCompactBze(new BigNumber('400000000'))).toBe('400M');
        expect(formatCompactBze(new BigNumber('35202603.5'))).toBe('35.2M');
    });

    it('groups amounts below a million', () => {
        expect(formatCompactBze(new BigNumber('124999.6'))).toBe('125,000');
    });
});

describe('toSupplyStats', () => {
    it('converts ubze and picks the native coin of the community pool', () => {
        expect(toSupplyStats({
            totalSupplyUbze: '282618524585643',
            bondedUbze: '157249424072001',
            communityPool: [
                { denom: 'factory/bze1abc/2MARS', amount: '581.77' },
                { denom: 'ubze', amount: '35202603554140.267966539439913505' },
            ],
        })).toEqual({ total: '282.62M', staked: '157.25M', communityPool: '35.2M' });
    });

    it('shows a zero community pool when it holds no BZE', () => {
        expect(toSupplyStats({ totalSupplyUbze: '1000000000000', bondedUbze: '1000000000000', communityPool: [] }).communityPool).toBe('0');
    });
});

describe('stakingApr', () => {
    it('is inflation × supply ÷ bonded, in percent', () => {
        expect(stakingApr('0.05', '282618524585643', '157249424072001')).toBe('8.99');
    });

    it('is null when nothing is bonded', () => {
        expect(stakingApr('0.05', '100', '0')).toBeNull();
    });
});

describe('unbondingDays', () => {
    it('reads the staking duration in days', () => {
        expect(unbondingDays('1814400s')).toBe(21);
    });

    it('rejects anything else', () => {
        expect(unbondingDays('21d')).toBeNull();
        expect(unbondingDays('')).toBeNull();
    });
});

describe('fee-coin minimum', () => {
    it('reads the tradebin param in BZE', () => {
        expect(feeCoinMinimum('100000000000')?.toString()).toBe('100000');
    });

    it('is null for a missing or zero param', () => {
        expect(feeCoinMinimum('0')).toBeNull();
        expect(feeCoinMinimum('abc')).toBeNull();
    });

    it('draws the example pool a quarter above the live minimum', () => {
        expect(feeMeter(new BigNumber(100000))).toEqual({ minimum: '100,000', example: '125,000', fillPercent: 72.5, markPercent: 58 });
        expect(feeMeter(new BigNumber(50000)).minimum).toBe('50,000');
    });
});

describe('activeBzeRaffle', () => {
    it('returns the open BZE raffle', () => {
        expect(activeBzeRaffle([raffle({ denom: 'factory/x/HRB' }), raffle({})], '70')).toEqual({ prizePool: '1,500', ticketPrice: '2.5', endsIn: '2d 2h' });
    });

    it('is null when no BZE raffle is open', () => {
        expect(activeBzeRaffle([], '70')).toBeNull();
        expect(activeBzeRaffle([raffle({ denom: 'factory/x/HRB' })], '70')).toBeNull();
    });

    it('is null once the raffle has ended', () => {
        expect(activeBzeRaffle([raffle({ end_at: '70' })], '70')).toBeNull();
    });

    it('is null when its numbers are unreadable', () => {
        expect(activeBzeRaffle([raffle({ pot: 'x' })], '70')).toBeNull();
    });
});

describe('formatHours', () => {
    it('splits days and hours', () => {
        expect(formatHours(5)).toBe('5h');
        expect(formatHours(48)).toBe('2d 0h');
    });
});

describe('latestArticles', () => {
    const article = (title: string, date: string): ArticleData => ({ title, url: `https://medium.com/${title}`, picture_url: '', description: '', publish_date: date, author_name: 'beezee' });

    it('returns the newest first, cut to the count, with a readable date', () => {
        const rows = latestArticles([
            article('old', '2026-06-05T14:32:03Z'),
            article('newest', '2026-10-29T15:44:29Z'),
            article('middle', '2026-10-23T12:07:15Z'),
        ], 2);
        expect(rows.map((r) => r.title)).toEqual(['newest', 'middle']);
        expect(rows[0].date).toBe('Oct 29, 2026');
    });
});
