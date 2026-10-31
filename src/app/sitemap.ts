import type { MetadataRoute } from 'next';

import { PROGRAM_LINK } from '@/data/links';
import { absoluteUrl, listedPages } from '@/lib/seo';

// Built once into out/sitemap.xml by the static export.
export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
    return listedPages(PROGRAM_LINK).map((page) => ({ url: absoluteUrl(page.path) }));
}
