/// <reference types = "Cypress"/>

describe('Test File Upload via webdriveruni', () => {
    beforeEach(() => {
        cy.visit('/')
        cy.get('#file-upload').invoke('removeAttr', 'target').click({force:true})
        cy.url().should('include', 'File-Upload')
    });
    it('Upload a file ... ', () => {
        cy.get('#myFile').selectFile('cypress/fixtures/kesha.png')
        cy.get('#submit-button').click()
       
    });
    it('Upload no file', () => {
        cy.get('#submit-button').click()
        
    });
});