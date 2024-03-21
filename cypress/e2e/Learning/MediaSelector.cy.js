//Este learning tiene el objetivo conocer el proceso de selección
//de media según el channel y al posición donde se encuentre la media
// Por tanto, se dará como valores de entrada a la función c : channel y p : position


import loginPage from "../../Pages/loginPage";
import playlistPage from "../../Pages/playlistPage";
import globalPage from "../../Pages/globalPage";
//
describe('Media Selector', () => {
  
  it("CPXX", async () => {
    cy.viewport(1720, 900) // Set viewport to 550px x 750px
    cy.visit('https://demo4.dexmanager.com/DexFrontEnd/#!/login?redirect=playlist/5978');

    loginPage.typeUsername("testermation")

    loginPage.typePassword("QA!2023+")

    loginPage.clickLogin()
 
    globalPage.waitSpinner()

    globalPage.waitSpinner()

     //Se indica Channel y position de la media a seleccionar
    cy.wait(1000)
    globalPage.waitSpinner()
    playlistPage.clickMediaInchannelInPosition(1,2)
    cy.wait(1000)
    playlistPage.clickMediaInchannelInPosition(2,3)
    cy.wait(1000)
    playlistPage.clickMediaInchannelInPosition(1,4)

  })
    
  });