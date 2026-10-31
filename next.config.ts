import type { NextConfig } from 'next';

// Static export: every route becomes its own HTML file (out/<route>/index.html),
// served by nginx in docker/prod. No server runtime.
//
// The public endpoints are inlined at build time. NEXT_PUBLIC_* is the name going
// forward; the REACT_APP_* names of the old CRA build are still read so an existing
// build env keeps working unchanged.
const env = (name: string, fallback: string): string =>
  process.env[`NEXT_PUBLIC_${name}`] ?? process.env[`REACT_APP_${name}`] ?? fallback;

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: { unoptimized: true },
  env: {
    NEXT_PUBLIC_AGGREGATOR_API_HOST: env('AGGREGATOR_API_HOST', 'https://getbze.com/api'),
    NEXT_PUBLIC_BLOCKCHAIN_REST_API_HOST: env('BLOCKCHAIN_REST_API_HOST', 'https://rest.getbze.com'),
  },
};

export default nextConfig;
