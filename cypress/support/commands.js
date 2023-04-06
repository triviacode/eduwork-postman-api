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

const token = '422e40d3b15634477baff0293d071de1693c282950471553c8006c075bfe56b4'

Cypress.Commands.add('createUser', () => {
    cy.fixture("ApiCreateUser").then((create) => {

        cy.request({
            method : 'POST',
            url : 'https://gorest.co.in/public/v2/users',
            headers:{
                'Authorization': 'Bearer ' + token
            },
            body:{
                "name" : create.name,
                "gender" : create.gender,
                "email" : create.email,
                "status" : create.status
            }
        }).then((Response) => {
            
            expect(Response.status).eq(201)

            expect(Response.body).to.have.property('name', create.name)
            expect(Response.body).to.have.property('gender', create.gender)
            expect(Response.body).to.have.property('email', create.email)
            expect(Response.body).to.have.property('status', create.status)
        })
    })
})