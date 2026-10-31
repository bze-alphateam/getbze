import type { Metadata } from 'next';

import { UnderTheHoodBody } from '@/components/pages/UnderTheHood';
import { PageShell } from '@/components/site/PageShell';

import '@/styles/pages/network.css';

export const metadata: Metadata = {
    title: "Under the hood",
    description: "How BeeZee works: what the chain can do, connected chains, security and audits, explorers and building on BeeZee.",
};

export default function UnderTheHoodPage() {
    return (
        <PageShell page="network" scope="network" glow="inner">
            <UnderTheHoodBody />
        </PageShell>
    );
}
