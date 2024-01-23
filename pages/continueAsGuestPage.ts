import {test,expect} from '@playwright/test';

export class ContinueAsGuest{
page:page

constructor(page:page){
this.page=page;
this.continueAsGuest='text="CONTINUE AS GUEST"';
this.chatClick=page.locator(".faq-bot-button-icon");
}

    async loginAsGuests(){
      await this.page.waitForTimeout(1000);
      await this.page.locator(this.continueAsGuest).click();
      await this.page.waitForTimeout(5000);
      await this.chatClick.click();
      await this.page.waitForTimeout(1000);
    }

    async loginAsGuest(){
          await this.page.waitForTimeout(1000);
          await this.page.locator(this.continueAsGuest).click();
          await this.page.waitForTimeout(1000);
        }

 async freeSkin(){
          await this.page.waitForTimeout(1000);
          await this.page.locator(this.continueAsGuest).click();
          await this.page.locator('//*[text()="Free Skin Assessment"]').click();
          await this.page.waitForTimeout(1000);
        }

    async loginHover(){
              await this.page.waitForTimeout(1000);
              await this.page.locator(this.continueAsGuest).click();

              await this.page.click('.styles_typicalWrapper__1_Uvh');

              await this.page.waitForSelector('.sc-frDJqD.ikYmfH.dropDownDesktop:has-text("Facewash")');

              await this.page.click('.sc-frDJqD.ikYmfH.dropDownDesktop:has-text("Facewash")');

              await this.page.waitForTimeout(1000);
   }

   async linkSelect(){
    await this.page.waitForTimeout(1000);
    await this.page.locator(this.continueAsGuest).click();
    await this.page.click('a:has-text("Young Scientists Program")');
    await this.page.waitForTimeout(1000);

    await expect(this.page).toHaveURL("https://thedermaco.com/educate");

    //await expect(this.page.locator('.sc-igwadP')).toContainText("Our Mission");
    await this.page.waitForTimeout(1000);

    await this.page.click('a.honasa-logo-wrapper');
    await this.page.click('a:has-text("Privacy Policy")');
    await this.page.waitForTimeout(1000);
    await expect(this.page).toHaveURL("https://thedermaco.com/privacy-policy");
    const locator = this.page.locator('.cms_text_top');
    await expect(locator).toBeEnabled();
    await expect(locator).toHaveText('Privacy Policy')

   // await expect(this.page.locator('.cms_text_top')).toHaveText('Privacy Policy');

    await this.page.click('a.honasa-logo-wrapper');
    await this.page.click('a:has-text("Returns")');
    await this.page.waitForTimeout(1000);

     const locators = this.page.locator('.cms_text_top');
     await expect(locators).toBeEnabled();
     await expect(locators).toHaveText('Return Policy');

    await this.page.click('a.honasa-logo-wrapper');
    await this.page.click('a:has-text("Terms & Conditions")');
    await this.page.waitForTimeout(1000);

    const locatorsCondition = this.page.locator('.cms_text_top');
    await expect(locatorsCondition).toHaveText('Terms of Service Agreement');

    await this.page.click('a.honasa-logo-wrapper');
    await this.page.click('a:has-text("Contact Us")');
    await this.page.waitForTimeout(1000);

    const locatorsContact = this.page.locator('header');
    await expect(locatorsContact).toHaveText('Contact Us');

    await this.page.type('input[name="name"]','Ram');
    await this.page.type('input[name="email"]','Ram12@gmail.com');
    await this.page.type('input[name="phone"]','9826031245');
    await this.page.type('input[name="order_id"]','123456789');
     await this.page.waitForSelector('.sc-bGbJRg.cJSYaU');
     await this.page.click('.sc-bGbJRg.cJSYaU');
    await this.page.click('//div[text()="Website Related"]');

    await this.page.click('//div[text()="Select Sub-Issue Type"]');
    await this.page.click('//div[text()="Offer Related Issue"]');
    await this.page.fill('textarea.textarea', 'Hello');
    await this.page.click('button:has-text("Send Email")');
    await this.page.waitForTimeout(1000);

    await this.page.click('a.honasa-logo-wrapper');
    await this.page.click('a:has-text("Sitemap")');
    await this.page.waitForTimeout(1000);
    await this.page.click('a.honasa-logo-wrapper');
    await this.page.waitForTimeout(3000);
   }

   async profileHover(){
   await this.page.waitForTimeout(500);
   await this.page.waitForSelector('.icon-label');
   await this.page.hover('div.icon-label');
   await this.page.click('//*[text()="Your Profile"]')
   await this.page.waitForTimeout(500);
   }

   async OrderHover(){
   await this.page.waitForTimeout(500);
   await this.page.locator(this.continueAsGuest).click();
      await this.page.waitForSelector('.icon-label');
      await this.page.hover('div.icon-label');
      await this.page.click('//*[text()="Your Orders"]')
      await this.page.waitForTimeout(500);
      }

      async  AssessmentsHover(){
         await this.page.waitForTimeout(500);
         await this.page.locator(this.continueAsGuest).click();
         await this.page.waitForSelector('.icon-label');
         await this.page.hover('div.icon-label');
         await this.page.click('//*[text()="My Assessments"]')
         await this.page.waitForTimeout(500);
         }

    async ManageAddressHover(){
            await this.page.waitForTimeout(500);
            await this.page.locator(this.continueAsGuest).click();
            await this.page.waitForSelector('.icon-label');
            await this.page.hover('div.icon-label');
            await this.page.click('//*[text()="Manage Address"]')
            await this.page.waitForTimeout(500);
            }

    async contactHover(){
            await this.page.waitForTimeout(500);
            await this.page.locator(this.continueAsGuest).click();
            await this.page.waitForSelector('.icon-label');
            await this.page.hover('div.icon-label');
            await this.page.click('//*[text()="Contact Us"]')
            await this.page.waitForTimeout(5000);
            }

 async linkSelectContact(){
    await this.page.waitForTimeout(1000);
    await expect(this.page).toHaveTitle('Shop from a wide range of The Derma Co products for skin and hair care. The science-backed solutions are suitable for both men and women.');

    await this.page.type('input[name="name"]','Ram');
    await this.page.type('input[name="email"]','Ram12@gmail.com');
    await this.page.type('input[name="phone"]','9826031245');
    await this.page.type('input[name="order_id"]','123456789');
     await this.page.waitForSelector('.sc-bGbJRg.cJSYaU');
     await this.page.click('.sc-bGbJRg.cJSYaU');
    await this.page.click('//div[text()="Website Related"]');

    await this.page.click('//div[text()="Select Sub-Issue Type"]');
    await this.page.click('//div[text()="Offer Related Issue"]');
    await this.page.fill('textarea.textarea', 'Hello');
    await this.page.click('button:has-text("Send Email")');
    await this.page.waitForTimeout(1000);

    await this.page.click('a.honasa-logo-wrapper');
    await this.page.click('a:has-text("Sitemap")');
    await this.page.waitForTimeout(1000);
    await this.page.click('a.honasa-logo-wrapper');
    await this.page.waitForTimeout(3000);
   }
}