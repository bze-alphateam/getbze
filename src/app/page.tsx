import type { Metadata } from 'next';

import { HomeBody } from '@/components/pages/Home';
import { PageShell } from '@/components/site/PageShell';
import { homeJsonLd, pageMetadata } from '@/lib/seo';

import '@/styles/pages/home.css';

export const metadata: Metadata = pageMetadata('home');

export default function HomePage() {
    return (
        <PageShell page="home" scope="home" glow="home">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(homeJsonLd()) }} />
            <HomeBody />
        </PageShell>
    );
}
