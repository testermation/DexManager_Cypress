
import loginPage from "../pages/loginPage";
import dashboardPage from "../pages/dashboardPage";
import networkPage from "../pages/networkPage";

describe('Activar Players', () => {
  it("CPXX", () => {
    cy.fixture('codes.json').then((data) => {
      cy.log('Data received:', data);
      const players = data;
      
      cy.viewport(1720, 900);
      cy.visit('https://serverqa.dexmanager.com/DexFrontEnd/#!/login');
      loginPage.typeUsername("nandrades");
      loginPage.typePassword("N123Andrades*");
      loginPage.clickLogin();
      
      dashboardPage.clickNetwork();

      // Asumiendo que necesitas usar 'players' aquí
      players.forEach(player => {
        networkPage.clickAddButton();
        cy.wait(200);
        networkPage.clickActivatePlayerButton();
        cy.wait(200);
        networkPage.typePlayerName(player.name);
        cy.wait(200);
        networkPage.typePlayerCode(player.code);
        cy.wait(200);
        networkPage.clickSaveButton();
      });
    });
  });
});
