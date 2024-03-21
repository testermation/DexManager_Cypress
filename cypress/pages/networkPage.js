class networkPage{

    elements = {
        searchInput: ()=> 
            cy.get("[user-configured-lang='en']")
                .shadow().find("[name='master']")
                .shadow().find("[name='network']")
                .shadow().find("#dexNetworkList")
                .shadow().find(".search-input")
                .shadow().find("input"),
        resultingPlayer: ()=>
            cy.get("[user-configured-lang='en']")
            .shadow().find("[name='master']")
            .shadow().find("[name='network']")
            .shadow().find("#dexNetworkList")
            .shadow().find("[slot='0']"),
        namePLDefault: ()=>
            cy.get("[user-configured-lang='en']")
                .shadow().find("[name='master']")
                .shadow().find("[name='network']")
                .shadow().find("#dexNetworkList")
                .shadow().find("[slot='0']")
                .shadow().find("#displayDefaultPlaylist")
        
    }

    searchPlayer(machineName){
        this.elements.searchInput().click({timeout:60000}).type(machineName, {force: true})
    }
    clickResultingPlayer(){
        this.elements.resultingPlayer().click()
    }
    async getNamePLDefault(){
        return this.elements.namePLDefault().invoke('text')
    }
}

module.exports = new networkPage();