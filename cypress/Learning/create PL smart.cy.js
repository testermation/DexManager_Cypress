// Este script obtiene información de dataIn.json, luego según lo que se defina en ruta, decidirá que medias usar para crear la PL. 
// por otro lado, se tiene la variable Type, que define de que forma se agregarán las medias en la PL.

import dashboardPage from "../../pages/dashboardPage";
import playlistPage from "../../pages/playlistPage";
import loginPage from "../../pages/loginPage";
import globalPage from "../../pages/globalPage";
import dateFormatter from "../../utils/dateFormatter";

describe('Create Playlist', () => {
  
  it("CPXX", async () => {
    let fechaFormateada = dateFormatter.datetime();
    let ruta = "";
    let grupo = [];
    let type = "";
    cy.viewport(1720, 900) // Set viewport to 550px x 750px
    cy.visit('https://demo4.dexmanager.com/DexFrontEnd/#!/login');

    cy.fixture('dataIn.json').then((datos) => {
      ruta = datos.ruta;
      if(ruta==="Testing/Automation/carpeta 1"){
        grupo = Object.values(datos.grupo1[0]);
        type = "ruta";
      }else{
        grupo = Object.values(datos.grupo2[0]);
        type = "raiz";
      }

      cy.log(grupo[0]),
      cy.log(grupo[1]),
      cy.log(grupo[2]),
      cy.log(grupo[3]),
      cy.log(grupo[4]),
      cy.log("Type:" + type),
      cy.log("Ruta:" + ruta)

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
      cy.wait(100)
      playlistPage.assingMediaTochannelsSMART(grupo,type,ruta)
      cy.wait(1500)
      playlistPage.clickSaveButton()
      globalPage.readInfoPopup('Playlist guardada!');
      cy.screenshot({capture: 'runner'})
    }) 
  })
    
  });