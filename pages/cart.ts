import { Page, Locator, expect } from '@playwright/test';
import { locators } from '../locators/locators';
import { dictionary } from '../data/dictionary';

export class Cart {
  private page: Page;
  private title: Locator;
  private placeOrderButton: Locator;
  private totalAmount: Locator;

  constructor(page: Page) {
    this.page = page;
    this.title = page.locator(locators.cart.title);
    this.placeOrderButton = page.locator(locators.cart.placeOrderButton);
    this.totalAmount = page.locator(locators.cart.totalAmount);
  }

  async assertTitle() {
    await expect(this.title).toHaveText(dictionary.cart.title);
  }

  async assertCartProducts(productList: string[]) {
    await new Promise((resolve) => setTimeout(resolve, 1500));
    const cartProducts = this.page.locator(locators.cart.productList);
    const cartProductsCount = await cartProducts.count();

    const cartProductTitle: string[] = [];
    for (let lineIndex = 1; lineIndex <= cartProductsCount; lineIndex++) {
      const productTitle = await this.page
        .locator(`#tbodyid > tr:nth-child(${lineIndex}) > td:nth-child(2)`)
        .innerText();
      cartProductTitle.push(productTitle);
    }

    expect(productList.length).toBe(cartProductTitle.length);
    expect([...productList].sort()).toEqual([...cartProductTitle].sort());
  }

  async clickPlaceOrderButton() {
    await this.placeOrderButton.click();
  }
}
