/// <reference types = "Cypress"/>

describe('Validate webdriveruni homepage links', () => {
    it('Confirm links redirect to the correct pages', () => {
       // cy.visit('http://www.webdriveruniversity.com/Contact-Us/contactus.html')
        cy.visit('/')
        cy.get('#contact-us').invoke('removeAttr', 'target').click({force:true})
        cy.url().should('include', 'contactus')
        cy.go('back')
        cy.reload()
        //cy.reload(true)// reload without cache
        cy.go('forward')
        cy.url().should('include', 'contactus')
        cy.go('back')
        cy.get('#login-portal').invoke('removeAttr', 'target').click({force:true})
        cy.url().should('include', 'Login-Portal')
        cy.go('back')
        cy.get('#to-do-list').invoke('removeAttr', 'target').click()
        cy.url().should('include', 'To-Do-List')
        cy.go('back')



    });

    
});