import loginPage from "../../pages/loginPage";

describe('Suit login', () => {
  
  it("CP01",  () => {
    cy.visit('https://demo4.dexmanager.com/DexFrontEnd/#!/login');

    loginPage.typeUsername("testermation")

    loginPage.typePassword("QA!2023+")

    loginPage.clickLogin()
 
    
  })

  it("CP02",  () => {
    cy.visit('https://demo4.dexmanager.com/DexFrontEnd/#!/login');

    loginPage.typeUsername("userWrong")

    loginPage.typePassword("QA!2023+")

    loginPage.clickLogin()
 
    
  })

  it("CP03",  () => {
    cy.visit('https://demo4.dexmanager.com/DexFrontEnd/#!/login');

    loginPage.typeUsername("testermation")

    loginPage.typePassword("passwordWrong")

    loginPage.clickLogin()
 
    
  })
  });