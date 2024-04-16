import {dexForgot} from '../utils/shadowRootGetter'

class ForgotPasswordPage{
    elements = {
        usernameInput: ()=> 
            dexForgot()
                .shadow().find("#username")
                .shadow().find("input"),

        sendButton: ()=>
            dexForgot()
                .shadow().find(".accept-btn.login-btn"),

        dialogPopUp: (msg)=>
            dexForgot()
                .shadow().find("#dialogMsg")
                .should('exist')
                .should('contain.text', msg)
    }

    ///////////////////////////////////////////        ACTIONS        //////////////////////////////////////////

    typeUsername(username){
        this.elements.usernameInput().type(username, {force: true})
    }

    clicksendButton(){
        this.elements.sendButton().click()
    }

    readDialogPopUp(msg) {
        this.elements.dialogPopUp(msg) 
    }

    ////////////////////////////////////       SEQUENCE OF ACTIONS      /////////////////////////////////////

    forgotTertermation(config){
        this.typeUsername(config.userName)
        this.clicksendButton()
        this.readDialogPopUp("If the user is valid, you will receive an email with the instructions to follow")
    }
}

module.exports = new ForgotPasswordPage();