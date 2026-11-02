'use client';

import { BEEPOCKET_STORE_URL } from '@/data/links';

import { WalletAdd } from './wallet-add';

/** The composition root of /wallet/add: the real chain host, store link and fetch. */
export function WalletAddClient() {
    const storeUrl = BEEPOCKET_STORE_URL.startsWith('https://') ? BEEPOCKET_STORE_URL : '';

    return (
        <WalletAdd
            restHost={process.env.NEXT_PUBLIC_BLOCKCHAIN_REST_API_HOST ?? ''}
            storeUrl={storeUrl}
            fetchFn={(url) => fetch(url)}
        />
    );
}
