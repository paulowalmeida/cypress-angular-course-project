Cypress.Commands.add('visitSite', () => {
    cy.visit('/');
});

Cypress.Commands.add('login', (userName, password) => {
    cy.get('input[formcontrolname="userName"]').type(userName);
    cy.get('input[formcontrolname="password"]').type(password);
    cy.get('button[type="submit"]').contains('login').click();
});