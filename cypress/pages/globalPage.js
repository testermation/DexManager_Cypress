import {vaadinComboBox} from '../utils/shadowRootGetter'
import {dexLoader} from '../utils/shadowRootGetter'
import {dexMaster} from '../utils/shadowRootGetter'

class globalPage{

    elements = {
        comboTenant: ()=>
            vaadinComboBox()
                .shadow().find("vaadin-text-field[part='text-field']")
                .shadow().find("input[part='value']"),
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
        passwordInput: ()=> 
            dexMaster()
                .shadow().find("#password")
                .shadow().find("input[type='password']"),

    }

  ///////////////////////////////////////////        ACTIONS        ///////////////////////////////////////////
    async waitSpinner() {
        return await this.elements.spinner().should('have.css', 'display', 'none');
    }
    
    readInfoPopup(msg) {
        this.elements.infoPopup(msg);
    }

    async readComboTenant(){
        const customername = this.elements.comboTenant().invoke('val');
        cy.log(customername);
        return customername
    }
    
    typeComboTenant(client){
        cy.log("TYPE CLIENTE= " + client)
        this.elements.comboTenant().click().clear().click().type('{backspace}' + client +'{enter}', { force: true }); 
    }

    typePasswordInput(password){
        this.elements.passwordInput().click().type(password + '{enter}', { force: true });
    }

    changeTenant(config) {
        this.typeComboTenant(config.client);
        cy.wait(500);
        this.typePasswordInput(config.password);
    }
}

module.exports = new globalPage();