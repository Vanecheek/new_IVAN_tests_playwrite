import { defineConfig, devices } from '@playwright/test';

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// import dotenv from 'dotenv';
// dotenv.config({ path: path.resolve(__dirname, '.env') });

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,/* Fail the build on CI if you accidentally left test.only in the source code. */
  retries: process.env.CI ? 0 : 0,  /* Retry on CI only */
  workers: process.env.CI ? 5 : 5,  /* Opt out of parallel tests on "CI : local" */
  use: {
    screenshot: 'on',
    trace: 'on-first-retry',
    baseURL: 'https://jsonplaceholder.typicode.com',
  },
  reporter: [
    ['list'],
    ['allure-playwright']
  ],

  projects: [
      {
        name: 'chromium',
        use: { ...devices['Desktop Chrome'] },
      },
  ],
});
