import {dexNetworkList} from '../utils/shadowRootGetter'

class networkPage{

    elements = {
        searchInput: ()=> 
            dexNetworkList()
                .shadow().find(".search-input")
                .shadow().find("input"),
        resultingPlayer: ()=>
            dexNetworkList()
            .shadow().find("[slot='0']"),
        namePLDefault: ()=>
            dexNetworkList()
                .shadow().find("[slot='0']")
                .shadow().find("#displayDefaultPlaylist"),
        addButton: ()=> 
            dexNetworkList()
                .shadow().find("[icon-start='add']")
                .shadow().find("#paperFab")
                .should('be.visible'),
        activatePlayerButton: ()=> 
            dexNetworkList()       
                .shadow().find("[icon='device:devices']")
                .shadow().find("#paperFab")
                .should('be.visible'),
        inputDialogNamePlayer: ()=> 
            dexNetworkList()       
                .shadow().find("paper-input[aria-disabled='false']")
                .eq(1)
                .shadow().find("input")
                .should('be.visible'),
        inputDialogCodePlayer: ()=> 
            dexNetworkList()       
                .shadow().find("paper-input[aria-disabled='false']")
                .eq(2)
                .shadow().find("input")
                .should('be.visible'),
        saveButtonDialogCodePlayer: ()=> 
            dexNetworkList()       
                .shadow().find("paper-button[role='button']")
                .eq(1)
                .should('be.visible')
        
    }

    searchPlayer(machineName){
        this.elements.searchInput().click({timeout:40000}).type(machineName, {force: true})
    }

    clickResultingPlayer(){
        this.elements.resultingPlayer().click()
    }
    async getNamePLDefault(){
        return this.elements.namePLDefault().invoke('text')
    }

    typePlayerName(machineName){
        this.elements.inputDialogNamePlayer().click({timeout:10000}).type(machineName, {force: true})
    }

    typePlayerCode(code){
        this.elements.inputDialogCodePlayer().click({timeout:1000}).type(code, {force: true})
    }

    clickSaveButton(){
        this.elements.saveButtonDialogCodePlayer().click()
    } 

    clickAddButton(){
        this.elements.addButton().click()
    }

    clickActivatePlayerButton(){
        this.elements.activatePlayerButton().click()
    }

    clickResultingPlayer(){
        this.elements.resultingPlayer().click()
    }

}

module.exports = new networkPage();