/// <reference types="cypress" />

describe('Login scenarios', () => {
    beforeEach(() => {
        cy.visitSite();
    });

    it('should login when username is valid', () => {
        cy.login('flavio', '123');
    });

    it('should display error on the login when username or password is valid', () => {
        cy.login('paulo', '1234');
        cy.on('window:alert', (str) => {
            expect(str).to.equal('Invalid user name or password');
        });
    });

    it('should do login to flavio user', () => {
        cy.request({
            method: 'POST',
            url: 'https://apialurapic.herokuapp.com/user/login',
            body: Cypress.env()
        }).then(res => {
            expect(res.status).to.equal(200);
            expect(res.body).is.not.empty;
            expect(res.body).to.have.property('id');
            expect(res.body.id).to.equal(1);
            expect(res.body).to.have.property('email');
            expect(res.body.email).to.equal('flavio@alurapic.com.br');
        });
    });
});