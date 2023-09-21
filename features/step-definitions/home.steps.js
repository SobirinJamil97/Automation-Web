const { Given, When, Then } = require('@wdio/cucumber-framework');
const { browser, expect, $ } = require('@wdio/globals')

const LoginPage = require('../pageobjects/login.page');
const SecurePage = require('../pageobjects/secure.page');
const HomePage = require('../pageobjects/home.page');

const pages = {
    home: HomePage
}

Given(/^User at home page$/, async () => {
    // await HomePage.open()
    await browser.url('https://web.staging-v1.tbsgroup.co.id/')
    await browser.maximizeWindow()
});

When(/^User click login button$/, async () => {
    await HomePage.clickLogin()
});

Then(/^Login button should available$/, async () => {
    await expect(HomePage.buttonLogin).toBeDisplayed();
});


// Then Offers menu should available
//     Then Face menu should available
//     Then Body menu should available
//     Then Hair menu should available
//     Then Make-up menu should available
//     Then Fragrance menu should available
//     Then Gifts menu should available
//     Then Range menu should available

Then(/^Offers menu should available$/, async () => {
    await expect(HomePage.buttonLogin).toBeDisplayed();
});

Then(/^Face menu should available$/, async () => {
    await expect(HomePage.menuFace).toBeDisplayed();
});

Then(/^Body menu should available$/, async () => {
    await expect(HomePage.menuBody).toBeDisplayed();
});

Then(/^Hair menu should available$/, async () => {
    await expect(HomePage.menuHair).toBeDisplayed();
});

Then(/^Make-up menu should available$/, async () => {
    await expect(HomePage.menuMakeup).toBeDisplayed();
});

Then(/^Fragrance menu should available$/, async () => {
    await expect(HomePage.menuFragrance).toBeDisplayed();
});

Then(/^Gifts menu should available$/, async () => {
    await expect(HomePage.menuGifts).toBeDisplayed();
});

Then(/^Range menu should available$/, async () => {
    await expect(HomePage.menuRange).toBeDisplayed();
});

