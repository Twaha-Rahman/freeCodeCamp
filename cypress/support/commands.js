/* global cy Cypress*/
// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => {});
//
//
// -- This is a child command --
// Cypress.Commands.add(
//   'drag',
//   { prevSubject: 'element' },
//   (subject, options) => {}
// );
//
//
// -- This is a dual command --
// Cypress.Commands.add(
//   'dismiss',
//   { prevSubject: 'optional' },
//   (subject, options) => {}
// );
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => {});

Cypress.Commands.add('login', () => {
  cy.visit('/');
  cy.contains("Get started (it's free)").click({ force: true });
});

Cypress.Commands.add(
  'snap',
  {
    prevSubject: 'optional'
  },
  // eslint-disable-next-line consistent-return
  (chainedOff, screenshotName) => {
    cy.wait(1_000);

    if (chainedOff) {
      cy.wrap(chainedOff).screenshot(`_VD_${screenshotName}`, {
        capture: 'viewport'
      });

      return cy.wrap(chainedOff);
    } else {
      cy.screenshot(`_VD_${screenshotName}`, {
        capture: 'viewport'
      });
    }
  }
);
