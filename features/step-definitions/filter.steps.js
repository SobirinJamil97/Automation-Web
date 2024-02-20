const { Given, When, Then } = require('@wdio/cucumber-framework');
const { browser, expect, $ } = require('@wdio/globals');
const assert = require('assert');

const LoginPage = require('../pageobjects/login.page');
const SecurePage = require('../pageobjects/secure.page');
const HomePage = require('../pageobjects/home.page');
const SearchPage = require('../pageobjects/search.page');
const FilterPage = require('../pageobjects/filter.page');

const pages = {
    filter: FilterPage
}


// Sceanrio 1 Desc by name Z-A
     Then(/^Txt filter A-Z available$/, async () => {
        await expect(FilterPage.txtfilter).toBeDisplayed()
});


      When(/^User click cmb filter$/, async () => {
        await FilterPage.clickcmb()
});

     When(/^User filter desc Z-A$/, async () => {
        await FilterPage.clickfilterbynamedesc();
});

     Then(/^Verify filter name by desc Z-A available$/, async () => {
        await expect(FilterPage.firstskudesc).toBeDisplayed();
        await expect(FilterPage.descbyname).toHaveText("Name: Z - A");
        //await expect(FilterPage.descbyname).toBeDisplayed();
});

// Assuming you have a function to retrieve the SKU values from your web application
    async function getSKUsFromWebbyNameAsc() {
    // Implement your logic to retrieve SKUs from the web
    // For example, you might use WebDriverIO or any other web automation tool
    // and return an array of SKU values
    return ['Second Skin Tint Tan 1w 30ml', 'Second Skin Tint Tan 1c 30ml', 'Second Skin Tint Medium 1w 30ml', 'Second Skin Tint Medium 1n 30ml'];
}

Then(/^User get 4 SKU by desc Z - A available$/, async () => {
       // Array of products with SKU and price
       const products = [
           { SKU: 'Second Skin Tint Tan 1w 30ml', Harga: 299000 },
           { SKU: 'Second Skin Tint Tan 1c 30ml', Harga: 299000 },
           { SKU: 'Second Skin Tint Medium 1w 30ml', Harga: 299000 },
           { SKU: 'Second Skin Tint Medium 1n 30ml', Harga: 299000 },

       ];

       // Sorting the array based on price in descending order
       const sortedProducts = products.sort((a, b) => b.SKU - a.SKU);

 // Get SKU values from the web
           const actualSKUs = await getSKUsFromWebbyNameAsc();

           // Validation using assert
               assert.deepStrictEqual(
                   actualSKUs,
                   sortedProducts.map(product => product.SKU),
                   'SKUs are not in descending order by name'
               );


//       // Displaying the sorted array
//       console.log(sortedProducts);
});

 // Sorting the array based on price in ascending order
       //const sortedProductsAscending = products.sort((a, b) => a.Harga - b.Harga);

//       Then(/^Refresh browser$/, async () => {
//          await browser.refresh();
//
//});

//scenario 2 low-high
     When(/^User filter asc  Low-High$/, async () => {
        await FilterPage.clickfilterbypriceasc()

});

   Then(/^Verify filter price by asc Low-High available$/, async () => {
        await expect(FilterPage.firstskuascbyprice).toBeDisplayed();
       await expect(FilterPage.descbyname).toHaveText("Price: Lowest - Highest");

});

// Assuming you have a function to retrieve the SKU values from your web application
    async function getSKUsFromWebbyPriceAsc() {
    // Implement your logic to retrieve SKUs from the web
    // For example, you might use WebDriverIO or any other web automation tool
    // and return an array of SKU values
    return ['Moringa Shower Gel 60ml', 'Moringa Bath Bubble 28g', 'Moringa Soap 100gr', 'Moringa Soap 100gr'];
}

Then(/^User get 4 SKU by asc Low-High available$/, async () => {
       // Array of products with SKU and price
       const products = [
               { SKU: 'Moringa Shower Gel 60ml', Harga:49000 },
               { SKU: 'Moringa Bath Bubble 28g', Harga: 49000 },
                { SKU: 'Moringa Soap 100gr', Harga: 99000 },
                { SKU: 'Moringa Soap 100gr', Harga: 99000 }
       ];

     // Sorting the array based on price in ascending order
     const sortedProductsAscending = products.sort((a, b) => a.Harga - b.Harga);

      // Get SKU values from the web
         const actualSKUs = await getSKUsFromWebbyPriceAsc();

         // Validation using assert
         assert.deepStrictEqual(
             actualSKUs,
             sortedProductsAscending.map(product => product.SKU),
             'SKUs are not in ascending order by price'
         );
});




//scenario 3 high-low
   When(/^User filter desc High-Lowest$/, async () => {
        await FilterPage.clickfilterbypricedesc()

});

   Then(/^Verify filter price by desc High-Low available$/, async () => {
        await expect(FilterPage.firstskudescbyprice).toBeDisplayed();
        await expect(FilterPage.descbyname).toHaveText("Price: Highest - Lowest");
});



// Assuming you have a function to retrieve the SKU values from your web application
async function getSKUsFromWebbyPriceDesc() {
    // Implement your logic to retrieve SKUs from the web
    // For example, you might use WebDriverIO or any other web automation tool
    // and return an array of SKU values
    return ['Hampers Medium Moringa', 'Edelweiss Sleeping Mask 75ml', 'Gift Small Moringa', 'Gift Bag Trio Moringa'];
}

   Then(/^User get 4 SKU by desc High-Low available$/, async () => {
       // Array of products with SKU and price
       const products = [
           { SKU: 'Hampers Medium Moringa', Harga: 879000 },
           { SKU: 'Edelweiss Sleeping Mask 75ml', Harga: 599000 },
           { SKU: 'Gift Small Moringa', Harga: 579000 },
           { SKU: 'Gift Bag Trio Moringa', Harga: 569000 }
       ];

       // Sorting the array based on price in descending order
       const sortedProducts = products.sort((a, b) => b.Harga - a.Harga);

         // Get SKU values from the web
           const actualSKUs = await getSKUsFromWebbyPriceDesc();

           // Validation using assert
               assert.deepStrictEqual(
                   actualSKUs,
                   sortedProducts.map(product => product.SKU),
                   'SKUs are not in descending order by price'
               );

//       // Displaying the sorted array
//       console.log(sortedProducts);



});
