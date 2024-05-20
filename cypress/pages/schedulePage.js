import {dexScheduleDetail} from '../utils/shadowRootGetter'
import {dexScheduleView} from '../utils/shadowRootGetter'
class schedulePage{

    elements = {
        addButton: ()=> 
            dexScheduleView()
                .shadow().find("[icon-start='add']")
                .shadow().find("#paperFab")
                .should('be.visible'),
        scheduleButton: ()=> 
            dexScheduleView()
                .shadow().find("[icon='schedule']")
                .shadow().find("#paperFab")
                .should('be.visible'),
        nameScheduleInput: ()=>
            dexScheduleDetail()
                .shadow().find(".flex.input-name")
                .shadow().find("input[autocomplete='off']")
                .should('be.visible')
                .should('not.be.disabled'),
        grid: (diaSemana)=> 
            dexScheduleDetail()
                .shadow().find("#day-" + diaSemana),
        playlistPeriodInput: ()=> 
            dexScheduleDetail()
                .shadow().find("#playlistMenu")
                .shadow().find("#playlistMenu")
                .shadow().find("vaadin-text-field[part='text-field']")
                .shadow().find("input[role='combobox']"),
        acceptButton: ()=>
            dexScheduleDetail()
                .shadow().find('paper-button[role="button"][tabindex="0"][aria-disabled="false"]').contains('Aceptar'),
        saveButton: ()=>
            dexScheduleDetail()
                .shadow().find("[icon='save']")
                .shadow().find("#icon"),
        everyDaysCheckbox: ()=>
            dexScheduleDetail()
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
        const fechaActual = new Date();
        let diaSemana = fechaActual.getDay();    // Obtiene el día de la semana (0-6)

        diaSemana = (diaSemana + 6) % 7;         // Ajusta el número del día de la semana para que lunes sea el día 0
        this.elements.grid(diaSemana).click()
    }

    clickGridTomorrow(){
        const fechaActual = new Date();
        let diaSemana = fechaActual.getDay();    // Obtiene el día de la semana (0-6)

        diaSemana = (diaSemana + 6) % 7;         // Ajusta el número del día de la semana para que lunes sea el día 0
        if (diaSemana == 6){
            diaSemana = 0;}
        else{
            diaSemana++;
            }
        
        this.elements.grid(diaSemana).click()
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

    ////////////////////////////////////////////////////// FUNCIONES COMPUESTASPOR ACTIONS //////////////////////////////////////////////////

    createPeriodToday(config){
        this.clickGridToday()
        this.typePlaylistPeriodInput(config.calendarPL)
        this.clickAcceptButton()
    }

    createPeriodTomowwor(config){
        this.clickGridTomorrow()
        this.typePlaylistPeriodInput(config.calendarPL)
        this.clickAcceptButton()
    }

}

module.exports = new schedulePage();