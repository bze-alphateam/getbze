import type { Metadata } from 'next';

import { RoadmapBody } from '@/components/pages/Roadmap';
import { PageShell } from '@/components/site/PageShell';
import { pageMetadata } from '@/lib/seo';

import '@/styles/pages/roadmap.css';

export const metadata: Metadata = pageMetadata('roadmap');

export default function RoadmapPage() {
    return (
        <PageShell page="roadmap" scope="roadmap" glow="inner">
            <RoadmapBody />
        </PageShell>
    );
}
