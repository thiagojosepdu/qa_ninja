/// <reference types="cypress" />

describe('home page', () => {
    it('app deve estar online', () => {
        cy.viewport(1400, 900)
        cy.visit('https://buger-eats.vercel.app')
        cy.get('#page-home > div >  main > h1').should('have.text', 'Seja um parceiro entregador pela Buger Eats');
    });
})
