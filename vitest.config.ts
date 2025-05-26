/// <reference types="vitest" />

import { mergeConfig, defineConfig, configDefaults } from 'vitest/config'
import viteConfig from './vite.config'

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      globals: true,
      environment: 'jsdom',
      include: ['tests/**/*.spec.ts'],
      exclude: [...configDefaults.exclude, 'tests/e2e/*.spec.ts'],
      sequence: { shuffle: true },
      coverage: {
        provider: 'istanbul', // or 'v8'
        reporter: ['text', 'json', 'html'],
        include: ['src/**/*.vue', 'src/**/*.ts', 'src/**/*.js'],
        exclude: ['**/main.ts', 'src/vite-env.d.ts', 'tests/**/*.spec.ts'],
      },
    },
    resolve: {
      alias: {
        '@': '/src',
      },
    },
  }),
)
