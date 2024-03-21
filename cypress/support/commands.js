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
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
import '@4tw/cypress-drag-drop';
Cypress.on('uncaught:exception', (err, runnable) => {
    // No hacer que Cypress falle automáticamente
    return false;
  });

  Cypress.Commands.add('escribirJSON', (ruta, datos) => {
    cy.writeFile(ruta, datos);
  });

Cypress.Commands.add('goToLogin',() => {
    
    cy.viewport(1720, 900) // Set viewport to 550px x 750px
    cy.visit('https://demo4.dexmanager.com/DexFrontEnd/#!/login');
  });