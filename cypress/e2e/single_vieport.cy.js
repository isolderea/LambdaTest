
describe("Viewport Testing using customized Width And Height", () => 
{
  it("Passing single width and height", () => {

  cy.visit("https://ecommerce-playground.lambdatest.io/index.php?route=account/login");

  //overwrite
  cy.viewport(360, 890);
  cy.get('#input-email').type("lambdatest.Cypress@disposable.com");
  cy.get('#input-password').type("Cypress123!!");
  cy.get('input[type="submit"]').click();

  });  

});
