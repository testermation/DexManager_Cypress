class loginPage{

    elements = {
        usernameInput: ()=> 
                cy.get("[user-configured-lang='en']")
                    .shadow().find("[name='login']")
                    .shadow().find("#username")
                    .shadow().find("input"),
        passwordInput: ()=>
                cy.get("[user-configured-lang='en']")
                    .shadow().find("[name='login']")
                    .shadow().find("#password")
                    .shadow().find("input"),
            loginButton: ()=>
                cy.get("[user-configured-lang='en']")
                    .shadow().find("[name='login']")
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