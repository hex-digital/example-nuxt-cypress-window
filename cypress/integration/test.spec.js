describe('Test feature', () => {
  it('can tell the user is logged out on page load', () => {
    cy.visit('/')
      .window()
      .debug()
      .its('app.store')
      .its('state.auth.loggedIn')
      .should('equal', false);
  });
});
