import { Page, Locator, expect } from '@playwright/test';
import { locators } from '../locators/locators';

export class StoreItemDetails {
  private addToCartButton: Locator;
  private description: Locator;

  constructor(private page: Page) {
    this.addToCartButton = page.locator(locators.store.itemDetails.addToCart);
    this.description = page.locator(locators.store.itemDetails.description);
  }

  async clickAddToCart() {
    await this.addToCartButton.click();
  }

  async assertItemTitle(title: string) {
    await expect(this.description).toHaveText(title);
  }
}
