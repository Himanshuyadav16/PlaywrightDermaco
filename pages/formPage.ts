import {test} from '@playwright/test';

export class FormPage{
page:page

constructor(page:page){
this.page=page
}
    async formFillPage(){
    await this.page.waitForTimeout(1000);
    await this.page.type('input[name="firstname"]', 'Ram');
    await this.page.type('input[name="lastname"]', 'Sharma');
    await this.page.type('input[name="email"]', 'RamSharma12@gmail.com');
    await this.page.type('input[name="telephone"]', '7987321232');
    await this.page.type('input[name="postcode"]', '452001');
    await this.page.type('input[name="city"]', 'Indore');
    await this.page.type('input[name="region"]', 'Madhya Pradesh');
    await this.page.type('input[name="street"]', '11/3,Radha Swami Nagar');
    await this.page.waitForTimeout(3000);
    await this.page.click('button.tablinks:has(span.buttonText:has-text("Cash on Delivery"))');
    await this.page.waitForTimeout(1000);
    await this.page.click('button.payNowBtn');
    await this.page.waitForTimeout(3000);
    await this.page.click('a.honasa-logo-wrapper');
    await this.page.waitForTimeout(3000);
    }


    async SkinConcern(){
    await this.page.waitForTimeout(1000);
    await this.page.click('img[src="https://images.thedermaco.com/Icon.svg"]');
    await this.page.waitForTimeout(1000);
    }

    async SkinSubConcern(){
        await this.page.waitForTimeout(1000);
        await this.page.click('img[src="https://images.thedermaco.com/Icon.svg"]');
        await this.page.click('button.btn');
       await this.page.waitForTimeout(1000);
        }

    async skipSelfie(){
            await this.page.waitForTimeout(1000);
                  await this.page.click('.skip-selfie');
            await this.page.waitForTimeout(1000);
    }

    async viewReport(){
    await this.page.waitForTimeout(500);
    await this.page.type('input[name="phone"]', '9826878342');
    await this.page.type('input[name="email"]', 'RamSharma@12gmail.com');
    await this.page.click('button.btn');

    await this.page.waitForTimeout(500);
        }
 async buyCream(){
    await this.page.waitForTimeout(500);
    await this.page.click('button.btn');

    await this.page.waitForTimeout(5000);
        }



}