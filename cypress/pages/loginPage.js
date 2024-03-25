import {dexLogin} from '../utils/shadowRootGetter'

class loginPage{

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
                .shadow().find(".accept-btn.login-btn")
    }

    typeUsername(username){
        this.elements.usernameInput().type(username, {force: true})
    }

    typePassword(password){
        this.elements.passwordInput().type(password, {force: true})
    }

    clickLogin(){
        this.elements.loginButton().click()
    }

}


module.exports = new loginPage();