const { $ } = require('@wdio/globals');
const Page = require('./page');
const { browser } = require('@wdio/globals');

class PDP extends Page{
    get pdpIconWishlist(){
        return $("(//input[@type='checkbox'])[2]");
    };

    get pdpArberAddToBag() {
        return $("//h6[text()='Arber Eau De Toilette 100ml']/parent::div/following-sibling::div/div/div/div[2]/button");
    }

    async clickPdpIconWishlist(){
        await this.pdpIconWishlist.click();
    }

    async clickPdpArberAddToBag() {
        await this.pdpArberAddToBag.click();
    }



    open () {
        return super.open();
    }

}

module.exports = new PDP();