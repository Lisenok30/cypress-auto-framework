import HomePage_PO from "../../support/pageObjects/webdriver-uni/Homepage_PO";
import ContactUs_PO from "../../support/pageObjects/webdriver-uni/Contact_Us_PO";
/// <reference types = "Cypress"/>

describe('Test Contact Us form via WebdriverUni', () => {
    const homepage_PO = new HomePage_PO();
    const contactus_PO = new ContactUs_PO();
    Cypress.config('defaultCommandTimeout', 20000)
    before(()=>{
        cy.fixture('example').then(function(data){
           //this.data = data
           globalThis.data = data;
        })
    })

    beforeEach(() => {

       
        homepage_PO.visitHomepage();
        homepage_PO.clickOn_ContactUs_Button();
        // cy.visit(Cypress.env("webdriveruni_homepage")+ '/Contact-Us/contactus.html')
        // cy.get('#contact-us').invoke('removeAttr', 'target').click({force:true})
        // cy.document().should('have.property', 'charset').and('eq', 'UTF-8')
        // cy.title().should('include', 'WebDriver | Contact Us')
        // cy.url().should('include', 'Contact')
    });
    it('Should be able to submit a successful submission via contact us form', () => {

        contactus_PO.contactForm_Submission(Cypress.env('first_name'), data.last_name, data.email, "How can I learn Cypress?",'h1', 'Thank You for your Message!');
       // cy.visit('http://www.webdriveruniversity.com/Contact-Us/contactus.html')
        
       // cy.get('#contact-us').click({force:true})
    //    cy.get('[name="first_name"]').type(data.first_name)
    //    cy.get('[name="last_name"]').type(data.last_name)
    //    cy.get('[name="email"]').type(data.email)
    //    cy.get('textarea.feedback-input').type("It is a good day!")
    //    cy.get('[type="submit"]').click();
    //    cy.get('h1').should('have.text', 'Thank You for your Message!')
     //  cy.webdriverUni_ContactForm_Submission(Cypress.env('first_name'), data.last_name, data.email, "How can I learn Cypress?",'h1', 'Thank You for your Message!')
        
    });

    it('Should not be able to submit a successful submission via contact us form', () => {

        contactus_PO.contactForm_Submission(data.first_name, data.last_name, " ", "How can I learn Cypress??",'body', 'Error: Invalid email address');
        // cy.visit('http://www.webdriveruniversity.com/Contact-Us/contactus.html')
    //     cy.get('[name="first_name"]').type(data.first_name)
    //    cy.get('[name="last_name"]').type(data.last_name)
    //    //cy.get('[name="email"]').type('test@test.com')
    //    cy.get('textarea.feedback-input').type("It is a good day!")
    //    cy.get('[type="submit"]').click()
    //    cy.get('body').contains('Error: all fields are required');
      // cy.webdriverUni_ContactForm_Submission(data.first_name, data.last_name, " ", "How can I learn Cypress?",'body', 'Error: Invalid email address');
        
    });
});