import { test, expect } from '@playwright/test';
import { describe } from 'node:test';


test.describe('Playwright', async () => {
    
  test('check playright page', async ({ page }) => {
    await page.goto('https://playwright.dev/');
    
    await page.locator('//a[@class=\'getStarted_Sjon\']').click();
    await expect(page.locator('//div[@class=\'theme-doc-markdown markdown\']/header/h1[contains(text(),\'Installation\')]')).toBeVisible();
  });
  
});