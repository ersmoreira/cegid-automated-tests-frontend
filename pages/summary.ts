import { Page, Locator, expect } from '@playwright/test';
import { locators } from '../locators/locators';
import { dictionary } from '../data/dictionary';

export class Summary {
  private title: Locator;
  private okButton: Locator;

  constructor(private page: Page) {
    this.title = page.locator(locators.summary.title);
    this.okButton = page.locator(locators.summary.okButton);
  }

  async assertTitle() {
    await expect(this.title).toHaveText(dictionary.summary.title);
  }

  async clickOkButton() {
    await this.okButton.click();
  }
}
