
import loginPage from "../../pages/loginPage";
import dashboardPage from "../../pages/dashboardPage";
import networkPage from "../../pages/networkPage";
import networkDetailPage from "../../pages/networkDetailPage";

describe('Modificar PL DEFAULT de player', () => {
  
  it("CPXX", async () => {
    let newPL="";
    cy.viewport(1720, 900) // Set viewport to 550px x 750px
    
    cy.visit('https://demo4.dexmanager.com/DexFrontEnd/#!/login');

    loginPage.typeUsername("testermation")

    loginPage.typePassword("QA!2023+")

    loginPage.clickLogin()
 
    dashboardPage.clickNetwork()
    
    networkPage.searchPlayer("WIN JS NOTENOOK NESTOR")
    cy.wait(1000)

    networkPage.clickResultingPlayer()
   
    let namePlaylist = await networkDetailPage.getNamePLDefault();
    
    
    cy.log("PL DEFAULT actual " + namePlaylist)

    if (namePlaylist==='SOLO MESSI') {
      newPL='solo pandas(NO MODIFICAR)';
    } else {
      newPL='SOLO MESSI';
    }
    cy.log("Nueva PL DEFAULT: " + newPL);

    
    cy.screenshot('Antes de asignar PL Nueva', {capture: 'runner'})

    networkDetailPage.asingDefaultPL(newPL)

    
    cy.screenshot('PL nueva asignada', {capture: 'runner'}) 

    networkDetailPage.clickSave(newPL)
  })
    
  });