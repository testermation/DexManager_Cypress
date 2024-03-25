import dashboardPage from "../../Pages/dashboardPage";
import playlistPage from "../../pages/playlistPage";
import loginPage from "../../Pages/loginPage";
import globalPage from "../../pages/globalPage";
import dateFormatter from "../../utils/dateFormatter";

describe('Create Playlist', () => {
  
  it("CPXX", async () => {
    let fechaFormateada = dateFormatter.datetime()
    cy.viewport(1720, 900) // Set viewport to 550px x 750px
    cy.visit('https://demo4.dexmanager.com/DexFrontEnd/#!/login');

    loginPage.typeUsername("testermation")

    loginPage.typePassword("QA!2023+")

    loginPage.clickLogin()
 
    dashboardPage.clickPlaylist()
    
    playlistPage.clickAddButton()

    playlistPage.clickTheaterslistButton()

    playlistPage.typesearchLayoutInput("SINCRO 5PH")

    playlistPage.clickResultingLayout()

    playlistPage.clickConfirmButton()

    globalPage.waitSpinner()

    globalPage.waitSpinner()

    playlistPage.typeNamePlaylistInput("Playlist creada con Cypress <3 " + fechaFormateada )
    cy.screenshot()
    //Carga de elementos variados en los channels 1 - 5
    cy.wait(1500)
    playlistPage.moveMediaToChannel1()
    cy.wait(1500)
    playlistPage.moveMediaToChannel2()
    cy.wait(1500)
    playlistPage.moveMediaToChannel3()
    cy.wait(1500)
    playlistPage.moveMediaToChannel4()
    cy.wait(1500)
    playlistPage.moveMediaToChannel5()
    cy.wait(2000)
    playlistPage.clickSaveButton()
    globalPage.readInfoPopup('Playlist guardada!');
    cy.screenshot({capture: 'runner'})
  })
    
  });