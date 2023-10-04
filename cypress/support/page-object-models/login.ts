/* eslint-disable no-unused-vars */
const btnAccount = 'button#navbarAccount'
const btnLogin = 'button#navbarLoginButton'
const txtEmail = 'input#email'
const txtPassword = 'input#password'
const btnLoginMain = 'button#loginButton'
const btnCloseBanner ='button[aria-label="Close Welcome Banner"]'

/**
      * loginIntoApplication function logs into the application with email and password  
      * @param email     
      * @param password   
   */
Cypress.Commands.add("loginIntoApplication", (email, password) => {
  cy.visit(Cypress.env('url'))  
  cy.get(btnCloseBanner).should('be.visible')
    .click()
  cy.get(btnAccount).should('be.visible')
    .click()
  cy.get(btnLogin).should('be.visible')
    .click()
  cy.get(txtEmail).should('be.visible')
    .type(email)
  cy.get(txtPassword).should('be.visible')
    .type(password)
  cy.get(btnLoginMain).should('be.visible')
    .click()
});

