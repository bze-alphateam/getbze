'use client';

import { feeCoinMinimum, feeMeter } from '@/lib/live';
import type { LiveClient } from '@/lib/live-client';

import { useLive } from './live-context';
import { FailLine, Sk } from './states';

async function loadMinimum(client: LiveClient) {
    const min = feeCoinMinimum((await client.tradebinParams()).minNativeLiquidityForModuleSwap);
    if (!min) {
        throw new Error('unreadable minimum');
    }

    return feeMeter(min);
}

/** The fee-coin card: the live minimum in the sentence and the example meter. */
export function FeeCoin({ intro, actions }: { intro: React.ReactNode; actions: React.ReactNode }) {
    const [state, retry] = useLive(loadMinimum);

    return (
        <div className="card fee" style={state.status === 'failed' ? { gridTemplateColumns: 'minmax(0,1fr)' } : undefined}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {intro}
                <span className="d" style={{ fontSize: '15px' }}>
                    {'Put your token in a pool with BZE. Once the pool holds '}
                    {state.status === 'ok' && <>at least <strong style={{ color: 'var(--text)' }}>{state.data.minimum} BZE</strong></>}
                    {state.status === 'loading' && <>at least <Sk w={90} h={14} style={{ display: 'inline-block', verticalAlign: 'middle' }} /></>}
                    {state.status === 'failed' && <strong style={{ color: 'var(--text)' }}>the minimum amount of BZE</strong>}
                    {', anyone can pay network fees in your token.'}
                </span>
                <ul className="tick">
                    <li>Happens by itself: no request, no approval, no vote</li>
                    <li>Qualifies for as long as the pool stays above the minimum</li>
                    <li>Fees paid in your token are swapped to BZE in the same pool</li>
                </ul>
                {state.status === 'failed' && <FailLine as="span" onRetry={retry}>{"Couldn't load the minimum right now."}</FailLine>}
                {actions}
            </div>
            {state.status === 'loading' && (
                <div className="meter" aria-hidden="true">
                    <span style={{ fontSize: '12px', fontWeight: '700', letterSpacing: '.08em', textTransform: 'uppercase', color: 'var(--faint)' }}>Example · HRB / BZE pool</span>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}><Sk w={150} h={22} /><Sk w={90} h={12} /></div>
                    <Sk w="100%" h={10} r={999} />
                    <Sk w={130} h={12} />
                </div>
            )}
            {state.status === 'ok' && (
                <div className="meter" data-testid="fee-meter">
                    <span style={{ fontSize: '12px', fontWeight: '700', letterSpacing: '.08em', textTransform: 'uppercase', color: 'var(--faint)' }}>Example · HRB / BZE pool</span>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: '8px' }}>
                        <strong style={{ fontSize: '22px' }}>{state.data.example} BZE</strong>
                        <span style={{ fontSize: '13px', color: 'var(--faint)' }}>{`of ${state.data.minimum} min`}</span>
                    </div>
                    <div className="bar">
                        <i style={{ width: `${state.data.fillPercent}%` }} />
                        <b style={{ left: `${state.data.markPercent}%` }} />
                    </div>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', fontWeight: '600', color: '#34D399' }}><span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#34D399' }} />HRB can pay fees</span>
                </div>
            )}
        </div>
    );
}
