/// <reference types = "Cypress"/>

describe('Verifying variables, cypress commands and jquery commands', () => {
    it('Navigating to specific product pages', () => {
     cy.visit('https://www.automationteststore.com/')   
    // const makeupLink = cy.get("a[href*='product/category&path=']").contains('Makeup')
    // makeupLink.click();
    // const skincareLink = cy.get("a[href*='product/category&path=']").contains('Skincare')
    // skincareLink.click();

    const makeupLink = cy.get("a[href*='product/category&path=']").contains('Makeup').click();
    cy.get('h1 .maintext').then(($headerText)=>{
        const headerText = $headerText.text();
        cy.log("Found header text: " + headerText);
        expect(headerText).is.eq('Makeup');
    })
    
    const skincareLink = cy.get("a[href*='product/category&path=']").contains('Skincare').click();
    cy.get('h1 .maintext').then(($headerSkinText)=>{
        const headerSkinText = $headerSkinText.text();
        cy.log("Found header text: " + headerSkinText);
        expect(headerSkinText).is.eq('Skincare')
    })

    });

     it.only('Validate properties of the Contact Us Page', () => {
     cy.visit('https://automationteststore.com/index.php?rt=content/contact')   

     //Uses cypress commands and chaining
     cy.contains('#ContactUsFrm', 'Contact Us Form').find('#field_11').should('contain', 'First name')
     cy.contains('#ContactUsFrm', 'Contact Us Form').find('#field_12').should('contain', 'Email')

     // JQuery Approach
     cy.contains('#ContactUsFrm', 'Contact Us Form').then(text=>{
        const firstNameText = text.find('#field_11').text()
        expect(firstNameText).to.contain('First name')
        const emailText = text.find('#field_12').text()
        expect(emailText).to.contain('Email')

        //embedded commands(Closure)
        cy.get('#field_11').then(fnText=>{
            cy.log(fnText.text())
            cy.log(fnText)
        })

     } )

     // 
    
})

})