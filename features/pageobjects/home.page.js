const { $ } = require('@wdio/globals')
const Page = require('./page');
const { browser } = require('@wdio/globals')


class HomePage extends Page{


    get buttonLogin(){
       return $("//p[text()='LOGIN']");
    }

    get menuOffers(){
        return $("//p[text()='Offers']");
    }

    get menuTrendings(){
        return $("//p[text()='Trending']");
    }

    get menuFace(){
        return $("//p[text()='Face']");
    }

    get menuBody(){
        return $("//p[text()='Body']");
    }

    get menuHair(){
        return $("//p[text()='Hair']");
    }

    get menuMakeup(){
        return $("//p[text()='Make-Up']");
    }

    get menuGifts(){
        return $("//p[text()='Gifts']");
    }

    get menuFragrance(){
        return $("//p[text()='Fragrance']");
    }

    get menuRange(){
        return $("//p[text()='Range']");
    }
    
    get menuStoreLocator(){
        return $("//p[text()='Stores']");
    }


    async clickLogin(){
        await this.buttonLogin.click()
    }
    

    open () {
        return super.open();
    }

}

module.exports = new HomePage();