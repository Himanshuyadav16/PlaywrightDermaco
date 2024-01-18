import {test} from '@playwright/test';

export class Home{
page:page

constructor(page:page){
this.page=page
this.loginButton="[class='icon-label']"
}
    async goto(){
        await this.page.goto("https://thedermaco.com");
    }

    async login(){
        await this.page.waitForTimeout(1000);
        //await this.page.locator('id=wzrk-confirm-id').click();
        await this.page.locator(this.loginButton).click();
        await this.page.waitForTimeout(1000);
    }

    async loginHover(){
        await this.page.waitForTimeout(1000);
        //await this.page.locator('id=wzrk-confirm-id').click();
        await this.page.locator(this.loginButton).click();
       // await this.page.locator();
        await this.page.waitForTimeout(1000);
    }

}