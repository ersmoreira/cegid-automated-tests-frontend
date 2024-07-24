import { Page, Locator, expect } from '@playwright/test';
import { locators } from '../locators/locators';
import { dictionary } from '../data/dictionary';
import { faker } from '@faker-js/faker';

export class Order {
  private title: Locator;
  private totalAmount: Locator;
  private name: Locator;
  private country: Locator;
  private city: Locator;
  private creditCard: Locator;
  private month: Locator;
  private year: Locator;
  private purchaseButton: Locator;

  constructor(private page: Page) {
    this.title = page.locator(locators.order.title);
    this.totalAmount = page.locator(locators.order.totalAmount);
    this.name = page.locator(locators.order.name);
    this.country = page.locator(locators.order.country);
    this.city = page.locator(locators.order.city);
    this.creditCard = page.locator(locators.order.creditCard);
    this.month = page.locator(locators.order.month);
    this.year = page.locator(locators.order.year);
    this.purchaseButton = page.locator(locators.order.purchaseButton);
  }

  async assertTitle() {
    await expect(this.title).toHaveText(dictionary.order.title);
  }

  async setOrderData() {
    const currentDate = new Date();
    await this.name.fill(faker.person.fullName());
    await this.country.fill(faker.location.country());
    await this.city.fill(faker.location.city());
    await this.creditCard.fill(faker.finance.creditCardNumber());
    await this.month.fill(currentDate.getMonth().toString());
    await this.year.fill(currentDate.getFullYear().toString());
  }

  async clickPurchaseButton() {
    await this.purchaseButton.click();
  }
}
