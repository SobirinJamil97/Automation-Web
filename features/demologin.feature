    Feature: Login

    @test-1
    Scenario: Login with valid account
        Given User at home page demo
        When User input Username <username>
        When User input Password <password>
        Then User click button login

    Examples:
        | username | password | 
        | Admin | admin123 |

 @test-2
    Scenario: Login with invalid username
        Given User at home page demo
        When User input invalid Username <invalid_username>
        When User input Password <password>
        Then User click button login case invalid

    Examples:
        | invalid_username | password|
        | Mimin | admin123|

@test-3
    Scenario: Login with invalid password
        Given User at home page demo
        When User input Username <username>
        When User input invalid Password <invalid_password>
        Then User click button login case invalid

    Examples:
        | username | invalid_password | 
        | Admin | admin12 |

@test-4
    Scenario: Login with blank username
        Given User at home page demo
        # When Username is blank <blank_username>
        When User input Password <password>
        Then User click button login case field blank

    Examples:
        | blank_username | password | 
        |  | admin123 |
