/// <reference types = "Cypress"/>

describe('Cypress web security', () => {
    it('Validate visiting two different domains', () => {
        cy.visit('http://www.webdriveruniversity.com/')
        cy.visit('https://automationteststore.com/')
       
    });

    it('Should not be able to submit a successful submission via contact us form', () => {
        
       
    });
});