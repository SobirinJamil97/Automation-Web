const { Given, When, Then } = require('@wdio/cucumber-framework');
const { browser, expect, $ } = require('@wdio/globals')

const LoginPage = require('../pageobjects/login.page');
const SecurePage = require('../pageobjects/secure.page');
const HomePage = require('../pageobjects/home.page');
const homePage = require('../pageobjects/home.page');
const CartPage = require('../pageobjects/cart.page');
const PlpPage = require('../pageobjects/plp.page');

const pages = {
    home: HomePage
}

Given(/^User at home page$/, async () => {
    // await HomePage.open()
    await browser.url('https://web.staging-v1.tbsgroup.co.id/');
    await browser.maximizeWindow();
    await browser.pause(1000);
    await HomePage.clickClosePopupBig();

});

//sandratest
Given(/^User has logged in$/, async () => {
    // await HomePage.open()
    await browser.url('https://web.staging-v1.tbsgroup.co.id/');
    await browser.maximizeWindow();
    await browser.pause(1000);
    await HomePage.clickClosePopupBig();
    await HomePage.clickLogin();
    await expect(LoginPage.loginForm).toBeDisplayed();
    await LoginPage.typeEmail("testerauto0707@test.com");
    await LoginPage.typeOtp("265378");
    await expect(LoginPage.userName).toBeDisplayed();
});

//When(/^User click login button$/, async () => {
//    await HomePage.clickLogin()
//});
//
//Then(/^Login form should available$/, async () => {
//    await expect(LoginPage.loginForm).toBeDisplayed();
//});

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

When(/^User click username$/, async () => {
    await HomePage.clickMyAccount();
});

Then(/^Close browser$/, async () => {
    // await HomePage.open()
    await browser.close();

});

Then(/^Refresh browser$/, async() => {
    await browser.refresh();
});

When(/^User click Search button$/, async () => {
    await HomePage.clickSearch();
});

Then(/^Cart badge should available$/, async () => {
    await expect(HomePage.cartBadge).toBeDisplayed();
});

//sandra
Then(/^User cart should empty$/, async () => {
    //jika cart badge tidak sama dengan 0 ke cart dan hapus
    //else tidak ada produk didalam cart
    badgeText = await HomePage.cartBadge.getText();
    if (badgeText != 0) {
        await HomePage.clickShoppingCart();
        //ambil jumlah produk kemudian taro untuk loopingnya
        textJmlProduk = await CartPage.cartJumlahProduk.getText();
        jmlProduk = parseInt(textJmlProduk.replace(/[^\d]/g, ''), 10);
        console.log("Produk dalam cart ada = "+jmlProduk);
        while (jmlProduk != 0) {
            await CartPage.clickTrashIcon();
            await CartPage.clickConfirm();
            await expect(CartPage.snackbarDeleteProduct).toHaveText("Produk berhasil dihapus");
            textJmlProduk = await CartPage.cartJumlahProduk.getText();
            jmlProduk = parseInt(textJmlProduk.replace(/[^\d]/g, ''), 10);
        }
        await browser.pause(2000);
    } else {
        console.log("Tidak ada produk di dalam cart");
    }
});

When(/^User click shopping cart button$/, async () => {
    await HomePage.clickShoppingCart();
});

Given(/^User 1017 has logged in$/, async () => {
    // await HomePage.open()
    await browser.url('https://web.staging-v1.tbsgroup.co.id/');
    await browser.maximizeWindow();
    await browser.pause(1000);
    await HomePage.clickClosePopupBig();
    await HomePage.clickLogin();
    await expect(LoginPage.loginForm).toBeDisplayed();
    await LoginPage.typeEmail("testerauto1017@mailinator.com");
    await LoginPage.typeOtp("123321");
    await expect(LoginPage.userName).toBeDisplayed();
});

Given(/^Product has been added to the cart$/, async () => {
    await HomePage.clickSearch();
    await PlpPage.typeSearch("Argan Hand Balm 30ml");
    await PlpPage.clickAddToCartSearch();
    await browser.pause(1000);
    await expect(HomePage.cartBadge).toBeDisplayed();
    await HomePage.clickShoppingCart();
    await expect(CartPage.headerShoppingCart).toBeDisplayed();
    await browser.pause(1000);
    await expect(CartPage.subtotalOnCart).toBeDisplayed();
    const cartSubtotal = await CartPage.subtotalOnCart.getText();
    numericValueCartSubtotal = parseInt(cartSubtotal.replace(/[^\d]/g, ''), 10);
    console.log(numericValueCartSubtotal); // Output: 1297000
    await expect(CartPage.inputQty1).toBeDisplayed();
});

//sandra
Given(/^User has logged in and on shipping page$/, async () => {
    //login
    await browser.url('https://web.staging-v1.tbsgroup.co.id/');
    await browser.maximizeWindow();
    await browser.pause(1000);
    await HomePage.clickClosePopupBig();
    await HomePage.clickLogin();
    await expect(LoginPage.loginForm).toBeDisplayed();
    await LoginPage.typeEmail("testerauto0707@test.com");
    await LoginPage.typeOtp("265378");
    await expect(LoginPage.userName).toBeDisplayed();
    //cek cart
    await browser.pause(5000);
    badgeText = await HomePage.cartBadge.getText();
    console.log("Badge text= "+badgeText);
    if (badgeText != 0) {
        await HomePage.clickShoppingCart();
        textJmlProduk = await CartPage.cartJumlahProduk.getText();
        jmlProduk = parseInt(textJmlProduk.replace(/[^\d]/g, ''), 10);
        console.log("Produk dalam cart ada = "+jmlProduk);
        while (jmlProduk != 0) {
            await CartPage.clickTrashIcon();
            await CartPage.clickConfirm();
            await expect(CartPage.snackbarDeleteProduct).toHaveText("Produk berhasil dihapus");
            textJmlProduk = await CartPage.cartJumlahProduk.getText();
            jmlProduk = parseInt(textJmlProduk.replace(/[^\d]/g, ''), 10);
        }
        await browser.pause(2000);
    } else {
        console.log("Tidak ada produk di dalam cart");
    }
    //add produk to cart
    await HomePage.clickSearch();
    await PlpPage.typeSearch("Joy");
    await PlpPage.clickAddToCartSearch();
    await browser.pause(1000);
    yy = parseInt(1);
    await browser.scroll(0, yy);
    //ke cart
    await HomePage.clickShoppingCart();
    await expect(CartPage.headerShoppingCart).toBeDisplayed();
    await browser.pause(1000);
    await expect(CartPage.subtotalOnCart).toBeDisplayed();
    const cartSubtotal = await CartPage.subtotalOnCart.getText();
    numericValueCartSubtotal = parseInt(cartSubtotal.replace(/[^\d]/g, ''), 10);
    console.log(numericValueCartSubtotal);
    await expect(CartPage.inputQty1).toBeDisplayed();
    await browser.pause(2000);
    await CartPage.clickBayar();
});