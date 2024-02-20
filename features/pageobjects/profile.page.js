const { $ } = require('@wdio/globals');
const Page = require('./page');
const { browser } = require('@wdio/globals');
const { faker } = require('@faker-js/faker');

var lastName = faker.person.lastName("male");
var firstName = faker.person.firstName("male");
var dateDOB = faker.number.int({min: 1, max: 30});
var monthDOB = faker.number.int({min: 1, max: 12});
var yearDOB = faker.number.int({min: 1990, max: 2009});


class ProfilePage extends Page {

    //get element user profile
    get btnChgProfile () {
        return $('/html/body/div[1]/div[1]/div/div/div[2]/div/div[2]/div/div/div[3]/button[1]');
    }

    get myAccountPage () {
        return $('//h5[text()="my account"]');
    }

    get titleChgProfile () {
        return $('//h1[text()="Change Profile"]');
    }

    get fieldFirstName () {
        return $('#firstName');
    }

    get fieldLastName () {
        return $('#lastName');
    }

    get radioBtnFemale () {
        return $('//input[@value="F"]');
    }

    get radioBtnMale () {
        return $('//input[@value="M"]');
    }

    get svgClassFemale () {
        return $('//*[@id="__next"]/div[1]/div/div[2]/form/div[1]/div[6]/div/div/label[1]/span[1]')
    }

    get svgClassMale () {
        return $('//*[@id="__next"]/div[1]/div/div[2]/form/div[1]/div[6]/div/div/label[2]/span[1]');
    }

    get radioChecked () {
        return $('svg[data-testid="RadioButtonCheckedIcon"]');
    }

    get radioUnchecked () {
        return $('svg[data-testid="RadioButtonUncheckedIcon"]');
    }

    get fieldDOB () {
        return $('//input[@placeholder="Enter DOB"]')
    }

    get btnSaveProfile () {
        return $('//button[text()="Save"]');
    }

    get alertSuccessSaveProfile () {
        return $('//div[@id="notistack-snackbar"]');
    }

    get myAccountName () {
        return $('//*[@id="__next"]/div[1]/div/div/div[2]/div/div[2]/div/div/div[2]/h2/span');
    }

    get myAccountGender () {
        return $('//*[@id="__next"]/div[1]/div/div/div[2]/div/div[2]/div/div/div[2]/div[2]/div[2]/h4');
    }

    get myAccountEmail () {
        return $('//*[@id="__next"]/div[1]/div/div/div[2]/div/div[2]/div/div/div[2]/div[2]/div[3]/h4')
    }

    //change phone number
    get bthChgPhoneNumber () {
        return $('//p[normalize-space()="CHANGE PHONE NUMBER"]');
    }

    get titleChgPhoneNumber () {
        return $('//h1[normalize-space()="Change Phone Number"]');
        
    }

    get fieldPhoneNumber () {
        return $("//input[@id='phone']");
    }

    get btnSavePhoneNumber () {
        return $("(//button[normalize-space()='Save'])[1]");
    }

    //change email
    get btnChgEmail () {
        return $('//p[normalize-space()="CHANGE EMAIL"]');
    }

    get titleChgEmail () {
        return $('//h1[normalize-space()="Change Email"]');
    }

    get fieldEmail () {
        return $('//input[@placeholder="Enter E-mail"]');
    }

    get btnSaveEmail () {
        return $('//button[@type="submit"]');
//        return $("(//button[normalize-space()='Save'])[1]");
    }

    get helperTextChangePhone() {
        return $("(//p[@class='MuiFormHelperText-root Mui-error mui-style-1onyhlp'])[1]");
    }

    get helperTextChangeEmail() {
        return $("//p[@id='email-helper-text']");
    }


    //action
    async clickChgProfile () {
        await this.btnChgProfile.click();
    }

    async clickBtnSaveProfile () {
        await this.btnSaveProfile.click();
    }

    async clearFirstName () {
        await this.fieldFirstName.clearValue();
    }

    async typeFirstName () {
        await this.fieldFirstName.setValue(firstName);
    }

    async clearLastName () {
        await this.fieldLastName.clearValue();
    }

    async typeLastName () {
        await this.fieldLastName.setValue(lastName);
    }

    async getFirstName () {
        return (await this.fieldFirstName.getValue());
    }

    async getLastName () {
        return (await this.fieldLastName.getValue());
    }

    async selectFemale () {
        await this.radioBtnFemale.click();
    }

    async selectMale () {
        await this.radioBtnMale.click();
    }

    async getSvgChecked () {
        return ((await this.svgClassFemale).getAttribute('class')); 
    }

    async getSvgNotChecked () {
        return ((await this.svgClassMale).getAttribute('class')); 
    }

    // async selectGender () {
    //     //if female radio button checked, click male
    //     //if male radio button checked, click female
    //     if (this.radioBtnFemale == this.radioChecked) {
    //         await this.radioBtnMale.click();
    //     } else {
    //         await this.radioBtnFemale.click();
    //     }
        
    // }

    async typeDateDOB () {
        await this.fieldDOB.click();
        await this.fieldDOB.setValue(dateDOB);
    }

    async typeMonthDOB () {
        await this.fieldDOB.setValue(monthDOB);
    }

    async typeYearDOB () {
        await this.fieldDOB.setValue(yearDOB);
    }

    async getDOB () {
        return (await this.fieldDOB.getValue());
    }

    //change phone number
    async clickChgPhoneNumber () {
        await this.bthChgPhoneNumber.click();
    }

    async clearFieldPhoneNumber() {
        await this.fieldPhoneNumber.clearValue();
//        await this.fieldPhoneNumber.doubleClick();
//        await browser.keys(['Backspace']);
    }

    async typeChgPhoneNumber (newPhoneNumber) {
        await this.fieldPhoneNumber.setValue(newPhoneNumber);
    }

    async clickSavePhoneNumber () {
        await this.btnSavePhoneNumber.click();
    }

    async getPhoneNumber () {
        return (await this.fieldPhoneNumber.getValue());
    }

    //change email
    async clickChgEmail () {
        await this.btnChgEmail.click();
    }

    async clearFieldEmail () {
//        await this.fieldEmail.clearValue();
        await this.fieldEmail.doubleClick();
        await browser.keys(['Backspace']);
        await this.fieldEmail.doubleClick();
        await browser.keys(['Backspace']);
        await this.fieldEmail.doubleClick();
        await browser.keys(['Backspace']);
        await this.fieldEmail.doubleClick();
        await browser.keys(['Backspace']);
        await this.fieldEmail.doubleClick();
        await browser.keys(['Backspace']);
    }

    async typeChgEmail (newEmail) {
        await this.fieldEmail.setValue(newEmail);
    }

    async clickSaveEmail () {
        await this.btnSaveEmail.click();
    }

    async getEmail () {
        return (await this.fieldEmail.getValue());
    }


    open () {
        return super.open();
    }
}

module.exports = new ProfilePage();