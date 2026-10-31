import type { Metadata } from 'next';

import { BzeBody } from '@/components/pages/Bze';
import { PageShell } from '@/components/site/PageShell';
import { pageMetadata } from '@/lib/seo';

import '@/styles/pages/bze.css';

export const metadata: Metadata = pageMetadata('bze');

export default function BzePage() {
    return (
        <PageShell page="bze" scope="bze" glow="inner">
            <BzeBody />
        </PageShell>
    );
}
