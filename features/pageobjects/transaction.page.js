const { $ } = require('@wdio/globals')
const Page = require('./page');
const { browser } = require('@wdio/globals')


class TransactionPage extends Page{

    get breadcrumbMyTransaction(){
        return $("//h5[normalize-space()='My Transactions']");
    }

    get titleTransactionDetail(){
        return $("//h1[normalize-space()='Transaction Detail']");
    }

    get textStatusPaid(){
        return $("//h4[normalize-space()='Your order has been paid.']");
    }

    get transactionNo(){
        // return $("/html[1]/body[1]/div[1]/div[1]/div[1]/div[4]/div[2]/div[2]/div[1]/table[1]/tbody[1]/tr[3]/td[3]/h6[1]");
        return $("//td[contains(text(),'Transaction No.')]/following-sibling::td[2]/h6");
    }




    open () {
        return super.open();
    }

}

module.exports = new TransactionPage();