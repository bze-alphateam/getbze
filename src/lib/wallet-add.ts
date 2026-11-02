// The logic behind /wallet/add, the target of the "Open in BeePocket" link a community
// shares for one of its tokens: https://getbze.com/wallet/add/?code=<denom>[&from=<origin>].
// The wallet's content script reads the code itself; this page only shows what is going on.

import type { FetchFn } from './live-client';

/** The window event BeePocket dispatches on this page once its Add-a-token window is open. */
export const ADD_TOKEN_OPENED_EVENT = 'beepocket#add-token-opened';

/** How long the page waits for that event before it treats BeePocket as not installed. */
export const DETECT_MS = 2000;

const CODE_PATTERN = /^[a-zA-Z][a-zA-Z0-9/:._-]{2,127}$/;

/** The token code (a denom) from the query string, or null when it is missing or malformed. */
export function parseCode(search: string): string | null {
    const code = new URLSearchParams(search).get('code');

    return code !== null && CODE_PATTERN.test(code) ? code : null;
}

/** The linking page's origin when it is a cross-origin https page, else null. */
export function referrerOrigin(referrer: string, ownOrigin: string): string | null {
    try {
        const url = new URL(referrer);

        return url.protocol === 'https:' && url.origin !== ownOrigin ? url.origin : null;
    } catch {
        return null;
    }
}

/** The query string with `from` added, or null when it is already there or there is nothing to add. */
export function withFrom(search: string, origin: string | null): string | null {
    const params = new URLSearchParams(search);
    if (origin === null || params.has('from')) {
        return null;
    }
    params.set('from', origin);

    return `?${params.toString()}`;
}

export interface TokenInfo {
    code: string;
    /** Absent when the chain has no metadata for the code. */
    symbol?: string;
    name?: string;
    /** True when the code is a valid denom the chain knows nothing about (the wallet looks it up). */
    unknown: boolean;
}

interface DenomMetadataResponse {
    metadata?: { symbol?: string; display?: string; name?: string };
}

/**
 * Name and symbol of a token: BZE is built in, IBC tokens are shown by code, everything else
 * comes from the chain's bank metadata. A failed request counts as no metadata.
 */
export async function loadTokenInfo(code: string, restHost: string, fetchFn: FetchFn): Promise<TokenInfo> {
    if (code === 'ubze') {
        return { code, symbol: 'BZE', name: 'BeeZee', unknown: false };
    }
    if (code.startsWith('ibc/')) {
        return { code, unknown: false };
    }
    try {
        const resp = await fetchFn(`${restHost}/cosmos/bank/v1beta1/denoms_metadata_by_query_string?denom=${encodeURIComponent(code)}`);
        if (!resp.ok) {
            return { code, unknown: true };
        }
        const { metadata } = (await resp.json()) as DenomMetadataResponse;
        const symbol = metadata?.symbol || metadata?.display;
        if (!symbol) {
            return { code, unknown: true };
        }

        return { code, symbol, name: metadata?.name || undefined, unknown: false };
    } catch {
        return { code, unknown: true };
    }
}

/** A long code shortened for the card ("factory/bze1…/token" → "factory/bze1abc…xyz/token"). */
export function shortCode(code: string): string {
    return code.length <= 28 ? code : `${code.slice(0, 16)}…${code.slice(-10)}`;
}
