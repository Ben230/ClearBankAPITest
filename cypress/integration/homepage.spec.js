describe('CatAPI', function() {
  it('hello world test', function() {
    cy.visit('localhost:8000');

    cy.contains('Hello World!');
  });
});
