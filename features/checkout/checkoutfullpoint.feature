Feature: Checkout Payment - Jamil
@test-6468 @cofullpoint
Scenario: Checkout with point
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
    Then Poin section should available
    When User click Gunakan poin
    Then Field input point should open
    Then Redeem point should available in price breakdown
    Then Redeem point value is 59
    # Then Total payment using point should correct
    When User click Bayar
    When User click Cek Status Pesanan
    Then Verify order
    Then Verify Point History

       Examples:
      | phoneNumber | otp   | sku |
      | 62800001905 | 123321 |180111222 |   