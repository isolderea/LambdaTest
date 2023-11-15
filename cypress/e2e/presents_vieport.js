
describe("Viewport Testing using present", () => 
{
  const presets =
  ['macbook-15', 'samsung-note9', 'ipad-mini', 'iphone-xr'];

  it("Passing preset", () => {

    cy.visit("https://ecommerce-playground.lambdatest.io/index.php?route=account/login");
  
    //overwrite
    cy.viewport('iphone-6')
    cy.get('#input-email').type("lambdatest.Cypress@disposable.com");
    cy.get('#input-password').type("Cypress123!!");
    cy.get('input[type="submit"]').click();
  
    });  
 it(`Passing multiple width and height`, () => {
    cy.visit("https://ecommerce-playground.lambdatest.io/index.php?route=common/home");
    presets.forEach((preset) => {
    cy.viewport(viewport.width, viewport.height);
    cy.get('input[name="search"]').eq(0).type("Macbook");
    })    
  }); 
});
