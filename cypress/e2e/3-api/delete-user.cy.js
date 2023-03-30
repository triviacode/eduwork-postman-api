/// <reference types="cypress" />

describe('Delete user data', () => {
    it('Successfully delete user data', () => {
        cy.request('DELETE', 'https://reqres.in/api/users/2').then((response) => {
            expect(response.status).equal(204)
        })
    })
})