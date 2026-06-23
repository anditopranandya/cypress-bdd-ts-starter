import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("I am on the registration page", () => {
    cy.visit("/");
    cy.get("body > main:nth-child(4) > div:nth-child(3) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > section:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > h3:nth-child(1) > a:nth-child(1)").should("be.visible").click();
});

Then("I should see the username, password, confirm password fields, and the register button", () => {
    cy.get("input[name='username']").should("be.visible");
    cy.get('input[name="password"]').should("be.visible");
    cy.get('input[name="confirmPassword"]').should("be.visible");
    cy.get('button[type="submit"]').should("be.visible");
});

When("I register with a unique valid username and matching passwords", () => {
  const username = `tester-${Date.now()}`;
  const password = "SuperSecret123!";

  cy.get('input[name="username"]').type(username);
  cy.get('input[name="password"]').type(password);
  cy.get('input[name="confirmPassword"]').type(password);
  cy.get('button[type="submit"]').click();
});

Then("I should be redirected to the login page", () => {
  cy.url().should("include", "/login");
});

Then("I should see the message {string}", (message: string) => {
  cy.contains(message).should("be.visible");
});

When("I register with an empty username and matching passwords", () => {
    const password = "SuperSecret123!";

    cy.get('input[name="password"]').type(password);
    cy.get('input[name="confirmPassword"]').type(password);
    cy.get('button[type="submit"]').click();

    cy.logCurrentUrl();
});

When("I register with a unique valid username and missing passwords", () => {
    const username = `tester-${Date.now()}`;

    cy.get('input[name="username"]').type(username);
    cy.get('button[type="submit"]').click();

    cy.logCurrentUrl();
});

When("I register with a unique valid username and mismatched passwords", () => {
    const username = `tester-${Date.now()}`;

    cy.get('input[name="username"]').type(username);
    cy.get('input[name="password"]').type("SuperSecret123!");
    cy.get('input[name="confirmPassword"]').type("DifferentPassword456!");
    cy.get('button[type="submit"]').click();

    cy.logCurrentUrl();
});

When("I register with a too short username and matching passwords", () => {
    const username = `tt`;

    cy.get('input[name="username"]').type(username);
    cy.get('input[name="password"]').type("SuperSecret123!");
    cy.get('input[name="confirmPassword"]').type("SuperSecret123!");
    cy.get('button[type="submit"]').click();

    cy.logCurrentUrl();
});

When("I register with a too long username and matching passwords", () => {
    const username = `ANDITOANDITOANDITOANDITOANDITOANDITOANDITOANDITO`;

    cy.get('input[name="username"]').type(username);
    cy.get('input[name="password"]').type("SuperSecret123!");
    cy.get('input[name="confirmPassword"]').type("SuperSecret123!");
    cy.get('button[type="submit"]').click();

    cy.logCurrentUrl();
});

When("I register with a too short username and mismatched passwords", () => {
    const username = `a`;

    cy.get('input[name="username"]').type(username);
    cy.get('input[name="password"]').type("SuperSecret123!");
    cy.get('input[name="confirmPassword"]').type("SuperSecret125!");
    cy.get('button[type="submit"]').click();

    cy.logCurrentUrl();
});

When("I register with a too long username and mismatched passwords", () => {
    const username = `ANDITOANDITOANDITOANDITOANDITOANDITOANDITOANDITO`;

    cy.get('input[name="username"]').type(username);
    cy.get('input[name="password"]').type("SuperSecret123!");
    cy.get('input[name="confirmPassword"]').type("SuperSecret125!");
    cy.get('button[type="submit"]').click();

    cy.logCurrentUrl();
});