import { Page, Locator } from '@playwright/test';
import { locators } from '../locators/locators';

export class TopMenu {
  private logo: Locator;
  private loginLink: Locator;
  private cart: Locator;

  constructor(private page: Page) {
    this.logo = page.locator(locators.topMenu.logo);
    this.loginLink = page.locator(locators.topMenu.loginLink);
    this.cart = page.locator(locators.topMenu.cart);
  }

  async clickLoginLink() {
    await this.loginLink.click();
  }

  async clickLogo() {
    await this.logo.click();
  }

  async clickCartLink() {
    await this.cart.click();
  }
}
