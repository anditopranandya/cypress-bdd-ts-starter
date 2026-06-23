Feature: User Registration

  Background:
    Given I am on the registration page

  Scenario: The registration form renders correctly
    Then I should see the username, password, confirm password fields, and the register button

  Scenario: Successful registration with valid details
    When I register with a unique valid username and matching passwords
    Then I should be redirected to the login page
    And I should see the message "Successfully registered, you can log in now."

  Scenario: Failed registration due to a missing username
    When I register with an empty username and matching passwords
    Then I should see the message "All fields are required."

  Scenario: Failed registration due to missing passwords
    When I register with a unique valid username and missing passwords
    Then I should see the message "All fields are required."

  Scenario: Failed registration due to mismatched passwords
    When I register with a unique valid username and mismatched passwords
    Then I should see the message "Passwords do not match."

  Scenario: Failed registration due to a too short username
    When I register with a too short username and matching passwords
    Then I should see the message "Username must be at least 3 characters long."

  Scenario: Failed registration due to a too long username
    When I register with a too long username and matching passwords
    Then I should see the message "Invalid username. Usernames can only contain lowercase letters, numbers, and single hyphens, must be between 3 and 39 characters, and cannot start or end with a hyphen."

  Scenario: Failed registration due to a too short username and mismatched passwords
    When I register with a too short username and mismatched passwords
    Then I should see the message "Username must be at least 3 characters long."

  Scenario: Failed registration due to a too long username and mismatched passwords
    When I register with a too long username and mismatched passwords
    Then I should see the message "Invalid username. Usernames can only contain lowercase letters, numbers, and single hyphens, must be between 3 and 39 characters, and cannot start or end with a hyphen."