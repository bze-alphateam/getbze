import type { Metadata } from 'next';

import { AppsBody } from '@/components/pages/Apps';
import { PageShell } from '@/components/site/PageShell';
import { pageMetadata } from '@/lib/seo';

import '@/styles/pages/apps.css';

export const metadata: Metadata = pageMetadata('apps');

export default function AppsPage() {
    return (
        <PageShell page="apps" scope="apps" glow="inner" glowHeight={520}>
            <AppsBody />
        </PageShell>
    );
}
