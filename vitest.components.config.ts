import { defineConfig, mergeConfig } from 'vitest/config'
import viteConfig from './vite.config'

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      name: 'components',
      setupFiles: './vitest.components.setup.ts', // setup file, perfect for global mock
      globals: true,
      environment: 'jsdom', // evite une erreur
      server: {
        deps: {
          inline: ['vuetify'], // évite erreur lié à vuetify
        },
      },
      include: ['tests/components/**/*.{test,spec}.{js,jsx,ts,tsx}'],
    },
  }),
)
