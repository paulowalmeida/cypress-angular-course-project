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
});