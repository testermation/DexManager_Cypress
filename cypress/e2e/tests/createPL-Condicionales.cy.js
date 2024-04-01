
import loginPage from "../../pages/loginPage";
import dashboardPage from "../../pages/dashboardPage";
import playlistPage from "../../pages/playlistPage";
import dateFormatter from "../../utils/dateFormatter";
import globalPage from "../../pages/globalPage"

describe('Create Playlist con condicionales', () => {
  
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

    //Carga de elementos variados en los channels 1 - 5

    playlistPage.moveMediaToChannel1()
    cy.wait(1500)
    playlistPage.assingCondEveryDays()

    playlistPage.moveMediaToChannel2()
    cy.wait(1500)
    playlistPage.assingCondEveryDays()
    
    playlistPage.moveMediaToChannel3()
    cy.wait(1500)
    playlistPage.assingCondDateFromTo("18:00","19:00")
    
    playlistPage.moveMediaToChannel4()
    cy.wait(1500)
    playlistPage.assingCondInclusionTag("REPRODUCIR")

    playlistPage.moveMediaToChannel5()
    cy.wait(1500)
    playlistPage.assingCondExclusionTag("NO REPRODUCIR")
    
    playlistPage.typeNamePlaylistInput("Playlist creada con Cypress <3 " + fechaFormateada )
    
    playlistPage.clickSaveButton()
    
    globalPage.readInfoPopup('Playlist guardada!');
    cy.screenshot({capture: 'runner'})
  })
    
  });