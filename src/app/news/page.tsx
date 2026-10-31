import type { Metadata } from 'next';

import { NewsBody } from '@/components/pages/News';
import { PageShell } from '@/components/site/PageShell';

import '@/styles/pages/news.css';

export const metadata: Metadata = {
    title: "News & community",
    description: "The latest BeeZee articles and the places to talk with the team and the community.",
};

export default function NewsPage() {
    return (
        <PageShell page="news" scope="news" glow="inner">
            <NewsBody />
        </PageShell>
    );
}
