describe('mi primer prueba', () => {
  
  it("CPXX" ,()=> {
    cy.visit('https://demo4.dexmanager.com/DexFrontEnd/#!/login');
  
    cy.get("[user-configured-lang='en']")
    .shadow().find("[name='login']")
    .shadow().find("#username")
    .shadow().find("input")
    .type("testermation")

    cy.get("[user-configured-lang='en']")
    .shadow().find("[name='login']")
    .shadow().find("#password")
    .shadow().find("input")
    .click().type("QA!2023+")

    cy.get("[user-configured-lang='en']")
    .shadow().find("[name='login']")
    .shadow().find(".accept-btn.login-btn")
    .click();

    cy.get("[user-configured-lang='en']")
    .shadow().find("[name='master']")
    .shadow().find("#dexHeader")
    .shadow().find(".network-color")
    .shadow().find("#icon")
    .click();


    cy.get("[user-configured-lang='en']")
    .shadow().find("[name='master']")
    .shadow().find("[name='network']")
    .shadow().find("#dexNetworkList")
    .shadow().find(".search-input")
    .shadow().find("input")
    .click({timeout:20000}).type("WIN JS NOTENOOK NESTOR")

    cy.get("[user-configured-lang='en']")
    .shadow().find("[name='master']")
    .shadow().find("[name='network']")
    .shadow().find("#dexNetworkList")
    .shadow().find("[slot='0']")
    .click()

    cy.get("[user-configured-lang='en']")
    .shadow().find("[name='master']")
    .shadow().find("[name='network']")
    .shadow().find("#dexNetworkDetail")
    .shadow().find("dex-playlist-combo")
    .shadow().find("#playlistMenu")
    .shadow().find("vaadin-text-field")
    .shadow().find("input")
    .click().clear().type("SOLO MESSI{enter}")
    
    cy.get("[user-configured-lang='en']")
    .shadow().find("[name='master']")
    .shadow().find("[name='network']")
    .shadow().find("#dexNetworkDetail")
    .shadow().find("[title='Guardar']")
    .click()

  });

});