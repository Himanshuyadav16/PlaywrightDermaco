import {test} from '@playwright/test';

export class CartSearch{
page:page

constructor(page:page){
this.page=page
}

     async carting(){
           await this.page.waitForTimeout(2000);

           const frameHandle=await this.page.frameLocator('.faq-bot-iframe')
           frameHandle.locator('//*[text()="How can I track my order?"]').click();

           const [newPage] = await Promise.all([
           this.page.waitForEvent('popup', { timeout: 3000 }), // Increase the timeout to 30 seconds
           frameHandle.locator('//*[text()="Track Order Page"]').click()
           ])

           await newPage.waitForLoadState();
           await newPage.locator('//*[text()="NAVIGATE TO HOMEPAGE"]').click();

           console.log(await newPage.title());
           console.log(await this.page.title());

           await this.page.waitForTimeout(4000);
     }

      async cart(){
          await this.page.waitForTimeout(2000);
          await this.page.waitForSelector('#shopping_cart_black_24dp');
          await this.page.click('#shopping_cart_black_24dp');
          await this.page.click('button:has-text("SHOP NOW")');
          await this.page.waitForTimeout(1000);
         }

async AddCart(){
          await this.page.waitForTimeout(2000);
          await this.page.waitForSelector('#shopping_cart_black_24dp');
          await this.page.click('#shopping_cart_black_24dp');
          await this.page.click('.checkout-button');
          await this.page.waitForTimeout(2000);
         }

}