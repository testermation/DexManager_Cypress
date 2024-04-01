import dashboardPage from "../../pages/dashboardPage";
import playlistPage from "../../pages/playlistPage";
import loginPage from "../../pages/loginPage";
import globalPage from "../../pages/globalPage";
import dateFormatter from "../../utils/dateFormatter";

describe('Create Playlist', () => {
  
  it("CPXX", async () => {
    let fechaFormateada = dateFormatter.datetime();
    let nameMedia1= 'BR_Quiosque_V_MCFLURRY_Kitkat_Ovomaltine_MyM.jpg';
    let nameMedia2= 'Cartel AXION Energy PRUEBA1 (2).jpg';
    let nameMedia3= 'dex-burger54-multi-arg-red-21.02.2500.wgt';
    let nameMedia4= 'Descuentos 1 hasta 9 ago.mp4';
    let nameMedia5= 'BR_Quiosque_V_MCFLURRY_Kitkat_Ovomaltine_MyM--2 (1).json';
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
    playlistPage.moveMediaToChannel2(2, nameMedia2)
    cy.wait(1500)
    playlistPage.moveMediaToChannel1(1, nameMedia1)
    cy.wait(1500)
    playlistPage.moveMediaToChannel3(3, nameMedia3)
    cy.wait(1500)
    playlistPage.moveMediaToChannel4(4, nameMedia4)
    cy.wait(1500)
    playlistPage.moveMediaToChannel5(5, nameMedia5)
    cy.wait(1500)
    playlistPage.clickSaveButton()
    globalPage.readInfoPopup('Playlist guardada!');
    cy.screenshot({capture: 'runner'})
  })
    
  });