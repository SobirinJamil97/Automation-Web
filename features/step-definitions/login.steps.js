const { Given, When, Then } = require('@wdio/cucumber-framework');
const { browser, expect, $ } = require('@wdio/globals')

const LoginPage = require('../pageobjects/login.page');
const SecurePage = require('../pageobjects/secure.page');
const HomePage = require('../pageobjects/home.page');

const pages = {
    login: LoginPage
}
//
//Given(/^User at home page$/, async () => {
//    // await HomePage.open()
//    await browser.url('https://web.staging-v1.tbsgroup.co.id/')
//    await browser.maximizeWindow()
//});
//
When(/^User click login button$/, async () => {
    await HomePage.clickLogin()
});

Then(/^Login form should available$/, async () => {
    await expect(LoginPage.loginForm).toBeDisplayed();
});

When(/^User input email (.+)$/, async (email) => {
    await LoginPage.typeEmail(email);
});

When(/^User input otp code (.+)$/, async (otp) => {
    await LoginPage.typeOtp(otp);
});

Then(/^Username should available$/, async () => {
//    await expect(HomePage.username).toBeDisplayed();
    await expect(LoginPage.userName).toBeDisplayed();
});

//Login phone number
When(/^User clear phoneNumber field$/, async () => {
    await LoginPage.clearPhoneNumber();
});

When(/^User input phoneNumber (.+)$/, async (phoneNumber) => {
    await LoginPage.typePhoneNumber(phoneNumber);
});

When(/^User select Whatsapp$/, async () => {
    await LoginPage.selectWhatsapp();
    await browser.pause(1000);
    await LoginPage.clickSendOtpCode();
});

When(/^User input otp code wa (.+)$/, async (otp) => {
    await LoginPage.typeOtp(otp);
});

//Login incorrect OTP
Then(/^User get message (.+)$/, async (string) => {
    await expect(LoginPage.snackbarCekOtp).toHaveText(string);
})

Then(/^User name should appear$/, async () => {
    await expect(LoginPage.userName).toBeDisplayed();
});

When(/^User click profile$/, async () => {
    await LoginPage.clickProfile()
});