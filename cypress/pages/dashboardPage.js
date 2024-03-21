class dashboardPage{

    elements = {
        networkIcon: ()=> 
            cy.get("[user-configured-lang='en']")
                .shadow().find("[name='master']")
                .shadow().find("#dexHeader")
                .shadow().find(".network-color")
                .shadow().find("#icon"),
        playlistIcon: ()=> 
            cy.get("[user-configured-lang='en']")
                .shadow().find("[name='master']")
                .shadow().find("#dexHeader")
                .shadow().find(".playlist-color")
                .shadow().find("#icon"),
        scheduleIcon: ()=> 
                cy.get("[user-configured-lang='en']")
                    .shadow().find("[name='master']")
                    .shadow().find("#dexHeader")
                    .shadow().find(".schedules-color")
                    .shadow().find("#icon")
    }

    clickNetwork(){
        this.elements.networkIcon().click()
    }

    clickPlaylist(){
        this.elements.playlistIcon().click()
    }

    clickSchedule(){
        this.elements.scheduleIcon().click()
    }
}

module.exports = new dashboardPage();