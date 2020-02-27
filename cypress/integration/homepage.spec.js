describe('CatAPI', function() {
  it('contains The Cat Caller header', function() {
    cy.visit('localhost:3000');

    cy.contains('The Cat Caller');
  });

  it('contains a button', function() {
    cy.visit('localhost:3000');

    cy.get('#cat_button');
  });
});
