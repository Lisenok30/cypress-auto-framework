/// <reference types = "Cypress"/>

describe("Test Datepicker via webdriveruni", () => {
  it("Select date from the datepicker", () => {
    // cy.visit('http://www.webdriveruniversity.com/Contact-Us/contactus.html')
    cy.visit("/");
    cy.get("#datepicker").invoke("removeAttr", "target").click({ force: true });
    cy.url().should("include", "Datepicker");
    cy.get("#datepicker").click();
    // let date = new Date();
    // date.setDate(date.getDate())// get current day 20 july

    // cy.log(date.getDate());
    // let date1 = new Date();
    // date1.setDate(date.getDate() + 5);
    // cy.log(date1.getDate())

    var date = new Date();
    date.setDate(date.getDate() + 107);

    var futureYear = date.getFullYear();
    var futureMonth = date.toLocaleString("default", { month: "long" });
    var futureDay = date.getDate();

    cy.log(futureYear);
    cy.log(futureMonth);
    cy.log(futureDay);

    function selectMonthAndYear() {
      cy.get(".datepicker-dropdown")
        .find(".datepicker-switch")
        .first()
        .then((currentDate) => {
          
            if (!currentDate.text().includes(futureYear)) {
              cy.get(".next").first().click();
              selectMonthAndYear();
            }
        }).then(()=>{
            cy.get(".datepicker-dropdown")
            .find(".datepicker-switch")
            .first()
            .then((currentDate) => {
              
                if (!currentDate.text().includes(futureMonth)) {
                  cy.get(".next").first().click();
                  selectMonthAndYear();
                }
            })
            
        });
    }

    function selectFutureDay(){
        cy.get('[class="day"]').contains(futureDay).click()
    }
    selectMonthAndYear();
    selectFutureDay();
  });
});
