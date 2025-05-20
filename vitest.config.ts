/// <reference types="vitest" />

import { mergeConfig, defineConfig, configDefaults } from 'vitest/config'
import viteConfig from './vite.config'

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      environment: 'jsdom',
      include: ['tests/**/*.spec.ts'],
      exclude: [...configDefaults.exclude, 'tests/e2e/*.spec.ts'],
      sequence: { shuffle: true },
    },
    resolve: {
      alias: {
        '@': '/src',
      },
    },
  }),
)
