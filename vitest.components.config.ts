import { defineConfig, mergeConfig } from 'vitest/config'
import viteConfig from './vite.config'

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      setupFiles: './vitest.components.setup.ts', // setup file, perfect for global mock
      globals: true,
      environment: 'jsdom', // evite une erreur
      server: {
        deps: {
          inline: ['vuetify'], // évite erreur lié à vuetify
        },
      },
      include: ['tests/components/**/*.{test,spec}.{js,jsx,ts,tsx}'],
      coverage: {
        provider: 'istanbul',
        reporter: ['text', 'json', 'html'],
        reportsDirectory: './coverage/components',
        include: ['src/**/*.vue'],
        // à voire
        //exclude: [
        //  '**/router/index.ts',
        //   '**/main.ts',
        //   'src/vite-env.d.ts',
        //  'tests/**/*.spec.ts',
        //   'src/**/*.vue',
        // ],
      },
    },
  }),
)
