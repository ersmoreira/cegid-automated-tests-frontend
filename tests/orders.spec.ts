import { test } from '@playwright/test';
import { TopMenu } from '../pages/top-menu';
import { Login } from '../pages/login';
import { Store } from '../pages/store';
import { dictionary } from '../data/dictionary';
import { StoreItems } from '../pages/store-items';
import { StoreItemDetails } from '../pages/store-item-details';
import { Cart } from '../pages/cart';
import { dataTest } from '../data/data-test';
import { Order } from '../pages/order';
import { Summary } from '../pages/summary';

test.describe('Orders', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');

    page.on('dialog', (dialog) => {
      if (dialog.message() === dictionary.dialog.productAdded) {
        dialog.accept();
      }
    });
  });

  test(
    'Validate Place Order',
    {
      annotation: [
        { type: 'Explanation', description: 'Validate place order of two existing phones' },
      ],
    },
    async ({ page }) => {
      const topMenu = new TopMenu(page);
      const login = new Login(page);
      const store = new Store(page);
      const storeItems = new StoreItems(page);
      const storeItemDetails = new StoreItemDetails(page);
      const cart = new Cart(page);
      const order = new Order(page);
      const summary = new Summary(page);

      const itemsToBuy = dataTest.order.itemsToBuy;

      await topMenu.clickLoginLink();
      await login.isTitleVisible();
      await login.doLogin();

      for (const item of itemsToBuy) {
        await store.clickCategoryByText(dictionary.store.categories.phones);
        await storeItems.clickItemByText(item);
        await storeItemDetails.assertItemTitle(item);
        await storeItemDetails.clickAddToCart();
        await page.waitForEvent('dialog');
        await topMenu.clickLogo();
      }

      await topMenu.clickCartLink();
      await cart.assertTitle();
      await cart.assertCartProducts(itemsToBuy);
      await cart.clickPlaceOrderButton();

      await order.assertTitle();
      await order.setOrderData();
      await order.clickPurchaseButton();

      await summary.assertTitle();
      await summary.clickOkButton();
    },
  );
});
