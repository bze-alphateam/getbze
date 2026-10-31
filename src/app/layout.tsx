import type { Metadata, Viewport } from 'next';
import localFont from 'next/font/local';
import type { ReactNode } from 'react';

import { Providers } from '@/components/site/Providers';
import { PAGES, SITE_URL } from '@/lib/seo';

import '@/styles/hive-glow-tokens.css';
import '@/styles/site.css';

// Inter and JetBrains Mono ship with the site (SIL Open Font License, see fonts/), so the
// build never fetches fonts.
const inter = localFont({
    src: [
        { path: './fonts/Inter-Regular.woff2', weight: '400', style: 'normal' },
        { path: './fonts/Inter-Medium.woff2', weight: '500', style: 'normal' },
        { path: './fonts/Inter-SemiBold.woff2', weight: '600', style: 'normal' },
        { path: './fonts/Inter-Bold.woff2', weight: '700', style: 'normal' },
        { path: './fonts/Inter-ExtraBold.woff2', weight: '800', style: 'normal' },
    ],
    variable: '--font-inter',
    display: 'swap',
});
const mono = localFont({
    src: [{ path: './fonts/JetBrainsMono-Medium.woff2', weight: '500', style: 'normal' }],
    variable: '--font-mono',
    display: 'swap',
});

export const metadata: Metadata = {
    // Every page sets its own full title, description and share tags (lib/seo.ts);
    // these are the fallbacks.
    metadataBase: new URL(SITE_URL),
    title: PAGES.home.title,
    description: PAGES.home.description,
    icons: {
        icon: [
            { url: '/favicon.ico', sizes: '48x48' },
            { url: '/favicon-32.png', type: 'image/png', sizes: '32x32' },
            { url: '/favicon-16.png', type: 'image/png', sizes: '16x16' },
        ],
        apple: '/apple-touch-icon.png',
    },
    manifest: '/manifest.json',
};

export const viewport: Viewport = {
    themeColor: '#0A0C10',
    colorScheme: 'dark',
};

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html lang="en" className={`${inter.variable} ${mono.variable}`}>
            <body data-app="site">
                <Providers>{children}</Providers>
            </body>
        </html>
    );
}
