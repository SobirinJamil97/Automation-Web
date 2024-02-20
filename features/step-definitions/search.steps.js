const { Given, When, Then } = require('@wdio/cucumber-framework');
const { browser, expect, $ } = require('@wdio/globals')



const LoginPage = require('../pageobjects/login.page');
const SecurePage = require('../pageobjects/secure.page');
const HomePage = require('../pageobjects/home.page');
const SearchPage = require('../pageobjects/search.page');

const pages = {

    Search: SearchPage
}

        When(/^User Click search field$/, async () => {
            await SearchPage.clickSearch()
});

        When(/^Txt search available$/, async () => {
            await expect(SearchPage.txtSearch).toBeDisplayed();
});

        When(/^User type search by name (.+)$/, async (namesku1) => {
            await SearchPage.typeskuname(namesku1)
});


    When(/^User click icon search$/, async () => {

            await SearchPage.icnSearch('.search-results');
});


         Then(/^Result search available$/, async () => {
                await expect(SearchPage.ResultSearch).toBeDisplayed();
});

         Then(/^User click 1 product search$/, async () => {
                await browser.pause(3000);
                await SearchPage.clickresultSearch();
});
    Then(/^User close browser$/, async () => {
          await browser.close;

});

//Scenario2 by sku


          When(/^User type search by sku (.+)$/, async (sku) => {
                await SearchPage.clearSearch();
                await SearchPage.typesku(sku);
});


          Then(/^Result search by sku available$/, async () => {
                await expect(SearchPage.ResultSearchSKU).toHaveText("Blue Musk Fragrance Mist 100ml");
});

          Then(/^User click 1 product search by SKU$/, async () => {
                await browser.pause(3000);
                await SearchPage.ClickSKU();
});

          Then(/^Make sure the results match$/, async () => {
                await browser.pause(3000);
                await expect(SearchPage.verifysku).toHaveText("SKU #126490021");
                //await expect (SearchPage.verifysku).toBeDisplayed();
});

/// Scenario 3 search by invalid SKU
          When(/^User type search by invalid sku (.+)$/, async (namesku3) => {
               await SearchPage.clearSearch();
               await SearchPage.typeinvalidsku(namesku3)
});

          Then(/^Result search by invalid sku available$/, async () => {
                await expect(SearchPage.ResultSearchInvalidSKU).toHaveText("0 Products");
});


//Result search by invalid sku available
/// User type search by invalid sku <namesku3>
// // Tutup browser saat selesai
//  await browser.close();