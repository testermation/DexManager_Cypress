class schedulePage{

    elements = {
        addButton: ()=> 
            cy.get("[user-configured-lang='en']")
                .shadow().find("[name='master']")
                .shadow().find("[name='schedules']")
                .shadow().find("[icon-start='add']")
                .shadow().find("#paperFab")
                .should('be.visible'),
        scheduleButton: ()=> 
            cy.get("[user-configured-lang='en']")
                .shadow().find("[name='master']")
                .shadow().find("[name='schedules']")
                .shadow().find("[icon='schedule']")
                .shadow().find("#paperFab")
                .should('be.visible'),
        nameScheduleInput: ()=>
            cy.get("[user-configured-lang='en']")
                .shadow().find("[name='master']")
                .shadow().find("[name='schedules']")
                .shadow().find("#dexScheduleDetail")
                .shadow().find(".flex.input-name")
                .shadow().find("input[autocomplete='off']")
                .should('be.visible')
                .should('not.be.disabled'),
        gridToday: ()=> 
            cy.get("[user-configured-lang='en']")
                .shadow().find("[name='master']")
                .shadow().find("[name='schedules']")
                .shadow().find("#dexScheduleDetail")
                .shadow().find("div[current-day='']"),
        playlistPeriodInput: ()=> 
            cy.get("[user-configured-lang='en']")
                .shadow().find("[name='master']")
                .shadow().find("[name='schedules']")
                .shadow().find("#dexScheduleDetail")
                .shadow().find("#playlistMenu")
                .shadow().find("#playlistMenu")
                .shadow().find("vaadin-text-field[part='text-field']")
                .shadow().find("input[role='combobox']"),
        acceptButton: ()=>
            cy.get("[user-configured-lang='en']")
                .shadow().find("[name='master']")
                .shadow().find("[name='schedules']")
                .shadow().find("#dexScheduleDetail")
                .shadow().find('paper-button[role="button"][tabindex="0"][aria-disabled="false"]').contains('Aceptar'),
        saveButton: ()=>
            cy.get("[user-configured-lang='en']")
                .shadow().find("[name='master']")
                .shadow().find("[name='schedules']")
                .shadow().find("#dexScheduleDetail")
                .shadow().find("[icon='save']")
                .shadow().find("#icon"),
        everyDaysCheckbox: ()=>
            cy.get("[user-configured-lang='en']")
                .shadow().find("[name='master']")
                .shadow().find("[name='schedules']")
                .shadow().find("#dexScheduleDetail")
                .shadow().find("#dialogAddEditPeriod")
                .find("paper-checkbox[style='margin-right: 15px; --paper-checkbox-ink-size: 48px;']")
                .should('be.visible')
    }


    clickAddButton(){
        this.elements.addButton().click()
    }

    clickSchedule(){
        this.elements.scheduleButton().click()
    }

    typeNameScheduleInput(nameSchedule){
        this.elements.nameScheduleInput().click()
        cy.wait(1000)
        this.elements.nameScheduleInput().type(nameSchedule, { force: true })
    }

    clickGridToday(){
        this.elements.gridToday().click()
    }

    typePlaylistPeriodInput(namePlaylist){
        this.elements.playlistPeriodInput().click()
        cy.wait(1000)
        this.elements.playlistPeriodInput().type(namePlaylist+"{enter}")
    }

    clickAcceptButton(){
        this.elements.acceptButton().click()
    }

    clickSaveButton(){
        this.elements.saveButton().click()
    }

    clickEveryDaysCheckbox(){
        this.elements.everyDaysCheckbox().click()
    }

    createPeriodToday(namePlaylist){
        this.clickGridToday()
        this.typePlaylistPeriodInput(namePlaylist)
        this.clickAcceptButton()
    }

}

module.exports = new schedulePage();