import {test} from '@playwright/test';

export class NewTrackPage{
page:page

constructor(page:page){
this.page=page
}

    async trackPage(){

    await this.page.waitForTimeout(3000);

    const buttonIndex = 2;

    const addToCartButtonXPath = `(//span[@class="addTocart_desktop"])[${buttonIndex + 1}]`;

    await this.page.waitForSelector(addToCartButtonXPath);

    await this.page.click(addToCartButtonXPath);

      await this.page.waitForSelector('svg path.bb');

      await this.page.click('svg path.bb');

      await this.page.click('.styles_typicalWrapper__1_Uvh');

      await this.page.waitForSelector('input.sc-kjoXOD.kazbfo.search-input');

      await this.page.type('input.sc-kjoXOD.kazbfo.search-input', 'Sunscreen');

    await this.page.waitForTimeout(2000);
    }

async chooseSkin(){
    await this.page.waitForTimeout(1000);
      await this.page.waitForSelector('img[src="https://images.thedermaco.com/Icon.svg"]');
      await this.page.click('img[src="https://images.thedermaco.com/Icon.svg"]');


    await this.page.waitForTimeout(1000);



}


}