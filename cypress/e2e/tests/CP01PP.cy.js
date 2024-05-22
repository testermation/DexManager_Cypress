//Este script tiene le objetivo de crear una PL multiframe, asignando 1 media diferente en cada uno de los 5 channels. 
//A cada media se define un tipo condicional diferente.
import loginPage from "../../pages/loginPage";
import dashboardPage from "../../pages/dashboardPage";
import config from "../../utils/config";
import forgotPasswordPage from "../../pages/forgotPasswordPage";

describe('Login, logout and forgot password', () => {
  it("CP01PP", () => {
    cy.goToLogin(); //Comando para ir a la pagina de Login

    loginPage.loginTestemation(config); //Función login con las credencias de testermation alojadas en config.js

    cy.wait(1000); // espera para la captura

    cy.screenshot({capture: 'runner'}, { path: 'C:/Users/example.png' }); // Captura del login el dashboard

    dashboardPage.clickAccountMenu(); //Click en foto de perfil

    dashboardPage.clickLogout(); // click en logout

    loginPage.clickForgotBtn(); //Click en "forgot password"

    forgotPasswordPage.forgotTertermation(config);  //Función para realizar el procesode olvidar contraseña con userName incluye assertion

    cy.wait(500); // espera para la captura

    cy.screenshot({capture: 'runner'}, { path: 'C:/Users/example.png' }); // Captura del pop-up 
  });
    
  });