describe("Viewport Testing using customized Width And Height", () => {
  const viewports = [
 
 
{ width: 1280, height: 720 }, // Desktop
{ width: 320, height: 480 }, // Mobile portrait
{ width: 768, height: 1024 },// Tablet
];
 
it(`Passing multiple width and height`, () => {
cy.visit("https://ecommerce-playground.lambdatest.io/index.php?route=common/home");
viewports.forEach((viewport) => {
cy.viewport(viewport.width, viewport.height);
cy.get('input[name="search"]').eq(0).type("Macbook");
})
}); 

});