import type { Metadata } from 'next';

import { UnderTheHoodBody } from '@/components/pages/UnderTheHood';
import { PageShell } from '@/components/site/PageShell';
import { pageMetadata } from '@/lib/seo';

import '@/styles/pages/network.css';

export const metadata: Metadata = pageMetadata('network');

export default function UnderTheHoodPage() {
    return (
        <PageShell page="network" scope="network" glow="inner">
            <UnderTheHoodBody />
        </PageShell>
    );
}
