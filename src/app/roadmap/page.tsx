import type { Metadata } from 'next';

import { RoadmapBody } from '@/components/pages/Roadmap';
import { PageShell } from '@/components/site/PageShell';

import '@/styles/pages/roadmap.css';

export const metadata: Metadata = {
    title: "Roadmap",
    description: "What's next for BeeZee, and everything we've shipped so far.",
};

export default function RoadmapPage() {
    return (
        <PageShell page="roadmap" scope="roadmap" glow="inner">
            <RoadmapBody />
        </PageShell>
    );
}
