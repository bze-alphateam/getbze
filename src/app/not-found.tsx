import type { Metadata } from 'next';

import { NotFoundBody } from '@/components/pages/NotFound';
import { PageShell } from '@/components/site/PageShell';

import '@/styles/pages/notfound.css';

export const metadata: Metadata = {
    title: 'Page not found',
    robots: { index: false },
};

export default function NotFoundPage() {
    return (
        <PageShell page="notfound" scope="notfound" glow="none">
            <NotFoundBody />
        </PageShell>
    );
}
