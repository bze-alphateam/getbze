import { defineConfig } from 'vitest/config';

// The export tests read out/ after `yarn build`; the unit tests (vitest.config.ts) never need a build.
export default defineConfig({
  test: {
    environment: 'jsdom',
    globals: true,
    include: ['tests/export/**/*.test.ts'],
  },
});
