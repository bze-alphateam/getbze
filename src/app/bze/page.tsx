import type { Metadata } from 'next';

import { BzeBody } from '@/components/pages/Bze';
import { PageShell } from '@/components/site/PageShell';

import '@/styles/pages/bze.css';

export const metadata: Metadata = {
    title: "BZE coin",
    description: "BZE secures the network, pays for launches and is burned as the chain is used. Get it, stake it and track it.",
};

export default function BzePage() {
    return (
        <PageShell page="bze" scope="bze" glow="inner">
            <BzeBody />
        </PageShell>
    );
}
