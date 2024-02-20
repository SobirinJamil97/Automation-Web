const { $ } = require('@wdio/globals');
const Page = require('./page');
const { browser } = require('@wdio/globals');

class Membership extends Page{
    get menuMembership(){
        return $("//p[text()='Membership']");
    }

    get titleLYBC(){
        return $("//p[text()='LOVE YOUR BODY™ CLUB']");
    }

    get breadcrumbMembership(){
        return $("//h5[text()='membership']");
    }

    get titleMembership(){
        return $("//h1[text()='Membership Benefits']");
    }

    get imgMemberCard(){
        return $("//img[@alt='member card']");
    }

    get btnMyQRCode(){
        return $("//button[text()='My QR Code']");
    }

    get lblTierCardnumber(){
        return $("//span[normalize-space()='FAN - 51697533784000265']");
    }

    get membershipAccountName(){
        return $("//span[normalize-space()='Akun Tester 1017 Staging']");
    }

    get pointInformation(){
        return $("(//p[@class='MuiTypography-root MuiTypography-body1 mui-style-v485bh'])[1]");
    }

    get starter(){
        return $("//h4[normalize-space()='Starter']");
    }

    get club(){
        return $("//h4[normalize-space()='CLUB']");
    }

    get fan(){
        return $("//h4[normalize-space()='FAN']");
    }

    get btnStarter(){
        return $("//div[@class='swiper-slide swiper-slide-active']");
    }

    get btnClub(){
        return $("//div[@class='swiper-slide swiper-slide-next']");
    }

    get btnFan(){
        return $("//div[@class='swiper-slide']");
    }

    get lblBenefitStarter(){
        return $("//h4[normalize-space()='STARTER Member Benefits']");
    }

    get benefitShopToEnjoy(){
        return $("//p[normalize-space()='Shop To Enjoy']");
    }

    get benefitBirthdayTreats(){
        return $("//p[normalize-space()='Birthday Treats']");
    }

    get benefitTrackPurchase(){
        return $("//p[normalize-space()='Track Your Online Purchases']");
    }

    get benefitShopMore(){
        return $("//p[normalize-space()='Shop More to Enjoy More']");
    }

    get lblBenefitClub(){
        return $("//h4[normalize-space()='CLUB Member Benefits']");
    }

    get benefitEarnPoint(){
        return $("//p[normalize-space()='Earn Points']");
    }

    get benefitShoppingVoucher(){
        return $("//p[normalize-space()='Shopping Voucher']");
    }

    get benefitPointPlusPay(){
        return $("//p[normalize-space()='Point Plus Pay']");
    }

    get benefitRedemptionCatalogue(){
        return $("//p[normalize-space()='Redemption Catalogue']");
    }

    get benefitBBOB(){
        return $("//p[normalize-space()='Bring Back Our Bottle']");
    }

    get benefitFreeMakeOver(){
        return $("//p[normalize-space()='Free Make Over']");
    }

    get benefitSpecialEvent(){
        return $("//p[normalize-space()='Special Event']");
    }

    get lblBenefitFan(){
        return $("//h4[normalize-space()='FAN Member Benefits']");
    }

    get sectionBBOB(){
        return $("//span[normalize-space()='Bring Back Our Bottle']");
    }

    get sectionDonation(){
        return $("//span[normalize-space()='Donation']");
    }

    get linkFAQ(){
        return $("//span[normalize-space()='FAQ']");
    }

    get linkTermCondition(){
        return $("//span[normalize-space()='Terms and Conditions']");
    }

    get linkHowToRedeem(){
        return $("//span[normalize-space()='How to Redeem Points']");
    }

    get titleMyQRCode(){
        return $("//h3[normalize-space()='My QR Code']");
    }

    get descMyQRCode(){
        return $("(//p[@class='MuiTypography-root MuiTypography-body2 mui-style-1e3oiaj'])[1]");
    }

    get textExpirationTimer(){
        return $("//p[normalize-space()='Expired In']");
    }

    get expirationTimer(){
        return $("(//p[@class='MuiTypography-root MuiTypography-body1 mui-style-19qgnyg'])[1]");
    }

    get qrCode(){
        return $("(//*[name()='svg'])[22]");
    }

    get cardnumber(){
        return $("//a[normalize-space()='51697533784000265']");
    }

    get btnGenerateQR(){
        return $("//p[normalize-space()='Regenerate QR Code']");
    }

    get regenerateAgain(){
        return $("//p[normalize-space()='Regenerate again in']");
    }

    get breadcrumbPointHistory(){
        return $("//h5[normalize-space()='point history']");
    }

    get titlePointHistory(){
        return $("//h1[normalize-space()='Point History']");
    }

    get breadcrumbFaq(){
        return $("//h5[normalize-space()='faq']");
    }

    get breadcrumbTermCondition(){
        return $("//h5[normalize-space()='terms and conditions']");
    }

    get titleHowToRedeemPoint(){
        return $("//p[normalize-space()='How to Redeem Points']");
    }



    async clickMembership(){
        await this.menuMembership.click();
    }

    async clickStarter(){
        await this.btnStarter.click();
    }

    async clickClub(){
        await this.btnClub.click();
    }

    async clickFan(){
        await this.btnFan.click();
    }

    async clickMyQRCode(){
        await this.btnMyQRCode.click();
    }

    async clickTierCardnumber(){
        await this.lblTierCardnumber.click();
    }

    async clickGenerateQR(){
        await this.btnGenerateQR.click();
    }

    async clickpointInformation(){
        await this.pointInformation.click();
    }

    async clickFAQ(){
        await this.linkFAQ.click();
    }

    async clickTermCondition(){
        await this.linkTermCondition.click();
    }

    async clickHowToRedeem(){
        await this.linkHowToRedeem.click();
    }


    open () {
        return super.open();
    }

}

module.exports = new Membership();