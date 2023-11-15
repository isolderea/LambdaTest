describe(" Web Testing - Login Flow", () => {

it(" Login Test Case ", () => {

 cy.visit("https://ecommerce-playground.lambdatest.io/index.php?route=account/login");
 cy.get('#input-email').type("lambdatest.Cypress@disposable.com");
 cy.get('#input-password').type("Cypress123!!");
 cy.get('input[type="submit"]').click();
 
 
});
});
