import { test, expect } from '@playwright/test';
import { describe } from 'node:test';


test.describe('Rozetka', async () => {

  test('check catalog appeared', async ({ page }) => {
    await page.goto('https://rozetka.com.ua/');
  
    await page.locator('').click();
  
    await expect(page.locator('//li[@class="menu-categories__item"]/a[contains(@href,"computers-notebooks")]')).toBeVisible();
    await expect(page.locator('//li[@class="menu-categories__item"]/a[contains(@href,"computers-notebooks")]')).toBeInViewport();
  });

  test('check search result', async ({ page }) => {
    var search = "Mouse";
    await page.goto('https://rozetka.com.ua/');

    await page.locator('//input[@rzsearchinput]').pressSequentially(search);
    await page.keyboard.press("Enter");

    //Check search result
    await expect(page.locator('//div[contains(@class,"search-header")]//span')).toHaveText(search);
  });

  test('check catalog count', async ({ page }) => {
    await page.goto('https://rozetka.com.ua/');
  
    await page.locator('//rz-fat-menu-header-btn/button').click();
    await expect(page.locator('//li[@class="menu-categories__item"]/a[contains(@href,"computers-notebooks")]')).toBeVisible();
    
    await expect(page.locator('//div[@cdktrapfocus]/ul/li[@class="menu-categories__item"]/a')).toHaveCount(33);
  });
  
});