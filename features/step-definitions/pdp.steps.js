const { Given, When, Then } = require('@wdio/cucumber-framework');
const { browser, expect, $ } = require('@wdio/globals')

const PdpPage = require('../pageobjects/pdp.page');
const SecurePage = require('../pageobjects/secure.page');
const HomePage = require('../pageobjects/home.page');

const pages = {
    pdp: PdpPage
}

When(/^User click wishlist$/, async() => {
    await browser.pause(1000);
    await PdpPage.clickPdpIconWishlist();
})