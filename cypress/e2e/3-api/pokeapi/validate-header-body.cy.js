/// <reference types="cypress" />

describe('Validate header and body', () => {
    it.only('Successfully validate content-type', () => {
        cy.request('https://pokeapi.co/api/v2/pokemon/ditto').as('pokemon')
        cy.get('@pokemon').its('headers').its('content-type')
        .should('include', 'application/json; charset=utf-8')
    })

    // it('Get an user data', () => {
    //     var user = {
    //         "name":"limber",
    //         "url":"https://pokeapi.co/api/v2/ability/7/"
    //     }
    //     cy.request('GET', 'https://pokeapi.co/api/v2/pokemon/ditto', user).then((response) => {
    //         expect(response.status).eq(200)
    //         expect({ name: 'limber' }).to.eql({ name: 'limber' })
    //         expect({ url: 'https://pokeapi.co/api/v2/ability/7/' }).to.eql({ url: 'https://pokeapi.co/api/v2/ability/7/' })
    //     })
    // })

    it('Verify the user list will displayed', () => {
        cy.request({
            method: "GET",
            url: 'https://pokeapi.co/api/v2/pokemon/ditto',
        }).as('users')
        cy.get('@users').its('status').should('equal', 200)
    })
})