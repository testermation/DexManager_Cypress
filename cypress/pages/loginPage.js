import {dexLogin} from '../utils/shadowRootGetter'
import {dexHeader} from '../utils/shadowRootGetter'

class LoginPage {
    elements = {
        usernameInput: ()=> 
            dexLogin()
                .shadow().find("#username")
                .shadow().find("input"),
        passwordInput: ()=>
            dexLogin()
                .shadow().find("#password")
                .shadow().find("input"),
        loginButton: ()=>
            dexLogin()
                .shadow().find(".accept-btn.login-btn"),
        forgotButton: ()=>
            dexLogin()
                .shadow().find(".forgot-btn.login-btn"),
        titlePage: ()=>
            dexHeader()
                .shadow().find("#pageTitle"),
        dialogPopUp: (msg)=>
            dexLogin()
                .shadow().find("#dialogMsg")
                .should('exist')
                .should('contain.text', msg)
            
    }

    ///////////////////////////////////////////        ACTIONS        ///////////////////////////////////////////

    typeUsername(username){
        this.elements.usernameInput().type(username, {force: true})
    }

    typePassword(password){
        this.elements.passwordInput().type(password, {force: true})
    }

    clickLogin(){
        this.elements.loginButton().click()
    }

    clickForgotBtn(){
        this.elements.forgotButton().click()
    }

    verifyDashboard(){
        this.elements.titlePage().should('contain', 'Dashboard')
    }

    verifyDialogError(){
        this.elements.dialogPopUp("User or password do not match.")
    }
    
    /////////////////////////////////////       SEQUENCE OF ACTIONS      /////////////////////////////////////

    loginTestemation(config){
        this.typeUsername(config.userName)
        this.typePassword(config.password)
        this.clickLogin()
        this.verifyDashboard()
    }

    loginUserWrong(config, userName){
        this.typeUsername(userName)
        this.typePassword(config.password)
        this.clickLogin()
        this.verifyDialogError()
    }

    loginPasswordWrong(config, password){
        this.typeUsername(config.userName)
        this.typePassword(password)
        this.clickLogin()
        this.verifyDialogError()
    }
}

module.exports = new LoginPage();