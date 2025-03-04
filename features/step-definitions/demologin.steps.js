const { Given, When, Then } = require('@wdio/cucumber-framework');
const { browser, expect, $ } = require('@wdio/globals')
const DemoLoginPage = require('../pageobjects/demologin.page');
const Sett = require('../../wdio.conf').config;

const pages = {
    login: DemoLoginPage
}

Given(/^User at home page demo$/, async () => {
    const baseUr = Sett.baseUrl;
    await browser.url(baseUr);
    await browser.maximizeWindow();
    await expect(DemoLoginPage.loginForm).toBeDisplayed();
    await expect(DemoLoginPage.inputUsername).toBeDisplayed();
    await expect(DemoLoginPage.inputPassword).toBeDisplayed();
    await browser.pause(3000);
    });


    When(/^User input Username (.+)$/, async (username) => {
        await DemoLoginPage.typeUsername(username);
    });
    
    When(/^User input Password (.+)$/, async (password) => {
        await DemoLoginPage.typePassword(password);
    });

    Then(/^User click button login$/, async () => {
        await DemoLoginPage.clickbtnlogin();
        await expect(DemoLoginPage.profile).toBeDisplayed();
        await expect(DemoLoginPage.txtDashboard).toBeDisplayed();
        await DemoLoginPage.clickprofile();
        await DemoLoginPage.clickbtnlogout();
        
    });

    
    When(/^User input invalid Username (.+)$/, async (invalid_username) => {
        await DemoLoginPage.typeInvalidUsername(invalid_username);
    });
    
    When(/^User input invalid Password (.+)$/, async (invalid_password) => {
        await DemoLoginPage.typeInvalidPassword(invalid_password);
    });

    Then(/^User click button login case invalid$/, async () => {
        await DemoLoginPage.clickbtnlogin();
        await expect(DemoLoginPage.txtErrorLogin).toBeDisplayed();
    });

    When(/^Username is blank (.+)$/, async (blank_username) => {
        await DemoLoginPage.Blank_username(blank_username);
    });

    Then(/^User click button login case field blank$/, async () => {
        await DemoLoginPage.clickbtnlogin();
        await expect(DemoLoginPage.txtBlankLogin).toBeDisplayed();
    });

    