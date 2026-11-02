'use client';

import { useEffect, useState } from 'react';

import type { FetchFn } from '@/lib/live-client';
import { ADD_TOKEN_OPENED_EVENT, DETECT_MS, loadTokenInfo, parseCode, referrerOrigin, shortCode, type TokenInfo, withFrom } from '@/lib/wallet-add';

/** What the page needs from the browser, so tests can hand in a fake one. */
export interface WalletAddBrowser {
    pathname: string;
    search: string;
    hash: string;
    referrer: string;
    origin: string;
    /** Navigates without leaving a history entry (location.replace). */
    redirect: (url: string) => void;
    /** Rewrites the address bar without navigating (history.replaceState). */
    rewriteUrl: (url: string) => void;
    /** Listens to the wallet's window event; returns the unsubscribe. */
    onOpened: (listener: () => void) => () => void;
    copy: (text: string) => Promise<void>;
}

export function windowBrowser(): WalletAddBrowser {
    return {
        pathname: window.location.pathname,
        search: window.location.search,
        hash: window.location.hash,
        referrer: document.referrer,
        origin: window.location.origin,
        redirect: (url) => window.location.replace(url),
        rewriteUrl: (url) => window.history.replaceState(window.history.state, '', url),
        onOpened: (listener) => {
            window.addEventListener(ADD_TOKEN_OPENED_EVENT, listener);

            return () => window.removeEventListener(ADD_TOKEN_OPENED_EVENT, listener);
        },
        copy: (text) => navigator.clipboard.writeText(text),
    };
}

type View =
    | { kind: 'start' }
    | { kind: 'detecting' | 'opened' | 'missing'; code: string }
    | { kind: 'generic' };

function Install({ storeUrl }: { storeUrl: string }) {
    if (!storeUrl) {
        return <span className="chip" style={{ alignSelf: 'center' }}>BeePocket is coming soon</span>;
    }

    return (
        // A new tab, so this one stays open for the wallet to read the code after it is installed.
        <a className="btn btn-p" href={storeUrl} target="_blank" rel="noopener">Install BeePocket</a>
    );
}

function Brand() {
    return <img src="/brand/beepocket-icon.png" alt="BeePocket" width={72} height={72} style={{ borderRadius: '18px' }} />;
}

function TokenCard({ info, copy }: { info: TokenInfo | null; copy: (text: string) => Promise<void> }) {
    const [copied, setCopied] = useState(false);
    if (!info) {
        return null;
    }
    const onCopy = () => copy(info.code).then(() => setCopied(true), () => undefined);

    return (
        <div className="card" style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '6px', textAlign: 'left', width: '100%', maxWidth: '420px' }}>
            {info.symbol && <strong style={{ fontSize: '20px' }}>{info.symbol}</strong>}
            {info.name && <span style={{ color: 'var(--muted)', fontSize: '14px' }}>{info.name}</span>}
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', justifyContent: 'space-between' }}>
                <span className="mono" title={info.code} style={{ fontSize: '13px', color: 'var(--text-2)', wordBreak: 'break-all' }}>{shortCode(info.code)}</span>
                <button type="button" className="chip" onClick={onCopy} style={{ cursor: 'pointer' }}>{copied ? 'Copied' : 'Copy'}</button>
            </div>
            {info.unknown && <span style={{ color: 'var(--muted)', fontSize: '14px' }}>BeePocket will look this token up when it opens.</span>}
        </div>
    );
}

/**
 * The add-a-token link target. All logic runs in the browser (the static export has no query
 * at build time): fix a slash-less URL, wait for the wallet's event, otherwise offer the install.
 * The code is never sent anywhere except to the chain's REST host for the token's name.
 */
export function WalletAdd({ restHost, storeUrl, fetchFn, getBrowser = windowBrowser, detectMs = DETECT_MS }: {
    restHost: string;
    storeUrl: string;
    fetchFn: FetchFn;
    getBrowser?: () => WalletAddBrowser;
    detectMs?: number;
}) {
    const [view, setView] = useState<View>({ kind: 'start' });
    const [info, setInfo] = useState<TokenInfo | null>(null);

    useEffect(() => {
        const b = getBrowser();
        // The wallet only runs on /wallet/add/, and nginx serves /wallet/add without redirecting.
        if (b.pathname === '/wallet/add') {
            b.redirect(`/wallet/add/${b.search}${b.hash}`);

            return;
        }
        const fromQuery = withFrom(b.search, referrerOrigin(b.referrer, b.origin));
        if (fromQuery !== null) {
            b.rewriteUrl(`${b.pathname}${fromQuery}${b.hash}`);
        }

        const code = parseCode(b.search);
        let active = true;
        // The browser is only readable after mount, so the first view is set from a microtask.
        queueMicrotask(() => active && setView(code === null ? { kind: 'generic' } : { kind: 'detecting', code }));
        if (code === null) {
            return () => {
                active = false;
            };
        }

        const stop = b.onOpened(() => active && setView({ kind: 'opened', code }));
        const timer = setTimeout(() => active && setView((v) => (v.kind === 'detecting' ? { kind: 'missing', code } : v)), detectMs);
        loadTokenInfo(code, restHost, fetchFn).then((loaded) => active && setInfo(loaded));

        return () => {
            active = false;
            clearTimeout(timer);
            stop();
        };
        // The page runs once per load; its inputs are fixed for the life of the tab.
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    if (view.kind === 'start') {
        return null;
    }

    return (
        <section style={{ padding: '72px 0', minHeight: '560px' }}>
            <div className="wrap" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: '18px' }}>
                <Brand />
                {view.kind === 'detecting' && (
                    <>
                        <h1 className="h1" style={{ margin: 0, fontSize: '32px', fontWeight: 800 }}>Opening BeePocket…</h1>
                        <p role="status" style={{ margin: 0, color: 'var(--muted)' }}>Waiting for the wallet to answer.</p>
                    </>
                )}
                {view.kind === 'opened' && (
                    <>
                        <h1 className="h1" style={{ margin: 0, fontSize: '32px', fontWeight: 800 }}>Opened in BeePocket</h1>
                        <p style={{ margin: 0, color: 'var(--muted)' }}>Check the BeePocket window to add {info?.symbol ?? 'this token'}.</p>
                    </>
                )}
                {view.kind === 'missing' && (
                    <>
                        <h1 className="h1" style={{ margin: 0, fontSize: '32px', fontWeight: 800 }}>Add this token with BeePocket</h1>
                        <TokenCard info={info ?? { code: view.code, unknown: false }} copy={(text) => getBrowser().copy(text)} />
                        <p style={{ margin: 0, color: 'var(--muted)', maxWidth: '460px' }}>BeePocket is the BeeZee wallet for community tokens. Install it, and it will start with this token.</p>
                        <Install storeUrl={storeUrl} />
                    </>
                )}
                {view.kind === 'generic' && (
                    <>
                        <h1 className="h1" style={{ margin: 0, fontSize: '32px', fontWeight: 800 }}>BeePocket</h1>
                        <p style={{ margin: 0, color: 'var(--muted)', maxWidth: '460px' }}>BeePocket is the BeeZee wallet for community tokens. Open a token link from your community to add it in one step.</p>
                        <Install storeUrl={storeUrl} />
                    </>
                )}
            </div>
        </section>
    );
}
