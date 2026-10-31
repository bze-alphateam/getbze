import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { FoundingProgramBody } from '@/components/pages/FoundingProgram';
import { PageShell } from '@/components/site/PageShell';
import { PROGRAM_LINK } from '@/data/links';
import { programShown } from '@/lib/program';
import { pageMetadata } from '@/lib/seo';

import '@/styles/pages/program.css';

export const metadata: Metadata = programShown(PROGRAM_LINK) ? pageMetadata('program') : {};

export default function FoundingProgramPage() {
    // Without a valid link or "soon" the program is hidden: the route exports the 404 page.
    if (!programShown(PROGRAM_LINK)) {
        notFound();
    }

    return (
        <PageShell page="program" scope="program" glow="inner">
            <FoundingProgramBody />
        </PageShell>
    );
}
