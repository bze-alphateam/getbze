'use client';

import { createContext, type ReactNode, useCallback, useContext, useEffect, useState } from 'react';

import type { LiveClient } from '@/lib/live-client';

const LiveClientContext = createContext<LiveClient | null>(null);

export function LiveClientProvider({ client, children }: { client: LiveClient; children: ReactNode }) {
    return <LiveClientContext.Provider value={client}>{children}</LiveClientContext.Provider>;
}

export function useLiveClient(): LiveClient {
    const client = useContext(LiveClientContext);
    if (!client) {
        throw new Error('useLiveClient must be used inside LiveClientProvider');
    }

    return client;
}

export type LiveState<T> =
    | { status: 'loading' }
    | { status: 'ok'; data: T }
    | { status: 'failed' };

/** Runs `load` on mount; `retry` runs it again after a failure. */
export function useLive<T>(load: (client: LiveClient) => Promise<T>): [LiveState<T>, () => void] {
    const client = useLiveClient();
    const [attempt, setAttempt] = useState(0);
    const [state, setState] = useState<LiveState<T>>({ status: 'loading' });

    useEffect(() => {
        let active = true;
        load(client).then(
            (data) => active && setState({ status: 'ok', data }),
            () => active && setState({ status: 'failed' }),
        );

        return () => {
            active = false;
        };
        // `load` is a module-level function in every caller; re-running on attempt is the retry.
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [client, attempt]);

    const retry = useCallback(() => {
        setState({ status: 'loading' });
        setAttempt((n) => n + 1);
    }, []);

    return [state, retry];
}
