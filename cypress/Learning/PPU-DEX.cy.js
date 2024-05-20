// En este script se crea un layout multiframe de 3 channel, para que luego se utilice en CP10PP.
// El layout debe setearse en la variable layout del archivo config.js

import dashboardPage from "../../pages/dashboardPage";
import loginPage from "../../pages/loginPage";
import layoutPage from "../../pages/layoutPage";
import dateFormatter from "../../utils/dateFormatter";
import config from "../../utils/config";
import globalPage from "../../pages/globalPage";
import playlistPage from "../../pages/playlistPage";

describe('Create Playlist', () => {
  
  it("CP09PP",  () => {
    let fechaFormateada = dateFormatter.datetime();

    cy.goToLogin();

    loginPage.loginTestemation(config);

    dashboardPage.clickMenuPlaylist();

    dashboardPage.clickOptionPlaylist();

    globalPage.waitSpinner();
    
    cy.wait(3000);

    layoutPage.clickAddButton();

    cy.wait(200);

    layoutPage.setNameLayout(config,fechaFormateada);

    layoutPage.crateLayout(config);

    layoutPage.clickOverlapToggle();

    layoutPage.clickSaveButton();

    cy.log("el layout se creó con el nombre: " + config.layout);
    
    cy.wait(2000)
  })

  it("CP10PP",  () => {
    let fechaFormateada = dateFormatter.datetime();

    cy.goToLogin()
    cy.viewport(1200, 600)
    
    loginPage.loginTestemation(config);

    dashboardPage.clickPlaylist()
    
    playlistPage.clickAddButton()

    playlistPage.clickTheaterslistButton()

    playlistPage.typesearchLayoutInput(config)

    playlistPage.clickResultingLayout()

    playlistPage.clickConfirmButton()

    globalPage.waitSpinner()

    globalPage.waitSpinner()

    playlistPage.typeNamePlaylistInput("Playlist creada con Cypress <3 " + fechaFormateada )

    //Carga de elementos variados en los channels 1 - 3
    cy.wait(100)
    playlistPage.assingMediaTochannels(config)
    cy.wait(1500)
    playlistPage.clickSaveButton()
    globalPage.readInfoPopup('Playlist guardada!');
    cy.screenshot({capture: 'runner'})
  }) 
   
});