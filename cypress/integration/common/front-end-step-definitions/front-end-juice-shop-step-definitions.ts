/* eslint-disable import/extensions */

/* eslint-disable prefer-template */

import {
    Given, When,Then
  } from "cypress-cucumber-preprocessor/steps";
  // import {praEndPoints} from "../../../fixtures/end-points/end-points"
  /// <reference types="Cypress" />
  
  
  function loginIntoApplication(datatable) {
    datatable.hashes()
      .forEach((element) => {
  
        const {
          emailAddress
        } = element
        const {
          password
        } = element
        cy.loginIntoApplication(emailAddress, password)
      })
  }

  function addNewItemsToCart(datatable) {
    datatable.hashes()
      .forEach((element) => {
        cy.deleteExistingItem()
        cy.addItemToCart(element.itemName, element.totalItems)
        cy.clickCheckout()
      })
  }
  
  function addNewAddress(datatable) {
    datatable.hashes()
      .forEach((element) => {
        cy.addNewAddress(element.country, element.name, element.mNuber, element.zipCode, element.address, element.city, element.state)
      })
  }

  function searchAndVerifyProduct(datatable) {
    datatable.hashes()
      .forEach((element) => {
          cy.searchAndVerifyProduct(element.productName)
      })
  }

  function deleteItems() {
    cy.deleteExistingItem()
  }

  Given("I login into the OWASP Juice Shop Application", loginIntoApplication);
  When("I add Items to the Carts", addNewItemsToCart);
  Then("I Delete the Items from the Cart", deleteItems);
  Then("I add New Address and Verify", addNewAddress);
  Then("I Search and Verify that Banana does not exist in the Search", searchAndVerifyProduct);

