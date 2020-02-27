describe('CatAPI', function() {
  beforeEach(function(){
    cy.visit('localhost:3000');
  });

  it('contains The Cat Caller header', function() {
    cy.contains('The Cat Caller');
  });

  it('contains a button', function() {
    cy.get('#cat_button');
  });

  it('produces a kittens', function() {
    cy.get('#cat_button').click();
    cy.get('#cat_button_clothes').click();
    cy.wait(3000); // delay for the api call to finish - 3 seconds
    cy.get('#cat_image').should('have.attr', 'src');
    cy.get('#cat_image_clothes').should('have.attr', 'src');
  });
});
