'use client';

import type { ReactNode } from 'react';

import { activeBzeRaffle } from '@/lib/live';
import type { LiveClient } from '@/lib/live-client';

import { useLive } from './live-context';

async function loadRaffle(client: LiveClient) {
    const [raffles, epoch] = await Promise.all([client.raffles(), client.currentEpoch('hour')]);

    return activeBzeRaffle(raffles, epoch);
}

/**
 * Stake card plus the raffle card. The raffle card exists only while a BZE raffle is open:
 * while loading, when none is open or when its data fails, staking takes the full width.
 */
export function EarnRow({ stake }: { stake: ReactNode }) {
    const [state] = useLive(loadRaffle);
    const raffle = state.status === 'ok' ? state.data : null;

    if (!raffle) {
        return <div className="split" style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1fr)', gap: '16px' }}>{stake}</div>;
    }

    return (
        <div className="split" style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1.6fr) minmax(0,1fr)', gap: '16px', alignItems: 'stretch' }}>
            {stake}
            <div className="feat" data-testid="raffle-card">
                <div className="in" style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '14px' }}>
                    <div aria-hidden="true" style={{ position: 'absolute', inset: '0', background: 'radial-gradient(80% 70% at 50% 0%,rgba(255,138,31,0.14),rgba(10,12,16,0) 70%)', pointerEvents: 'none' }} />
                    <span style={{ position: 'relative', display: 'flex', alignItems: 'center', gap: '8px', fontSize: '12px', fontWeight: '700', letterSpacing: '.08em', textTransform: 'uppercase', color: '#FFB27A' }}><span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#34D399' }} />Raffle running now</span>
                    <strong style={{ position: 'relative', fontSize: '20px' }}>Win part of the burn</strong>
                    <div style={{ position: 'relative', display: 'grid', gridTemplateColumns: 'repeat(2,minmax(0,1fr))', gap: '8px' }}>
                        <div style={{ background: 'var(--inset)', borderRadius: '12px', padding: '12px 14px' }}>
                            <div style={{ fontSize: '12px', color: 'var(--faint)' }}>Prize pool</div>
                            <div style={{ fontSize: '18px', fontWeight: '700', marginTop: '4px' }}>{raffle.prizePool} BZE</div>
                        </div>
                        <div style={{ background: 'var(--inset)', borderRadius: '12px', padding: '12px 14px' }}>
                            <div style={{ fontSize: '12px', color: 'var(--faint)' }}>Ticket</div>
                            <div style={{ fontSize: '18px', fontWeight: '700', marginTop: '4px' }}>{raffle.ticketPrice} BZE</div>
                        </div>
                    </div>
                    <span style={{ position: 'relative', fontSize: '14px', color: 'var(--muted)' }}>{`Ends in ${raffle.endsIn}.`}</span>
                    <a className="btn" href="https://burner.getbze.com" target="_blank" rel="noopener" style={{ position: 'relative', background: 'var(--brn)', color: '#1A0A00', height: '44px', marginTop: 'auto' }}>Join the raffle</a>
                </div>
            </div>
        </div>
    );
}
