// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
Cypress.Commands.add("selectProductAndAdd", (phoneName) => {

    cy.get("a[href='#']").each(function(el,index,$list){
    var text = el.text();

    if(text.includes(phoneName))
    {
        this.price = el.parent(".card-title").next().text();
        cy.log(this.price);

    //Add to shopping bag
    el.parent(".card-title").parent(".card-body").next(".card-footer").find("button[class='btn btn-info']").click();
    }
    })

    Cypress.Screenshot.defaults({
        disableTimersAndAnimations: false
      })
})



//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
