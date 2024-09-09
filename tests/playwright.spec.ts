import { test, expect } from '@playwright/test';
import { describe } from 'node:test';
import { PlaywrightPage } from '../pages/playwright-page';

test.describe('Playwright', async () => {
  test('check playright page', async ({ page }) => {
    const playwrightPage = new PlaywrightPage(page);
    await page.goto('https://playwright.dev/');
    
    await playwrightPage.getStartedClick();
    await expect(playwrightPage.installationHeader).toBeVisible();
  });
});