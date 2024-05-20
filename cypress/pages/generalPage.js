import {dexSettingsServer} from '../utils/shadowRootGetter'

class GeneralPagePage {
    elements = {
        toogleDS: ()=> 
            dexSettingsServer()
                .shadow().find(".toggle-button")
                .eq(0),
        bottomSave: ()=> 
            dexSettingsServer()
                .shadow().find(".saveBtn")
    }

    ///////////////////////////////////////////        ACTIONS        ///////////////////////////////////////////

    clickToogleDS(){
        this.elements.toogleDS().click(); // click en toogle de DexStore
    }

    clickBottomSave(){
        this.elements.bottomSave().click(); // click en guardar 
    }

    
    
    /////////////////////////////////////       SEQUENCE OF ACTIONS      /////////////////////////////////////

    
}

module.exports = new GeneralPagePage();