import { Page, Locator } from '@playwright/test';
import { locators } from '../locators/locators';

export class StoreItems {
  private itemsList: Locator;
  private nextButton: Locator;

  constructor(private page: Page) {
    this.itemsList = page.locator(locators.store.items);
    this.nextButton = page.locator(locators.store.nextButton);
  }

  async clickItemByText(text: string) {
    let itemFound = false;

    while (!itemFound) {
      const nextButtonVisible = await this.isNextButtonVisible();
      const itemLink = this.itemsList.getByRole('link', { name: text });
      itemFound = (await itemLink.count()) > 0;

      if (itemFound) {
        await itemLink.click();
      } else if (!itemFound && nextButtonVisible) {
        await this.clickNextButton();
        await new Promise((resolve) => setTimeout(resolve, 500));
      }
    }
  }

  async isNextButtonVisible() {
    return this.nextButton.isVisible();
  }

  async clickNextButton() {
    await this.nextButton.scrollIntoViewIfNeeded();
    await this.nextButton.click();
  }
}
