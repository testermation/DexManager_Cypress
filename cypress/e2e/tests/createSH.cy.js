
import loginPage from "../../Pages/loginPage";
import dashboardPage from "../../Pages/dashboardPage";
import schedulePage from "../../Pages/schedulePage";
import globalPage from "../../Pages/globalPage";
import dateFormatter from "../../Utils/dateFormatter";

describe('Create Scheudule', () => {
  
  it("login", async () => {
    let fechaFormateada = dateFormatter.datetime()
    cy.viewport(1720, 900) // Set viewport to 550px x 750px
    cy.visit('https://demo4.dexmanager.com/DexFrontEnd/#!/login');

    loginPage.typeUsername("testermation")

    loginPage.typePassword("QA!2023+")

    loginPage.clickLogin()
 
    dashboardPage.clickSchedule()
    
    schedulePage.clickAddButton()

    schedulePage.clickSchedule()

    globalPage.waitSpinner()

    schedulePage.createPeriodToday("solo pandas(NO MODIFICAR)")

    schedulePage.typeNameScheduleInput("Calendario creado con Cypress <3 " + fechaFormateada)
  
    //schedulePage.clickSaveButton()
  })
    
  });