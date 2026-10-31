import type { Metadata } from 'next';

import { FoundingProgramBody } from '@/components/pages/FoundingProgram';
import { PageShell } from '@/components/site/PageShell';
import { pageMetadata } from '@/lib/seo';

import '@/styles/pages/program.css';

export const metadata: Metadata = pageMetadata('program');

export default function FoundingProgramPage() {
    return (
        <PageShell page="program" scope="program" glow="inner">
            <FoundingProgramBody />
        </PageShell>
    );
}
