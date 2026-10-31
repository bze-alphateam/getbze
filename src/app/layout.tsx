import type { Metadata, Viewport } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import type { ReactNode } from 'react';

import { Providers } from '@/components/site/Providers';

import '@/styles/hive-glow-tokens.css';
import '@/styles/site.css';

const inter = Inter({ subsets: ['latin'], weight: ['400', '500', '600', '700', '800'], variable: '--font-inter', display: 'swap' });
const mono = JetBrains_Mono({ subsets: ['latin'], weight: ['500'], variable: '--font-mono', display: 'swap' });

const DESCRIPTION = 'BeeZee is a fast, low-cost blockchain with apps that work together. Launch a token, trade it, stake it and grow a community around it, with no code.';

export const metadata: Metadata = {
    metadataBase: new URL('https://getbze.com'),
    title: { default: 'BeeZee: a blockchain for your project', template: '%s · BeeZee' },
    description: DESCRIPTION,
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
