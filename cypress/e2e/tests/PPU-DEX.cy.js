// En este script se crea un layout multiframe de 3 channel, para que luego se utilice en CP10PP.
// El layout debe setearse en la variable layout del archivo config.js

import dashboardPage from "../../pages/dashboardPage";
import loginPage from "../../pages/loginPage";
import layoutPage from "../../pages/layoutPage";
import dateFormatter from "../../utils/dateFormatter";
import config from "../../utils/config";
import globalPage from "../../pages/globalPage";
import playlistPage from "../../pages/playlistPage";
import forgotPasswordPage from "../../pages/forgotPasswordPage";
import schedulePage from "../../pages/schedulePage";
import generalPage from "../../pages/generalPage";

describe('PPU-DEX', () => {
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
  it("CP09PP",  () => {
    const fechaFormateada = dateFormatter.datetime();

    cy.goToLogin(); //Comando para ir a la pagina de Login

    loginPage.loginTestemation(config); //Función login con las credencias de testermation alojadas en config.js

    dashboardPage.clickMenuPlaylist(); //click en icono playlist

    dashboardPage.clickOptionLayout(); //click en la opción de Layout

    globalPage.waitSpinner(); // Espera para el spinner
    
    cy.wait(3000);

    layoutPage.clickAddButton(); // click en "+"

    cy.wait(200);

    layoutPage.setNameLayout(config,fechaFormateada);// Estable el nombre del layout según los datos alojados en config.js y el timestamp

    layoutPage.crateLayout(config); //Funcicón para crear layout según los datos de configuración

    layoutPage.clickOverlapToggle(); //Activa el toogle para permiter superposión frame

    layoutPage.clickSaveButton(); //Clock en Guardar

    cy.log("el layout se creó con el nombre: " + config.layout); //Imprime el nombre del layout

    cy.wait(500);

    cy.screenshot({capture: 'runner'}) //Se captura el layout creado
  })

  it("CP10PP", () => {
    const fechaFormateada = dateFormatter.datetime();
    
    cy.goToLogin(); //Comando para ir a la pagina de Login

    cy.viewport(1200, 600) //Se ajusta este viewport para que se ejecute el Drag&Drop

    loginPage.loginTestemation(config); //Función login con las credencias de testermation alojadas en config.js
    
    dashboardPage.clickPlaylist(); //click en icono playlist
    
    playlistPage.clickAddButton(); //click en +

    playlistPage.clickTheaterslistButton(); //click en opcion "playlist"

    playlistPage.typesearchLayoutInput(config) // Escribe el nombre del layout alojado en config.js

    playlistPage.clickResultingLayout(); //Selecciona el layout encontrado (de encontrarlo)

    playlistPage.clickConfirmButton(); //Click en botón "confirmar"

    globalPage.waitSpinner(); //Espera del spinner

    globalPage.waitSpinner(); //Espera del spinner

    playlistPage.typeNamePlaylistInput("Playlist creada con Cypress <3 " + fechaFormateada ); //Se asigna el nombre a la PL con el timestamp de la ejecución

    
    cy.wait(100)
    playlistPage.assingMediaTochannels(config); //Carga de elementos variados alojados en config.js en los channels 1 - 3
    cy.wait(1500)
    playlistPage.clickSaveButton(); //click en "Guardar"
    globalPage.readInfoPopup('Playlist guardada!'); //se realiza un validación del pop-up Info
    cy.screenshot({capture: 'runner'}) //Se captura la PL creada 
  }) 
  it("CP13PP", () => {
    const fechaFormateada = dateFormatter.datetime();

    cy.goToLogin(); //Comando para ir a la pagina de Login

    loginPage.loginTestemation(config); //Función login con las credencias de testermation alojadas en config.js
 
    dashboardPage.clickSchedule(); // click en icono de calendario 
    
    schedulePage.clickAddButton(); // click en "+"

    schedulePage.clickSchedule(); // click en opción Calendario 

    globalPage.waitSpinner(); // espera del spinner

    schedulePage.createPeriodToday(config); // se crea un periodo del dia actual con la PL alojada en la variable calendarPL

    schedulePage.createPeriodTomowwor(config); // se crea un periodo en el futuro (mañana) con la PL alojada en la variable calendarPL

    schedulePage.typeNameScheduleInput("Calendario creado con Cypress <3 " + fechaFormateada); // se setea el nombre del calendario + el timestamp
  
    schedulePage.clickSaveButton(); // click en guardar 

    globalPage.readInfoPopup('Calendario Guardado!'); // se valida el pop-uo Info

    cy.screenshot({capture: 'runner'}); // se realiza una captura al calendario creado 
  });
  it("CP15PP", () => {

    cy.goToLogin(); //Comando para ir a la pagina de Login

    loginPage.loginTestemation(config); //Función login con las credencias de testermation alojadas en config.js
    
  
    /*
      globalPage.goToTenant(config);
     const clientName = await globalPage.readComboTenant();
 
     cy.log("CLIENTNAME=" + clientName)
     if (clientName == config.client){
       cy.log("tenant correcto");}
     else {
         cy.log("tenant incorrecto");
         cy.screenshot({capture: 'runner'}); // Captura en tenant incorrecto
         globalPage.changeTenant(config);
     }
     */
 
     cy.wait(2000);
 
     dashboardPage.clickMenuSetting();
 
     dashboardPage.clickOptionGeneral();
 
     cy.wait(1000); // espera para la captura
 
     cy.screenshot({capture: 'runner'}); // DexStore inactivo 
 
     cy.wait(1000); // espera post captura
 
     generalPage.clickToogleDS(); // Se hace click en el toogle de DEX STORE
 
     generalPage.clickBottomSave();
 
     cy.wait(500); // espera para la captura
 
     cy.screenshot({capture: 'runner'}); // DexStore activo 
   });
});