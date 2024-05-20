//Este script tiene le objetivo de crear una PL multiframe, asignando 1 media diferente en cada uno de los 5 channels. 

import playlistPage from "../../pages/playlistPage";
import loginPage from "../../pages/loginPage";
import globalPage from "../../pages/globalPage";
import dateFormatter from "../../utils/dateFormatter";
import dashboardPage from "../../pages/dashboardPage"

describe('Create Playlist', () => {
  
  it("CPXX", async () => {
    let ruta = 'Testing/Automation/carpeta 1';
    let nameMedia1= 'pandas 1.jpg';
    let nameMedia2= 'pandas 2.jpg';
    let nameMedia3= 'pandas 3.jpg';
    let nameMedia4= 'pandas 4.jpg';
    let nameMedia5= 'pandas 5.jpg';

    let fechaFormateada = dateFormatter.datetime();
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
    
    cy.wait(2000)
    playlistPage.buscarRuta(ruta)
    playlistPage.ubicarSubcarpetaFinal(ruta)
    cy.wait(600)
    playlistPage.clickMedia(nameMedia1)
    cy.wait(600)
    playlistPage.moveMediaToChannel(1, nameMedia1)
    cy.wait(600)
    playlistPage.moveMediaToChannel(2, nameMedia2)
    cy.wait(600)
    playlistPage.moveMediaToChannel(3, nameMedia3)
    cy.wait(600)
    playlistPage.clickMedia(nameMedia1)
    cy.wait(600)
    playlistPage.moveMediaToChannel(4, nameMedia4)
    cy.wait(600)
    playlistPage.clickMedia(nameMedia1)
    cy.wait(600)
    playlistPage.moveMediaToChannel(5, nameMedia5)
    cy.wait(600)
    playlistPage.clickSaveButton()
    globalPage.readInfoPopup('Playlist guardada!');
    cy.screenshot({capture: 'runner'})
  })
    
  });