describe('CatAPI', function() {
  it('hello world test', function() {
    cy.visit('localhost:3000');

    cy.contains('Hello World!');
  });
});
