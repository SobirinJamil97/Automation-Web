const { $ } = require('@wdio/globals')
const Page = require('./page');


class DemoLoginPage extends Page {
    /**
     * define selectors using getter methods
     */
    get loginForm () {
        return $("//h5[text()='Login']");
    }

    get logo () {
        return $("//*[@id='app']/div[1]/div/div[1]/div/div[2]/div[1]/img");
    }


    get inputUsername () {
        return $("//input[@placeholder='Username']");
    }

    get inputPassword () {
        return $("//input[@placeholder='Password']");
    }

    get btnLogin () {
        return $("//button[normalize-space()='Login']");
    }

    get profile(){
    return $("//span[@class='oxd-userdropdown-tab']")
    }

    get txtDashboard(){
    return $("//h6[normalize-space()='Dashboard']")
    }
    
    get txtErrorLogin(){
        return $("//p[text()='Invalid credentials']")
        }

    get btnlogout(){
            return $("//a[normalize-space()='Logout']")
            }

    get txtBlankLogin(){
                return $("//span[@class='oxd-text oxd-text--span oxd-input-field-error-message oxd-input-group__message']")
                }

////span[contains(text(), 'Required')]
open () {
        return super.open('login');
    }

    async typeUsername(username) {
        await this.inputUsername.setValue(username);
        await browser.pause(1000);
    }

    async typePassword(password) {
        await this.inputPassword.setValue(password);
        await browser.pause(1000);
    }

    async typeInvalidUsername(invalid_username) {
        await this.inputUsername.setValue(invalid_username);
        await browser.pause(1000);
    }

    async typeInvalidPassword(invalid_password) {
        await this.inputPassword.setValue(invalid_password);
        await browser.pause(1000);
    }
    
    
    async Blank_username(blank_username) {
        await this.inputPassword.setValue(blank_username);
        await browser.pause(1000);
    }
    
    async Blank_password(blank_password) {
        await this.inputPassword.setValue(blank_password);
        await browser.pause(1000);
    }


    async clickbtnlogin() {
        await this.btnLogin.click();
        await browser.pause(1000);
    }

    async clickprofile() {
        await this.profile.click();
        await browser.pause(1000);
    }

    async clickbtnlogout() {
        await this.btnlogout.click();
        await browser.pause(1000);
    }



}

module.exports = new DemoLoginPage();
