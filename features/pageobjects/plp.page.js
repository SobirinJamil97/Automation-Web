const { $ } = require('@wdio/globals');
const Page = require('./page');
const { browser } = require('@wdio/globals');

class PLP extends Page{
    get btnAddToCart1(){
        return $("/html[1]/body[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[2]/div[1]/div[1]/div[2]/button[1]");
    }

    get inputSearch(){
        return $("//input[@id='search']");
    };

    get btnInputSearch(){
        return $("//button[@data-testid='customButton']");
    };

    get btnAddToCartSearch(){
        return $("(//button[normalize-space()='Add to Bag'])[1]");
    }

    get imgProduct(){
        return $("(//div[@class='mui-style-1nqnvtt'])[1]");
    }

    get linkArber() {
        return $("//a[contains(@href,'/arber-eau-de-toilette-100ml-039')]/div");
    }

    get btnAddToBagAdvanceSet() {
        return $("//span[text()='Advance Set']/parent::h5/parent::div/parent::div/parent::a/parent::div/following-sibling::div/button");
    }


    async clickAddToCart(){
        await this.btnAddToCart1.click()
    }

    async typeSearch(productName) {
        await this.inputSearch.setValue(productName);
        await browser.pause(1000);
        await this.btnInputSearch.click();
        await browser.pause(3000);
    }

    async clickAddToCartSearch(){
        await this.btnAddToCartSearch.click();
    }

    async clickimgProduct(){
        await this.imgProduct.click();
    }

    async clickLinkArber() {
        await this.linkArber.click();
    }

    async clickAddToBagAdvanceSet() {
        await this.btnAddToBagAdvanceSet.click();
    }




    open () {
        return super.open();
    }

}

module.exports = new PLP();