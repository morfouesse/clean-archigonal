import { defineConfig, mergeConfig } from 'vitest/config'
import viteConfig from './vite.config'

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      name: 'units',
      include: ['tests/units/**/*.{test,spec}.{js,jsx,ts,tsx}'],
      coverage: {
        provider: 'istanbul',
        reporter: ['text', 'json', 'html'],
        reportsDirectory: './coverage/units',
        include: ['src/**/*.ts', 'src/**/*.js'],
        exclude: [
          '**/router/index.ts',
          '**/main.ts',
          'src/vite-env.d.ts',
          'tests/**/*.spec.ts',
          'src/**/*.vue',
        ],
      },
    },
  }),
)
