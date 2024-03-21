class networkDetailPage{

    elements = {
        plDefaultInput: ()=> 
            cy.get("[user-configured-lang='en']")
                .shadow().find("[name='master']")
                .shadow().find("[name='network']")
                .shadow().find("#dexNetworkDetail")
                .shadow().find("dex-playlist-combo")
                .shadow().find("#playlistMenu")
                .shadow().find("#input")
                .shadow().find("input"),
        saveButton: ()=> 
            cy.get("[user-configured-lang='en']")
                .shadow().find("[name='master']")
                .shadow().find("[name='network']")
                .shadow().find("#dexNetworkDetail")
                .shadow().find("[title='Guardar']")
                
    }

    async getNamePLDefault() {
        return await this.elements.plDefaultInput().should('not.have.value', '').invoke('val');
    }

    async asingDefaultPL(newPL) {
        this.elements.plDefaultInput().clear().type(newPL + "{enter}", {force: true})
    }

    async clickSave(newPL) {
        this.elements.saveButton().click()
    }

}

module.exports = new networkDetailPage();