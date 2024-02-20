Feature: Checkout-shipping


    @TEST-6478 @POSITIVE
    Scenario: Choose Express Shipping Method
        Given User has logged in
        Then Username should available
        Then User cart should empty
        When User search and add product Argan Hand Balm 30ml to cart
        Then Cart badge should available
        When User click shopping cart button
        Then Shopping cart page should available
        Then Qty should 1
        When User click Bayar
        When User click address list box
        When User select address name Rumah Sendiri
        When User select shipping method SAP Express
        Then SAP Express shipping method should appeared on breakdown price
        Then Shipping cost SAP Express on breakdown price should correct
        Then Total payment with SAP Express shipping should correct


        Examples:
        | email | otp             |
        | testerauto0707@test.com | 123321 |