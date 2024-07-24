import { Page, Locator } from '@playwright/test';
import { locators } from '../locators/locators';
import * as accounts from '../config/accounts';
import { dictionary } from '../data/dictionary';

export class Login {
  private title: Locator;
  private username: Locator;
  private password: Locator;
  private loginButton: Locator;

  constructor(private page: Page) {
    this.title = page.locator(locators.login.title);
    this.username = page.locator(locators.login.username);
    this.password = page.locator(locators.login.password);
    this.loginButton = page
      .locator(locators.login.modal)
      .getByRole('button', { name: dictionary.login.loginButton });
  }

  async setUsername() {
    const username = accounts.adminaccount.user;
    await this.username.fill(username);
  }

  async setPassword() {
    const password = accounts.adminaccount.password;
    await this.password.fill(password);
  }

  async isTitleVisible() {
    await this.title.isVisible();
  }

  async doLogin() {
    await this.setUsername();
    await this.setPassword();
    await this.clickLoginButton();
  }

  async clickLoginButton() {
    await this.loginButton.click();
  }
}
