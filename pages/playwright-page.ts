import {Locator, Page } from '@playwright/test';

export class PlaywrightPage {
  readonly page: Page;
  readonly getStartedButton: Locator;
  readonly installationHeader: Locator;
  
  constructor(page: Page) {
    this.page = page;
    this.getStartedButton = page.locator('//a[@class=\'getStarted_Sjon\']');
    this.installationHeader = page.locator('//div[@class=\'theme-doc-markdown markdown\']/header/h1[contains(text(),\'Installation\')]');
  }

  async getStartedClick(){
    await this.getStartedButton.click();
  }
}