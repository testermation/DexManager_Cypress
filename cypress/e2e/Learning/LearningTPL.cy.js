//Este learning tiene el objetivo 


//
describe('Describe TPL', () => {
  
  it("CPXX", async () => {

    cy.viewport(1720, 900) // Set viewport to 550px x 750px
    cy.visit('https://demo4.dexmanager.com/DexFrontEnd/#!/login');

    loginPage.typeUsername("testermation")

    loginPage.typePassword("QA!2023+")

    loginPage.clickLogin()
 
    globalPage.waitSpinner()

    globalPage.waitSpinner()

     //Se indica Channel y position de la media a seleccionar


  })
    
  });