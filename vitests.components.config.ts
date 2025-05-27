import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
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
})
