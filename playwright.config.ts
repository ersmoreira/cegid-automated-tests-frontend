import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  outputDir: './out/test-results',
  timeout: 60 * 1000,
  expect: {
    timeout: 10 * 1000,
  },
  reporter: [['html', { outputFolder: 'out/reports/report', open: 'never' }]],
  use: {
    baseURL: 'https://www.demoblaze.com/',
    trace: 'on',
    viewport: { width: 1920, height: 1080 },
    timezoneId: 'Europe/Lisbon',
  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
});
