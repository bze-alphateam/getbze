import type { Metadata } from 'next';

import { NewsBody } from '@/components/pages/News';
import { PageShell } from '@/components/site/PageShell';
import { pageMetadata } from '@/lib/seo';

import '@/styles/pages/news.css';

export const metadata: Metadata = pageMetadata('news');

export default function NewsPage() {
    return (
        <PageShell page="news" scope="news" glow="inner">
            <NewsBody />
        </PageShell>
    );
}
