/// <reference types = "Cypress"/>

describe('Handle js alerts', () => {
    it('Confirm js alerts contains the correct text', () => {
       // cy.visit('http://www.webdriveruniversity.com/Contact-Us/contactus.html')
        cy.visit('/')
        cy.get('#popup-alerts').invoke('removeAttr', 'target').click({force:true})
        cy.url().should('include', 'Popup-Alerts')
        cy.get('#button1').click()
        cy.on('window:alert', (str)=>{
            expect(str).to.equal('I am an alert box!')
        });

    });

    it('Validate js confirm alert works correctly when clicking ok', () => {
        // cy.visit('http://www.webdriveruniversity.com/Contact-Us/contactus.html')
         cy.visit('/')
         cy.get('#popup-alerts').invoke('removeAttr', 'target').click({force:true})
         cy.get('#button4').click()
         cy.on('window:confirm', (str)=>{
            return true;
        });
        cy.get('#confirm-alert-text').contains('You pressed OK!')
      
         });

         it.only('Validate js confirm alert works correctly when clicking cancen', () => {
            // cy.visit('http://www.webdriveruniversity.com/Contact-Us/contactus.html')
             cy.visit('/')
             cy.get('#popup-alerts').invoke('removeAttr', 'target').click({force:true})
             cy.get('#button4').click()
             cy.on('window:confirm', (str)=>{
                return false;
            });
            cy.get('#confirm-alert-text').contains('You pressed Cancel!')
          
             });
});