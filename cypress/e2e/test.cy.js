/// <reference types= "cypress" />


Cypress.Commands.add("loginfortheusers", (username, password) => {

  cy.visit("https://www.saucedemo.com/")
  cy.get('[data-test="username"]').type(username)
  cy.get('[data-test="password"]').type(password) 
  cy.get('[data-test="login-button"]').click()



})

Cypress.Commands.add("addToCart", (quantity) => {


  for (let i = 0; i < quantity; i++) {
    cy.get('.btn').eq(i).click();

  }
});

describe('swag lab', () => {
  it('add all items to the cart', () => {


    cy.loginfortheusers("performance_glitch_user", "secret_sauce")
    cy.loginfortheusers("standard_user", "secret_sauce")
    //cy.loginfortheusers("locked_out_user","secret_sauce")
    cy.addToCart(4);
    //cy.get('.shopping_cart_badge').invoke('text').should('include',"4")
    cy.get('.shopping_cart_link').click()
    cy.get('[data-test="checkout"]').click()
    cy.get('[data-test="firstName"]').type("LAMA")
    cy.get('[data-test="lastName"]').type("ZWAIRI")

    cy.get('[data-test="postalCode"]').type("12345")
    cy.get('[data-test="continue"]').click()
    cy.get('[data-test="finish"]').click()
    //cy.get('.complete-header').invoke('text').should('contains', "thank you")

  });

});
