import type { MetadataRoute } from 'next';

import { absoluteUrl } from '@/lib/seo';

// Built once into out/robots.txt by the static export.
export const dynamic = 'force-static';

export default function robots(): MetadataRoute.Robots {
    return {
        rules: { userAgent: '*', allow: '/' },
        sitemap: absoluteUrl('/sitemap.xml'),
    };
}
