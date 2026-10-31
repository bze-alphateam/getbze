import { HomeBody } from '@/components/pages/Home';
import { PageShell } from '@/components/site/PageShell';

import '@/styles/pages/home.css';

export default function HomePage() {
    return (
        <PageShell page="home" scope="home" glow="home">
            <HomeBody />
        </PageShell>
    );
}
