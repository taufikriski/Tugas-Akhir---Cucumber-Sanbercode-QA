@regression @tdd
Feature: KasirDemo login Tests with TDD

    @all @positive @smoke
    Scenario: Login Succesfully with valid email & credentials
        Given I open KasirDemo website
        When I login with valid credentials
        # Then I Should be on the Dashboard page
    
    @all @negative
    Scenario Outline: Login with invalid credentials
        Given I open KasirDemo website
        When I login with <email> and <password>
        Then I Should see an error message message

    Examples:
        | username              | password   |  
        | warungaja@email.com   | warung@123 |
        | emailaja              | 123456     |
