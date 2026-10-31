'use client';

import { stakingApr, unbondingDays } from '@/lib/live';
import type { LiveClient } from '@/lib/live-client';

import { useLive } from './live-context';
import { FailLine, Sk } from './states';

async function loadApr(client: LiveClient) {
    const [inflation, totalSupply, pool] = await Promise.all([client.inflation(), client.totalSupply(), client.stakingPool()]);
    const apr = stakingApr(inflation, totalSupply, pool.bonded_tokens);
    if (apr === null) {
        throw new Error('nothing bonded');
    }

    return apr;
}

async function loadUnbonding(client: LiveClient) {
    const days = unbondingDays((await client.stakingParams()).unbonding_time);
    if (days === null) {
        throw new Error('unreadable unbonding time');
    }

    return days;
}

/** The APR block of the Stake BZE card. */
export function StakeApr() {
    const [state, retry] = useLive(loadApr);

    return (
        <div className="apr">
            {state.status === 'loading' && <Sk w={96} h={32} />}
            {state.status === 'ok' && <span className="n">{state.data}%</span>}
            {state.status === 'failed' && <span className="n">—</span>}
            {state.status === 'failed'
                ? <FailLine as="span" onRetry={retry}>APR unavailable ·</FailLine>
                : <span className="l">APR · live from the chain</span>}
        </div>
    );
}

/** "Unstaking takes 21 days." from the staking params; the number drops out if they fail. */
export function UnbondingNote() {
    const [state] = useLive(loadUnbonding);

    if (state.status === 'ok') {
        return <>Unstaking takes {state.data} {state.data === 1 ? 'day' : 'days'}.</>;
    }
    if (state.status === 'loading') {
        return <>Unstaking takes <Sk w={52} h={12} style={{ display: 'inline-block', verticalAlign: 'middle' }} />.</>;
    }

    return <>Unstaking takes a few weeks.</>;
}
