/// <reference types = "Cypress"/>
describe('Traversing DOM elements in Cypress', () => {
    beforeEach(() => {
        cy.visit('/')
        cy.get("#data-table")
      .invoke("removeAttr", "target")
      .click({ force: true });
    });
    it('children() to get the children of DOM elements', () => {
        cy.get('.traversal-breadcrumb').children('.active').should('contain', 'Contact Us')
    });
    it('closest() to get the children of DOM elements', () => {
        cy.get('.traversal-badge').closest('ul').should('have.class', 'list-group')
        
    });
    it('eq() to get the children of DOM elements', () => {
        cy.get('.traversal-drinks-list >*').eq(2).should('contain', 'Milk')
        
    });
    it('filter() to get the children of DOM elements', () => {
        cy.get('.btn-group-toggle>*').filter('.active').should('contain', 'Button-1')
        
    });
    it('find() to get the children of DOM elements', () => {
        cy.get('.traversal-pagination').find('li').find('a').should('have.length', 7)
        
    });
    it('first() to get the children of DOM elements', () => {
        cy.get('.traversal-table > tbody > tr > td').first().should('contain', 'Andy')
        
    });
    it('last() to get the children of DOM elements', () => {
        cy.get('.traversal-table > tbody > tr > td').last().should('contain', 'Scott')
        
    });
    it('nextAll() to get the children of DOM elements', () => {
        cy.get('.traversal-drinks-list').contains('Tea').nextAll().should('have.length', 3)
    });
    it('nextUntil() to get the children of DOM elements', () => {
        cy.get('#coffee').nextUntil('#milk')
        
    });
    it('not() to get the children of DOM elements', () => {
        cy.get('.traversal-button-states>button').not('.disabled').should('not.have.class', 'disabled')
        
    });
    it('parent() to get the children of DOM elements', () => {
        cy.get('.traversal-mark').parent().should('contain', 'Lorem ipsum dolor sit amet')
        
    });
    it('parents() to get the children of DOM elements', () => {
        cy.get('.traversal-cite').parents().should('match', 'blockquote')
        
    });
    it('siblings() to get the children of DOM elements', () => {
        
        cy.get('.traversal-button-other-states .active').siblings().should('have.length', 3)
  
    });
});