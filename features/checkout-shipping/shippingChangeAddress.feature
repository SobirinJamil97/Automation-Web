Feature: Checkout-shipping


    @TEST-6475 @POSITIVE
    Scenario: Change selected address
        Given User has logged in and on shipping page
        When User click address list box
        When User select address name Rumah Sendiri
        Then Selected shipping address is Rumah Sendiri
        Then Nama lengkap is Automation Test
        Then Nomor ponsel is 6280000000474
        Then Alamat lengkap is Jl. Raya Viktor Bsd No.15 Blok D, Ciater, Kec. Serpong, Kota Tangerang Selatan, Banten 15310
        Then Pesan pengiriman is Hati-hati banyak ranjau


        Examples:
        | email | otp             |
        | testerauto0707@test.com | 123321 |