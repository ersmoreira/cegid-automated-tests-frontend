import { Page, Locator } from '@playwright/test';
import { locators } from '../locators/locators';

export class Store {
  private categoryGroupList: Locator;

  constructor(private page: Page) {
    this.categoryGroupList = page.locator(locators.store.categories);
  }

  async clickCategoryByText(text: string) {
    const categoryLinks = await this.categoryGroupList.getByRole('link').all();
    for (const link of categoryLinks) {
      const linkText = await link.innerText();
      if (linkText === text) {
        await link.click();
        break;
      }
    }
  }
}
