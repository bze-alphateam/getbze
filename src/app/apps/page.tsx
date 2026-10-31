import type { Metadata } from 'next';

import { AppsBody } from '@/components/pages/Apps';
import { PageShell } from '@/components/site/PageShell';

import '@/styles/pages/apps.css';

export const metadata: Metadata = {
    title: "Apps",
    description: "Apps that work together. Move between them freely, and your token looks like yours in every one.",
};

export default function AppsPage() {
    return (
        <PageShell page="apps" scope="apps" glow="inner" glowHeight={520}>
            <AppsBody />
        </PageShell>
    );
}
