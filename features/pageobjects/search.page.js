const { $ } = require('@wdio/globals')
const Page = require('./page');
const { browser } = require('@wdio/globals')


class SearchPage extends Page{

get btnSearch () {
        return $("(//*[name()='svg'][@class='MuiSvgIcon-root MuiSvgIcon-fontSizeMedium mui-style-1u07pm0'])[4]")
}

get txtSearch () {
        return $("(//input[@id='search'])[1]")
}


get iconSearch () {
        return $("(//*[name()='svg'][@class='MuiSvgIcon-root MuiSvgIcon-fontSizeMedium mui-style-vubbuv'])[3]")
}

get ResultSearch () {
        return $("(//span[normalize-space()='Bath Lily Large Ramie'])[1]")
}

get ResultSearchClick () {
        return $("(//img[@alt='Bath Lily Large Ramie'])[1]")
}

//  get searchResultElements() {
//    return $$('.search-result');
//  }

get iconhome () {
        return $("(//img)[2]")
}

get ResultSearchSKU () {
        return $("(//span[@class='MuiBox-root mui-style-1jnnoms'])[1]")
}

get verifysku () {
        return $("(//p[normalize-space()='SKU #126490021'])[1]")
}

get ResultSearchInvalidSKU () {
        return $("(//p[@class='MuiTypography-root MuiTypography-body1 mui-style-zfwc1c'])[1]")
}

//ResultSearchInvalidSKU



//---------Pemisah get dan async-----------------


  async clickSearch(){
             await this.btnSearch.click();
         }

 async typeskuname(namesku1) {
      await this.txtSearch.setValue(namesku1);

 }

async clearSearch() {
    const selectorValue = this.txtSearch.getValue();
    const backSpaces = new Array(selectorValue.length).fill('Backspace');

    await this.txtSearch.doubleClick();
    await browser.keys(['Backspace']);
    await this.txtSearch.doubleClick();
    await browser.keys(['Backspace']);
    await this.txtSearch.doubleClick();
    await browser.keys(['Backspace']);
}

 async typesku(sku) {
      await this.txtSearch.setValue(sku);

 }

async typeinvalidsku(namesku3) {
      await this.txtSearch.setValue(namesku3);
      }
//

async icnSearch(){
             await this.iconSearch.click();
         }

async clickresultSearch(){
             await this.ResultSearchClick.click();
         }

// async getResultSearchElements() {
//    return this.searchResultElements;
//  }

 async ClickSKU() {
    await this.ResultSearchSKU.click();
  }
}
module.exports = new SearchPage();

