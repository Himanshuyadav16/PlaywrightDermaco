import { test, expect } from '@playwright/test';
import {Home} from '../pages/homePage';
import {ContinueAsGuest} from '../pages/continueAsGuestPage';
import {CartSearch} from '../pages/cartPage';
import {NewTrackPage} from '../pages/newTrackPage';
import {NewSearchFillPage} from '../pages/newSearchFillPage';
import {FormPage} from '../pages/formPage';

test.skip('Test Track Order Page of Multiple Tab', async ({page}) => {

    const login=new Home(page);
    await login.goto();
    await login.login();

    const guestLogin=new ContinueAsGuest(page);
    await guestLogin.loginAsGuests();

    const cartSearch=new CartSearch(page);
    await cartSearch.carting();

});

test.skip('Test Cart Page', async ({page}) => {

    const login=new Home(page);
    await login.goto();
    await login.login();

    const guestLogin=new ContinueAsGuest(page);
    await guestLogin.loginAsGuest();

     const cartSearch=new CartSearch(page);
     await cartSearch.cart();

});


test.skip('Test order Page', async ({page}) => {

    const login=new Home(page);
    await login.goto();
    await login.loginHover();

    const guestLogin=new ContinueAsGuest(page);
    await guestLogin.loginHover();

    const newTrackPage=new NewTrackPage(page);
    await newTrackPage.trackPage();

    const newSearchFillPage=new NewSearchFillPage(page);
    await newSearchFillPage.trackPage();

    const cartSearch=new CartSearch(page);
    await cartSearch.AddCart();

    const formFillPage=new FormPage(page);
    await formFillPage.formFillPage();

});

test.skip('Test Link Page', async ({page}) => {

    const login=new Home(page);
    await login.goto();
    await login.loginHover();

    const guestLogin=new ContinueAsGuest(page);
    await guestLogin.linkSelect();

});


test.skip('Test Free Skin Page', async ({page}) => {

    const login=new Home(page);
    await login.goto();
    await login.loginHover();

    const guestLogin=new ContinueAsGuest(page);
    await guestLogin.freeSkin();

     const newTrackPage=new NewTrackPage(page);
     await newTrackPage.chooseSkin();

     const newSearchFillPage=new NewSearchFillPage(page);
     await newSearchFillPage.skinType();

     const formFillPage=new FormPage(page);
     await formFillPage.SkinConcern();
     await formFillPage.SkinSubConcern();
     await formFillPage.skipSelfie();
     await formFillPage.viewReport();
     await formFillPage.buyCream();
     await formFillPage.formFillPage();

});


test('Test Hover Page', async ({page}) => {

  try {
    const popup = await this.page.waitForSelector('.wzrk-alert', { timeout: 5000 });

    console.log('Popup appeared:', popup);

    await this.page.click('#wzrk-confirm-id');

  } catch (error) {
    console.log('No popup appeared within the timeout:', error);
  }


    const login=new Home(page);
    await login.goto();
    await login.loginHover();

    const guestLogin=new ContinueAsGuest(page);
    await guestLogin.loginAsGuest();
    await guestLogin.profileHover();
    await guestLogin.OrderHover();
    await guestLogin.AssessmentsHover();
    await guestLogin.ManageAddressHover();
    await guestLogin.contactHover();
    await guestLogin.linkSelectContact();

});