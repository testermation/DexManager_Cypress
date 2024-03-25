import {dexNetworkDetail} from '../utils/shadowRootGetter'

class networkPage{

    elements = {
        searchInput: ()=> 
            dexNetworkDetail()
                .shadow().find(".search-input")
                .shadow().find("input"),
        resultingPlayer: ()=>
            dexNetworkDetail()
            .shadow().find("[slot='0']"),
        namePLDefault: ()=>
            dexNetworkDetail()
                .shadow().find("[slot='0']")
                .shadow().find("#displayDefaultPlaylist")
        
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
}

module.exports = new networkPage();