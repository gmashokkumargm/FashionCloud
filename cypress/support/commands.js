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
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('addMultipleToDo', (multipleProduct) =>{
    multipleProduct.forEach(data =>{
        cy.get('[type="text"]').type(data)
        cy.get('[type="submit"]').click();
    })
})

Cypress.Commands.add('verifyMultipleToDo', (toDoList) =>{
    toDoList.forEach(data =>{
        cy.get('label.ng-binding').should("contain.text", data);
    })
    cy.get('span.label').should("have.text", toDoList.length);
})

Cypress.Commands.add('removeMultipleToDo', (toDoList) =>{
    toDoList.forEach(list => {
     cy.get('label.ng-binding').contains(list).click()
    })
})