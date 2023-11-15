describe(" Web Testing in Landscape Mode", () => {
 
  it("Passing viewport as Landscape ", () => {
 cy.visit("https://ecommerce-playground.lambdatest.io/index.php?route=account/login");
 cy.viewport('iphone-xr', 'landscape');
 cy.get('#input-email').type("lambdatest.Cypress@disposable.com");
 cy.get('#input-password').type("Cypress123!!");
 cy.get('input[type="submit"]').click();
 
 
 });  
});