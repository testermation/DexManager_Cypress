import dashboardPage from "../../pages/dashboardPage";
import playlistPage from "../../pages/playlistPage";
import loginPage from "../../pages/loginPage";
import globalPage from "../../pages/globalPage";
import dateFormatter from "../../utils/dateFormatter";

describe('Create Playlist', () => {
  
  it("CPXX", async () => {
    let fechaFormateada = dateFormatter.datetime();
    
    const nameMedia1= 'BR_Quiosque_V_MCFLURRY_Kitkat_Ovomaltine_MyM.jpg';
    const nameMedia2= 'Cartel AXION Energy PRUEBA1 (2).jpg';
    const nameMedia3= 'dex-burger54-multi-arg-red-21.02.2500.wgt';
    const nameMedia4= 'Descuentos 1 hasta 9 ago.mp4';
    const nameMedia5= 'BR_Quiosque_V_MCFLURRY_Kitkat_Ovomaltine_MyM--2 (1).json';
    
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
  
    //Carga de elementos variados en los channels 1 - 5
    cy.wait(1500)
    playlistPage.moveMediaToChannel(1, nameMedia1)
    cy.wait(1500)
    playlistPage.moveMediaToChannel(2, nameMedia2)
    cy.wait(1500)
    playlistPage.moveMediaToChannel(3, nameMedia3)
    cy.wait(1500)
    playlistPage.moveMediaToChannel(4, nameMedia4)
    cy.wait(1500)
    playlistPage.moveMediaToChannel(5, nameMedia5)
    cy.wait(1500)
    playlistPage.clickSaveButton()
    globalPage.readInfoPopup('Playlist guardada!');
    cy.screenshot({capture: 'runner'})
  })
    
  });