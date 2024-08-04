@regression @basic
Feature: KasirDemo login Tests

    @all @positive
    Scenario: Login Succesfully with valid email & credentials
        Given I open KasirDemo website
        When I login with valid credentials
        Then I Should be on the Dashboard page

    @all @negative
    Scenario: Should login failed with invalid username
        Given I open KasirDemo website
        When I login with invalid email
        Then I Should see an error email message

    @all @negative
    Scenario: Should login failed with invalid password
        Given I open KasirDemo website
        When I login with invalid password
        Then I Should see an error password message

