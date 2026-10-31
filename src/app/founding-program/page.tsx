import type { Metadata } from 'next';

import { FoundingProgramBody } from '@/components/pages/FoundingProgram';
import { PageShell } from '@/components/site/PageShell';

import '@/styles/pages/program.css';

export const metadata: Metadata = {
    title: "Founding Program",
    description: "We're hand-picking ten communities and projects. We cover the costs, guide you at every step, and your feedback shapes what we build next.",
};

export default function FoundingProgramPage() {
    return (
        <PageShell page="program" scope="program" glow="inner">
            <FoundingProgramBody />
        </PageShell>
    );
}
