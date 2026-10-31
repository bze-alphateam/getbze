import BigNumber from 'bignumber.js';

import type { ArticleData, RaffleData } from './live-client';

const UBZE_PER_BZE = 1_000_000;

export const NATIVE_DENOM = 'ubze';

/** ubze → BZE. */
export function toBze(ubze: string | number | BigNumber): BigNumber {
    return new BigNumber(ubze).dividedBy(UBZE_PER_BZE);
}

/** Millions with up to two decimals: 282618524.58 → "282.62M". Below a million, a grouped whole number. */
export function formatCompactBze(bze: BigNumber): string {
    if (bze.abs().gte(1_000_000)) {
        return `${trimZeros(bze.dividedBy(1_000_000).toFixed(2, BigNumber.ROUND_HALF_UP))}M`;
    }

    return formatWholeBze(bze);
}

/** A grouped whole number: 100000 → "100,000". */
export function formatWholeBze(bze: BigNumber): string {
    return bze.integerValue(BigNumber.ROUND_HALF_UP).toFormat(0);
}

function trimZeros(fixed: string): string {
    return fixed.includes('.') ? fixed.replace(/\.?0+$/, '') : fixed;
}

export interface SupplyStats {
    total: string;
    staked: string;
    communityPool: string;
}

export interface SupplyInputs {
    totalSupplyUbze: string;
    bondedUbze: string;
    communityPool: { denom: string; amount: string }[];
}

export function toSupplyStats(inputs: SupplyInputs): SupplyStats {
    const pool = inputs.communityPool.find((coin) => coin.denom === NATIVE_DENOM)?.amount ?? '0';

    return {
        total: formatCompactBze(toBze(inputs.totalSupplyUbze)),
        staked: formatCompactBze(toBze(inputs.bondedUbze)),
        communityPool: formatCompactBze(toBze(pool)),
    };
}

/** Staking APR in percent with two decimals: inflation × supply ÷ bonded. Null when nothing is bonded. */
export function stakingApr(inflation: string, totalSupplyUbze: string, bondedUbze: string): string | null {
    const bonded = new BigNumber(bondedUbze);
    if (!bonded.gt(0)) {
        return null;
    }

    return new BigNumber(inflation).multipliedBy(totalSupplyUbze).dividedBy(bonded).multipliedBy(100).toFixed(2);
}

/** "1814400s" → 21. Null for anything that is not a whole number of seconds. */
export function unbondingDays(duration: string): number | null {
    const match = /^(\d+)s$/.exec(duration.trim());
    if (!match) {
        return null;
    }

    return Math.round(Number(match[1]) / 86_400);
}

/** The fee-coin minimum (tradebin minNativeLiquidityForModuleSwap, in ubze) as a whole BZE amount. */
export function feeCoinMinimum(minNativeLiquidityUbze: string): BigNumber | null {
    const min = toBze(minNativeLiquidityUbze);

    return min.isFinite() && min.gt(0) ? min : null;
}

/** The example pool on the fee meter sits a quarter above the minimum, as drawn on the design. */
export const FEE_METER_EXAMPLE_FACTOR = 1.25;
/** Where the minimum marker sits on the bar, in percent. */
export const FEE_METER_MARK = 58;

export interface FeeMeter {
    minimum: string;
    example: string;
    fillPercent: number;
    markPercent: number;
}

export function feeMeter(minimum: BigNumber): FeeMeter {
    return {
        minimum: formatWholeBze(minimum),
        example: formatWholeBze(minimum.multipliedBy(FEE_METER_EXAMPLE_FACTOR)),
        fillPercent: FEE_METER_MARK * FEE_METER_EXAMPLE_FACTOR,
        markPercent: FEE_METER_MARK,
    };
}

export interface RaffleCard {
    prizePool: string;
    ticketPrice: string;
    endsIn: string;
}

/**
 * The BZE raffle card, or null when it must not be rendered: no BZE raffle is open,
 * it has already ended, or its numbers are unreadable.
 */
export function activeBzeRaffle(raffles: RaffleData[], currentHourEpoch: string): RaffleCard | null {
    const raffle = raffles.find((r) => r.denom === NATIVE_DENOM);
    if (!raffle) {
        return null;
    }

    const hoursLeft = new BigNumber(raffle.end_at).minus(currentHourEpoch);
    const pot = toBze(raffle.pot);
    const ticket = toBze(raffle.ticket_price);
    if (!hoursLeft.isFinite() || !hoursLeft.gt(0) || !pot.isFinite() || !ticket.isFinite()) {
        return null;
    }

    return {
        prizePool: formatWholeBze(pot),
        ticketPrice: trimZeros(ticket.toFixed(2)),
        endsIn: formatHours(hoursLeft.toNumber()),
    };
}

/** 50 → "2d 2h", 5 → "5h". */
export function formatHours(hours: number): string {
    const days = Math.floor(hours / 24);
    const rest = hours % 24;

    return days > 0 ? `${days}d ${rest}h` : `${rest}h`;
}

export interface ArticleRow {
    title: string;
    url: string;
    image: string;
    date: string;
}

const DATE_FORMAT = new Intl.DateTimeFormat('en-US', { month: 'short', day: 'numeric', year: 'numeric', timeZone: 'UTC' });

/** The newest `count` articles, newest first, with the date as "Oct 29, 2026". */
export function latestArticles(articles: ArticleData[], count: number): ArticleRow[] {
    return [...articles]
        .sort((a, b) => Date.parse(b.publish_date) - Date.parse(a.publish_date))
        .slice(0, count)
        .map((a) => ({
            title: a.title,
            url: a.url,
            image: a.picture_url,
            date: Number.isNaN(Date.parse(a.publish_date)) ? '' : DATE_FORMAT.format(new Date(a.publish_date)),
        }));
}
