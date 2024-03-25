import loginPage from "../../Pages/loginPage";

describe('Suit login', () => {
  
  it("CPXX",  () => {
    cy.visit('https://demo4.dexmanager.com/DexFrontEnd/#!/login');

    loginPage.typeUsername("testermation")

    loginPage.typePassword("QA!2023+")

    loginPage.clickLogin()
 
    
  })
    
  });