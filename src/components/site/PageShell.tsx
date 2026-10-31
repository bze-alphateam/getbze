import type { ReactNode } from 'react';

import { Footer } from './Footer';
import { Header } from './Header';
import type { PageKey } from './nav';

// The hero glow: full strength on Home, half strength (the theme's inner-page glow) elsewhere.
const GLOW = {
    home: { height: '720px', background: 'var(--hg-glow)' },
    inner: { height: '480px', background: 'var(--hg-glow-inner)' },
};

/** Every page: the board's scope class, the hero glow, header and footer. */
export function PageShell({ page, scope, children, glow = 'inner', glowHeight }: { page: PageKey; scope: string; children: ReactNode; glow?: 'home' | 'inner' | 'none'; glowHeight?: number }) {
    return (
        <div className={`v pg-${scope}`}>
            {glow !== 'none' && <div aria-hidden="true" style={{ position: 'absolute', inset: '0 0 auto 0', pointerEvents: 'none', ...GLOW[glow], ...(glowHeight ? { height: `${glowHeight}px` } : {}) }} />}
            <Header page={page} />
            <main>{children}</main>
            <Footer />
        </div>
    );
}
