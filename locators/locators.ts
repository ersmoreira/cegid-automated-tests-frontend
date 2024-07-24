export const locators = {
  topMenu: {
    logo: 'id=nava',
    loginLink: 'id=login2',
    cart: 'id=cartur',
  },

  login: {
    modal: 'id=logInModal',
    title: 'id=logInModalLabel',
    username: 'id=loginusername',
    password: 'id=loginpassword',
  },

  store: {
    categories: 'id=itemc',
    items: 'id=tbodyid',
    nextButton: 'id=next2',

    itemDetails: {
      description: '#tbodyid > h2',
      addToCart: '#tbodyid > div.row > div > a',
    },
  },

  cart: {
    title: '#page-wrapper > div > div.col-lg-8 > h2',
    productList: '#tbodyid > tr',
    productItemTitle: '#tbodyid > tr:nth-child(1) > td:nth-child(2)',
    placeOrderButton: '#page-wrapper > div > div.col-lg-1 > button',
    totalAmount: 'id=totalp',
  },

  order: {
    title: 'id=orderModalLabel',
    totalAmount: 'id=totalm',
    name: 'id=name',
    country: 'id=country',
    city: 'id=city',
    creditCard: 'id=card',
    month: 'id=month',
    year: 'id=year',
    purchaseButton: '#orderModal > div > div > div.modal-footer > button.btn.btn-primary',
  },

  summary: {
    title: 'body > div.sweet-alert.showSweetAlert.visible > h2',
    okButton:
      'body > div.sweet-alert.showSweetAlert.visible > div.sa-button-container > div > button',
  },
};
