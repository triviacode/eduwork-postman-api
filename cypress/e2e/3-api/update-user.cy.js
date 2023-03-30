/// <reference types="cypress" />

describe('Update User', () => {
    it('Successfully update user data', () => {
        var NewUser = {
            "name": "Al Khawarizmi",
            "job": "Data Scientist"
        }
        cy.request('PUT', 'https://reqres.in/api/users/2', NewUser).then((response) => {
            expect(response.status).equal(200)
            expect(response.body.name).to.equal(NewUser.name)
        })
    })
})