const { Given, When, Then } = require('@wdio/cucumber-framework');
const { browser, expect, $ } = require('@wdio/globals')

const PlpPage = require('../pageobjects/plp.page');
const SecurePage = require('../pageobjects/secure.page');
const HomePage = require('../pageobjects/home.page');

const pages = {
    plp: PlpPage
}

When(/^User scroll down page (.+)$/, async(y) => {
    yy = parseInt(y);
    await browser.scroll(0, yy);
})

When(/^User click Add To Bag button$/, async () => {
    await PlpPage.clickAddToCart();
});

When(/^User scroll up page (.+)$/, async(y) => {
    yy = parseInt(y);
    await browser.scroll(0, yy);
});

When(/^User click Add To Bag$/, async () => {
    await PlpPage.clickAddToCartSearch();
    await browser.pause(1000);
})

When(/^User click product image$/, async () => {
    await PlpPage.clickimgProduct();
})

When(/^User search product (.+)$/, async(productName) => {
    await PlpPage.typeSearch(productName)
});

When(/^User click Add To Bag in product Advance Set$/, async() => {
    await PlpPage.clickAddToBagAdvanceSet();
})