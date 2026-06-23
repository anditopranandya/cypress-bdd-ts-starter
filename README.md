# Cypress + TypeScript + BDD (Cucumber) — Registration Flow

End-to-end tests for the registration form at
[practice.expandtesting.com/register](https://practice.expandtesting.com/register),
written in TypeScript using Cypress and Gherkin (BDD) via the
[`@badeball/cypress-cucumber-preprocessor`](https://github.com/badeball/cypress-cucumber-preprocessor).

Built as hands-on interview prep for Cypress, TypeScript, and BDD.

## Prerequisites

- Node.js (with npm)
- A Chromium-based browser or Firefox installed locally

## Setup

```bash
git clone <this-repo-url>
cd cypress-bdd-ts-starter
npm install
```

`npm install` reads `package.json` / `package-lock.json` and reinstalls the exact
dependency tree (Cypress, TypeScript, the Cucumber preprocessor, esbuild) — nothing
extra to configure.

## Running the tests

```bash
npx cypress open   # interactive — see the command log, click through steps, inspect cy.log()
npx cypress run    # headless — terminal output only
```

## Project structure

```
cypress-bdd-ts-starter/
├── cypress/
│   ├── e2e/
│   │   ├── registration.feature
│   │   └── step_definitions/
│   │       └── registration.steps.ts
│   └── support/
│       ├── commands.ts
│       └── e2e.ts
├── cypress.config.ts
├── package.json
├── package-lock.json
└── tsconfig.json
```

| File | Purpose |
|---|---|
| `cypress/e2e/registration.feature` | Plain-English Given/When/Then scenarios — what is being tested |
| `cypress/e2e/step_definitions/registration.steps.ts` | TypeScript implementing each Gherkin step — how it's tested |
| `cypress/support/commands.ts` | Reusable custom commands (e.g. `logCurrentUrl`) + their TS type declarations |
| `cypress/support/e2e.ts` | Auto-loaded before every test; imports `commands.ts` |
| `cypress.config.ts` | `baseUrl`, `specPattern` (treats `.feature` files as specs), wires up the Cucumber preprocessor |
| `package.json` → `cypress-cucumber-preprocessor.stepDefinitions` | Tells Cucumber where step definition files live |

## Scenarios covered

All sourced from the site's own published test cases:

- ✅ Successful registration with a unique username and matching passwords
- ❌ Missing username → `"All fields are required."`
- ❌ Missing password(s) → `"All fields are required."`
- ❌ Mismatched passwords → `"Passwords do not match."`
- ❌ Username too short / too long (boundary cases)

**Known behavior:** when multiple fields are invalid at once, the site only shows
the error for the *first* invalid field it checks — not a combined list.