Feature: Checkout-shipping


    @TEST-6477 @POSITIVE
    Scenario: Choose Regular Shipping Method
        Given User at home page
        When User click login button
        Then Login form should available
        When User input email <email>
        When User input otp code <otp>
        Then Username should available
        # When User click Search button
        # When User search product Argan Hand Balm 30ml
        # When User click Add To Bag
        # When User scroll up page 1
        # Then Cart badge should available
        When User click shopping cart button
        Then Shopping cart page should available
        # Then Qty should 1
        When User click Bayar
        When User click address list box
        When User select address name Rumah Sendiri
        When User select shipping method SAP Regular
        Then SAP Regular shipping method should appeared on breakdown price
        Then Shipping cost SAP Regular on breakdown price should correct
        Then Total payment with SAP Regular shipping should correct


        Examples:
        | email | otp             |
        | testerauto0707@test.com | 123321 |