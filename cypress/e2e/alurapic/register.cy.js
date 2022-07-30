/// <reference types="cypress" />

describe('Register scenarios', () => {
    beforeEach(() => {
        cy.visitSite();
        cy.contains('a[href="#/home/signup"]', 'Register now').click();
    });

    context('should display warning messages when', () => {
        beforeEach(() => {
            cy.contains('button', 'Register').click();
        });

        it('inputs not filled', () => {
            cy.contains('button', 'Register').click();
            cy.contains('ap-vmessage > small.text-danger', 'Email is required').should('be.visible');
            cy.contains('ap-vmessage > small.text-danger', 'Full name is required!').should('be.visible');
            cy.contains('ap-vmessage > small.text-danger', 'User name is required!').should('be.visible');
            cy.contains('ap-vmessage > small.text-danger', 'Password is required').should('be.visible');
        });

        it('a invalid email is entered', () => {
            cy.get('input[formcontrolname="email"]').type('test');
            cy.contains('ap-vmessage > small.text-danger', 'Invalid e-mail').should('be.visible');
        });

        it('a name is little than 2 characters', () => {
            cy.get('input[formcontrolname="fullName"]').type('a').blur();
            cy.contains('ap-vmessage > small.text-danger', 'Mininum length is 2').should('be.visible');
        });

        it('a username is little than 2 characters', () => {
            cy.get('input[formcontrolname="userName"]').type('a').blur();
            cy.contains('ap-vmessage > small.text-danger', 'Mininum length is 2').should('be.visible');
        });

        it('length of password is little than 8 characters', () => {
            cy.get('input[formcontrolname="password"]').type('test').blur();
            cy.contains('ap-vmessage > small.text-danger', 'Mininum length is 8').should('be.visible');
        });

        it('length of password is bigger than 18 characters', () => {
            cy.get('input[formcontrolname="password"]').type('abcdefghijklmnopqrstuvwxyz').blur();
            cy.contains('ap-vmessage > small.text-danger', 'Maximun length is 18').should('be.visible');
        });
    });
});
