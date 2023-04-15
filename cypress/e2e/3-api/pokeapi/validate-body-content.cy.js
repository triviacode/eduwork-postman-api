/// <reference types="cypress" />

describe('Validate body content', () => {
    it('Successfully validate body content', () => {
        cy.request('https://pokeapi.co/api/v2/ability/7/').as('pokemon')
        cy.get('@pokemon').its('body').should('include', {name: 'limber'})
    })
})