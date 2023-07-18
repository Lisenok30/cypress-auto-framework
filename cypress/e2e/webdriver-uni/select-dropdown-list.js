/// <reference types = "Cypress"/>

describe("Interact with dropdown lists via webdriveruni", () => {
  it("Select specific values via select dropdown list", () => {
    // cy.visit('http://www.webdriveruniversity.com/Contact-Us/contactus.html')
    cy.visit("/");
    cy.get("#dropdown-checkboxes-radiobuttons")
      .invoke("removeAttr", "target")
      .click({ force: true });
    cy.get("#dropdowm-menu-1").select('c#')
    cy.get("#dropdowm-menu-2").select('testng').should('have.value', 'testng')
    cy.get("#dropdowm-menu-3").select('css').contains('CSS')

    cy.get("#dropdowm-menu-2").as('menu-2')
    cy.get('@menu-2').select('maven').should('have.value', 'maven')
    cy.get('@menu-2').select('TestNG').contains('TestNG')
  });
});
