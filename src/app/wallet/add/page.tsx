import type { Metadata } from 'next';

import { WalletAddClient } from '@/components/wallet-add-client';
import { PageShell } from '@/components/site/PageShell';
import { pageMetadata } from '@/lib/seo';

import '@/styles/pages/wallet.css';

export const metadata: Metadata = pageMetadata('walletAdd');

export default function WalletAddPage() {
    return (
        <PageShell page="wallet" scope="wallet" glow="inner">
            <WalletAddClient />
        </PageShell>
    );
}
