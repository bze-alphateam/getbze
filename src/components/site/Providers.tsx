'use client';

import { ChakraProvider, createSystem, defaultConfig } from '@chakra-ui/react';
import { type ReactNode, useState } from 'react';

import { LiveClientProvider } from '@/components/live/live-context';
import { createLiveClient, type LiveClient, withSharedRequests } from '@/lib/live-client';

import { EmotionRegistry } from './EmotionRegistry';

// Chakra supplies behaviour (the phone menu's focus trap, scroll lock and Escape); the look
// comes from the design boards' CSS, so the reset is off and nothing restyles the page.
const system = createSystem(defaultConfig, { preflight: false });

function browserClient(): LiveClient {
    return withSharedRequests(createLiveClient(
        {
            restHost: process.env.NEXT_PUBLIC_BLOCKCHAIN_REST_API_HOST ?? '',
            aggregatorHost: process.env.NEXT_PUBLIC_AGGREGATOR_API_HOST ?? '',
        },
        (url) => fetch(url),
    ));
}

export function Providers({ children }: { children: ReactNode }) {
    const [client] = useState(browserClient);

    return (
        <EmotionRegistry>
            <ChakraProvider value={system}>
                <LiveClientProvider client={client}>{children}</LiveClientProvider>
            </ChakraProvider>
        </EmotionRegistry>
    );
}
