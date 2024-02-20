Feature: Checkout-shipping


    @TEST-6479 @POSITIVE
    Scenario: Choose Instant Shipping Method
        Given User has logged in
        Then User cart should empty
        When User search and add product Argan Hand Balm 30ml to cart
        Then Cart badge should available
        When User click shopping cart button
        Then Shopping cart page should available
        Then Qty should 1
        When User click Bayar
        When User click address list box
        When User select address name Rumah pinpoint
        When User select shipping method GO-SEND Instant
        Then GO-SEND Instant shipping method should appeared on breakdown price
        Then Shipping cost GO-SEND Instant on breakdown price should correct
        Then Total payment with GO-SEND Instant shipping should correct


        Examples:
        | email | otp             |
        | testerauto0707@test.com | 123321 |