import coreWebVitals from 'eslint-config-next/core-web-vitals';
import typescript from 'eslint-config-next/typescript';

const eslintConfig = [
  { ignores: ['.next/**', 'out/**', 'node_modules/**', 'next-env.d.ts'] },
  ...coreWebVitals,
  ...typescript,
  {
    rules: {
      // Static export with unoptimized images: next/image adds nothing here.
      '@next/next/no-img-element': 'off',
    },
  },
];

export default eslintConfig;
