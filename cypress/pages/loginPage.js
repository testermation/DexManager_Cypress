import {dexLogin} from '../utils/shadowRootGetter'

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
                .shadow().find(".forgot-btn.login-btn")
            
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

    /////////////////////////////////////       SEQUENCE OF ACTIONS      /////////////////////////////////////

    loginTestemation(config){
        this.typeUsername(config.userName)
        this.typePassword(config.password)
        this.clickLogin()
    }

    loginUserWrong(config, userName){
        this.typeUsername(userName)
        this.typePassword(config.password)
        this.clickLogin()
    }

    loginPasswordWrong(config, password){
        this.typeUsername(config.userName)
        this.typePassword(password)
        this.clickLogin()
    }
}

module.exports = new LoginPage();