import loginPage from "../../pages/loginPage";
import forgotPasswordPage from "../../pages/forgotPasswordPage";
import config from "../../utils/config";
import randomAlphanumeric from "../../utils/randomAlphanumeric"

describe('Suit login', () => {
  it("CP01", () => {
    cy.visit('https://demo4.dexmanager.com/DexFrontEnd/#!/login');
    loginPage.loginTestemation(config); 
  })

  it("CP02",  () => {
    cy.visit('https://demo4.dexmanager.com/DexFrontEnd/#!/login');    
    loginPage.loginUserWrong(config, randomAlphanumeric(10));
    
  })

  it("CP03",  () => {
    cy.visit('https://demo4.dexmanager.com/DexFrontEnd/#!/login');
    loginPage.loginPasswordWrong(config, randomAlphanumeric(10));
  })
  
  it("CP04",  () => {
    cy.visit('https://demo4.dexmanager.com/DexFrontEnd/#!/login');
      loginPage.clickForgotBtn()
      forgotPasswordPage.forgotTertermation(config)      
  });
})
