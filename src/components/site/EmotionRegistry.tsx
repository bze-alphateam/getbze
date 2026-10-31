'use client';

import createCache from '@emotion/cache';
import { CacheProvider } from '@emotion/react';
import { useServerInsertedHTML } from 'next/navigation';
import { type ReactNode, useState } from 'react';

interface Inserted {
    name: string;
    isGlobal: boolean;
}

/**
 * Collects the styles Chakra (Emotion) writes while a page renders on the server and
 * puts them in the document head. Without it Emotion writes its <style> tags inline,
 * next to the page markup, while the browser puts them in <head>, so hydration fails
 * and React re-renders every page from scratch.
 */
export function EmotionRegistry({ children }: { children: ReactNode }) {
    const [registry] = useState(() => {
        const cache = createCache({ key: 'css' });
        cache.compat = true;
        const insert = cache.insert;
        let inserted: Inserted[] = [];
        cache.insert = (...args) => {
            const [selector, serialized] = args;
            if (cache.inserted[serialized.name] === undefined) {
                inserted.push({ name: serialized.name, isGlobal: !selector });
            }

            return insert(...args);
        };
        const flush = () => {
            const flushed = inserted;
            inserted = [];

            return flushed;
        };

        return { cache, flush };
    });

    useServerInsertedHTML(() => {
        const names = registry.flush();
        if (names.length === 0) {
            return null;
        }

        const globals: { name: string; style: string }[] = [];
        let styles = '';
        let dataEmotion = registry.cache.key;
        for (const { name, isGlobal } of names) {
            const style = registry.cache.inserted[name];
            if (typeof style !== 'string') {
                continue;
            }
            if (isGlobal) {
                globals.push({ name, style });
            } else {
                styles += style;
                dataEmotion += ` ${name}`;
            }
        }

        return (
            <>
                {globals.map(({ name, style }) => (
                    <style key={name} data-emotion={`${registry.cache.key}-global ${name}`} dangerouslySetInnerHTML={{ __html: style }} />
                ))}
                {styles && <style data-emotion={dataEmotion} dangerouslySetInnerHTML={{ __html: styles }} />}
            </>
        );
    });

    return <CacheProvider value={registry.cache}>{children}</CacheProvider>;
}
