/// <reference types="cypress" />

describe('Photos list scenarios', () => {
    beforeEach(() => {
        cy.visitSite();
    });

    it('should get photos of flavio user', () => {
        cy.login('flavio', '123');
        cy.request('https://apialurapic.herokuapp.com/flavio/photos')
            .then(res => {
                expect(res.status).to.equal(200);
                expect(res.body).is.not.empty;
                expect(res.body[0])
                    .to.have.property('description');
                expect(res.body[0].description).to.equal('Farol iluminado');
            });
    });
});