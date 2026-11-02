import type { Metadata } from 'next';

import { WalletAddClient } from '@/components/wallet-add-client';
import { EARLY_SCRIPT } from '@/lib/wallet-add';
import { pageMetadata } from '@/lib/seo';

import '@/styles/pages/wallet.css';

export const metadata: Metadata = pageMetadata('walletAdd');

export default function WalletAddPage() {
    // The header and footer come with the client component: a slash-less URL is redirected
    // before anything is drawn, and the early script records the wallet's event meanwhile.
    return (
        <>
            <script dangerouslySetInnerHTML={{ __html: EARLY_SCRIPT }} />
            <WalletAddClient />
        </>
    );
}
