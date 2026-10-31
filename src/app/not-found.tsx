import type { Metadata } from 'next';

import { NotFoundBody } from '@/components/pages/NotFound';
import { PageShell } from '@/components/site/PageShell';
import { NOT_FOUND_TITLE } from '@/lib/seo';

import '@/styles/pages/notfound.css';

export const metadata: Metadata = {
    title: { absolute: NOT_FOUND_TITLE },
    robots: { index: false, follow: true },
};

export default function NotFoundPage() {
    return (
        <PageShell page="notfound" scope="notfound" glow="none">
            <NotFoundBody />
        </PageShell>
    );
}
