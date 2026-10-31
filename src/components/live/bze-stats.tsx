'use client';

import { toSupplyStats } from '@/lib/live';
import type { LiveClient } from '@/lib/live-client';

import { useLive } from './live-context';
import { FailLine, Sk } from './states';

async function loadStats(client: LiveClient) {
    const [totalSupplyUbze, pool, communityPool] = await Promise.all([client.totalSupply(), client.stakingPool(), client.communityPool()]);

    return toSupplyStats({ totalSupplyUbze, bondedUbze: pool.bonded_tokens, communityPool });
}

const CARDS = [
    { key: 'total', label: 'Total supply', d: 'All BZE that exists today, burned coins excluded.' },
    { key: 'staked', label: 'Staked', d: 'Locked with validators to secure the network.' },
    { key: 'communityPool', label: 'Community pool', d: 'A reserve spent only through governance votes.' },
] as const;

/** The BZE page stat strip: three live numbers and the fixed max supply. */
export function BzeStats() {
    const [state, retry] = useLive(loadStats);

    return (
        <>
            <div className="g4">
                {CARDS.map((c) => (
                    <div className="card stat" key={c.key}>
                        <span className="l">{c.label}</span>
                        {state.status === 'loading' && <Sk w={120} h={28} />}
                        {state.status === 'ok' && <span className="n">{state.data[c.key]}</span>}
                        {state.status === 'failed' && <span className="n">—</span>}
                        <span className="d">{c.d}</span>
                    </div>
                ))}
                <div className="card stat">
                    <span className="l">Max supply</span>
                    <span className="n">400M</span>
                    <span className="d">The most BZE that will ever exist.</span>
                </div>
            </div>
            {state.status === 'failed' ? (
                <FailLine onRetry={retry} style={{ margin: '12px 0 0' }}>{"Couldn't load the live numbers right now."}</FailLine>
            ) : (
                <p style={{ margin: '12px 0 0', fontSize: '13px', color: 'var(--faint)', display: 'flex', alignItems: 'center', gap: '8px' }}><span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#34D399' }} />Live from the chain</p>
            )}
        </>
    );
}
