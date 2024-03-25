import {dexMaster} from "../utils/shadowRootGetter"
import {dexLoader} from "../utils/shadowRootGetter"
class globalPage{

    elements = {
        spinner: ()=> 
            dexLoader()
                .shadow().find("#main"),
        errorPopup: ()=>
            dexMaster()
                .shadow().find("#errorToast")
                .shadow().find("#label")
                .should('be.visible'),
        infoPopup: (msg)=>
            dexMaster()
                .shadow().find("#infoToast")
                .shadow().find("#label")
                .should('exist')
                .should('contain.text', msg),
        warnPopup: ()=>
            dexMaster()
                .shadow().find("#warnToast")
                .should('be.visible'),
    }


    async waitSpinner() {
        
        return await this.elements.spinner().should('have.css', 'display', 'none');

    }
    
    readInfoPopup(msg) {
        this.elements.infoPopup(msg) 
    }
    

}

module.exports = new globalPage();