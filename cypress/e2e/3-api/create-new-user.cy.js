/// <reference types="cypress" />

describe('Create New User', () => {
    it('Add a new user', () => {
        var user = {
            "name": 'Hasib Pramana',
            "job": "QA Engineer"
        }
        cy.request('POST', 'https://reqres.in/api/users', user).then((response) => {
            expect(response.status).equal(201)
            expect({ name: 'Hasib Pramana' }).to.eql({ name: 'Hasib Pramana' })
            expect({ job: 'QA Engineer' }).to.eql({ job: 'QA Engineer' })
        })
    })
})