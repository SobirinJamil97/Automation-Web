Feature: Checkout Payment - Jamil
@test-6466 @cowithvoucher

Scenario: Checkout with voucher
    Given User at home page
    When User click login button
    Then Login form should available
    When User clear phoneNumber field
    When User input phoneNumber <phoneNumber>
    When User select Whatsapp
    When User input otp code <otp>
    Then User name should appear
    When User Click search field
    Then Txt search available
    When User type search by sku <sku>
    When User click icon search
    When User add to bag
    When User click shopping cart button
    Then Shopping cart page should available
    When User click Bayar
#   Scenario: Verify user direct to shipment mehode Page
    Then user direct shipment methode page should available
    When User select shipping method SiCepat Regular
    Then SiCepat Regular shipping cost should available
    # Then Validate SiCepat Reguler shipping cost
    When User click Bayar
    Then Teks voucher should available
    When User click use voucher
    Then Teks voucher for you should available
    When User input kode voucher
    When User click gunakan
    # When User click 
    When user click cllose voucher list
    # When User click simpan voucher



    Examples:
    | phoneNumber | otp   | sku |
    | 62800001905 | 123321 |126510061 |   