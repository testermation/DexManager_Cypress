
import loginPage from "../../Pages/loginPage";
import dashboardPage from "../../Pages/dashboardPage";
import networkPage from "../../pages/networkPage";
import networkDetailPage from "../../pages/networkDetailPage";

describe('Modificar PL DEFAULT de player', () => {
  
  it("CPXX", async () => {
    let newPL="";
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


    networkDetailPage.asingDefaultPL(newPL)

    networkDetailPage.clickSave(newPL)
  })
    
  });