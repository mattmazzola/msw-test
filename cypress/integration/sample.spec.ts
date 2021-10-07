describe('App', () => {
    it('render', () => {
        cy.visit('/');
        cy.get('[data-testid="app"]').should('be.visible');
    });
})