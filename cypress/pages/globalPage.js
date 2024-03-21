class globalPage{

    elements = {
        spinner: ()=> 
                cy.get("[user-configured-lang='en']")
                    .shadow().find("#dexloader")
                    .shadow().find("#main"),
       
    }


    async waitSpinner() {
        
        return await this.elements.spinner().should('have.css', 'display', 'none');

    }

    

}

module.exports = new globalPage();