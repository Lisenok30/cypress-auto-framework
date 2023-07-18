/// <reference types = "Cypress"/>

describe('Verify radio buttons via webdriveruni', () => {
    beforeEach(() => {
        cy.visit('/')
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click({force:true})
    });
    it('Check the specific radio buttons', () => {
        cy.get('#radio-buttons').find('[type="radio"]').first().check()
        cy.get('#radio-buttons').find('[type="radio"]').eq(1).check()

    });

    it('Validate the state of specific buttons', () => {
     
        cy.get('[value="lettuce"]').should('not.be.checked')
        cy.get('[value="lettuce"]').check()
        cy.get('[value="pumpkin"]').should('not.be.checked')
        cy.get('[value="cabbage"]').should('be.disabled')

 
     });

  
});