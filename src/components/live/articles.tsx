'use client';

import { type ArticleRow, latestArticles } from '@/lib/live';
import type { LiveClient } from '@/lib/live-client';

import { useLive } from './live-context';
import { Sk } from './states';

export const MEDIUM_URL = 'https://bzedge.medium.com';

const loadArticles = (client: LiveClient) => client.articles();

const ROW_IMAGE = 'radial-gradient(90% 140% at 20% 0%,rgba(51,195,224,0.35),rgba(0,148,197,0.08) 55%,#1B2128 90%)';
const CARD_IMAGES = ['20%', '50%', '80%'].map((x) => `radial-gradient(90% 120% at ${x} 0%,rgba(51,195,224,0.30),rgba(0,148,197,0.08) 50%,#12151B 85%)`);

/** The article picture over the design's gradient, which stays as the fallback. */
function cover(image: string, gradient: string): string {
    return image ? `center / cover no-repeat url(${JSON.stringify(image)}), ${gradient}` : gradient;
}

/** Home: the latest two articles as rows inside the "Latest articles" card. */
export function HomeArticles() {
    const [state] = useLive(loadArticles);

    if (state.status === 'loading') {
        return (
            <>
                {[0, 1].map((i) => (
                    <div key={i} style={{ display: 'flex', gap: '14px', alignItems: 'center', padding: '12px 0', borderTop: '1px solid var(--div)' }}>
                        <Sk w={96} h={64} r={10} style={{ flex: 'none' }} />
                        <span style={{ display: 'flex', flexDirection: 'column', gap: '8px', flex: 1 }}><Sk w="80%" h={14} /><Sk w={110} h={10} /></span>
                    </div>
                ))}
            </>
        );
    }

    const rows = state.status === 'ok' ? latestArticles(state.data, 2) : [];
    if (rows.length === 0) {
        return <MediumFallback />;
    }

    return (
        <>
            {rows.map((a) => (
                <a key={a.url} href={a.url} target="_blank" rel="noopener" style={{ display: 'flex', gap: '14px', alignItems: 'center', padding: '12px 0', borderTop: '1px solid var(--div)', textDecoration: 'none', color: 'var(--text)' }}>
                    <span aria-hidden="true" style={{ width: '96px', height: '64px', flex: 'none', borderRadius: '10px', background: cover(a.image, ROW_IMAGE) }} />
                    <span style={{ display: 'flex', flexDirection: 'column', gap: '6px', minWidth: '0' }}>
                        <strong style={{ fontSize: '15px', lineHeight: '1.35' }}>{a.title}</strong>
                        <span className="mono" style={{ fontSize: '12px', color: 'var(--faint)' }}>{dateLine(a)}</span>
                    </span>
                </a>
            ))}
        </>
    );
}

/** News: the latest three articles as cards. */
export function NewsArticles() {
    const [state] = useLive(loadArticles);

    if (state.status === 'loading') {
        return (
            <div className="g3">
                {[0, 1, 2].map((i) => (
                    <div key={i} className="card" style={{ overflow: 'hidden' }}>
                        <Sk w="100%" h={150} r={0} style={{ display: 'block' }} />
                        <div style={{ padding: '18px 20px', display: 'flex', flexDirection: 'column', gap: '10px' }}><Sk w={110} h={10} /><Sk w="90%" h={16} /><Sk w="60%" h={16} /></div>
                    </div>
                ))}
            </div>
        );
    }

    const rows = state.status === 'ok' ? latestArticles(state.data, 3) : [];
    if (rows.length === 0) {
        return <div className="card" style={{ padding: '6px 20px' }}><MediumFallback /></div>;
    }

    return (
        <div className="g3">
            {rows.map((a, i) => (
                <a key={a.url} className="card" href={a.url} target="_blank" rel="noopener" style={{ textDecoration: 'none', color: 'var(--text)', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
                    <div style={{ height: '150px', background: cover(a.image, CARD_IMAGES[i % 3]), borderBottom: '1px solid var(--hair)' }} />
                    <div style={{ padding: '18px 20px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                        <span className="mono" style={{ fontSize: '12px', color: 'var(--faint)' }}>{dateLine(a)}</span>
                        <strong style={{ fontSize: '16px', lineHeight: '1.4' }}>{a.title}</strong>
                    </div>
                </a>
            ))}
        </div>
    );
}

function dateLine(a: ArticleRow): string {
    return a.date ? `${a.date} · Medium` : 'Medium';
}

/** Shown when the feed fails or is empty: no error, just the way to Medium. */
function MediumFallback() {
    return (
        <div data-testid="medium-fallback" style={{ display: 'flex', gap: '14px', alignItems: 'center', padding: '12px 0', borderTop: '1px solid var(--div)' }}>
            <span aria-hidden="true" style={{ width: '96px', height: '64px', flex: 'none', borderRadius: '10px', background: ROW_IMAGE }} />
            <span style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <strong style={{ fontSize: '15px' }}>Our articles live on Medium</strong>
                <a href={MEDIUM_URL} target="_blank" rel="noopener" style={{ fontSize: '14px', fontWeight: 600, textDecoration: 'none' }}>Read them on Medium ↗</a>
            </span>
        </div>
    );
}
