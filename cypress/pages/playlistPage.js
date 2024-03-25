import {dexPlaylistView} from '../utils/shadowRootGetter'
import {dexComponentContainer} from '../utils/shadowRootGetter'
import {dexPlaylistTimeline} from '../utils/shadowRootGetter'
import {dexPlaylistLDetail} from '../utils/shadowRootGetter'
import {dexComponentInfo} from '../utils/shadowRootGetter'
class playlistPage{


   
    /////////////////////////////////////        ELEMENTOS        /////////////////////////////////////
        elements = {
            addButton: ()=> 
                dexPlaylistView()
                    .shadow().find("[icon-start='add']")
                    .shadow().find("#paperFab")
                    .should('be.visible'),
            theaterslistButton: ()=> 
                dexPlaylistView()       
                    .shadow().find("[icon='theaters']")
                    .shadow().find("#paperFab")
                    .should('be.visible'),
            searchLayoutInput: ()=> 
                dexPlaylistView()
                    .shadow().find("#searchLayout")
                    .shadow().find("input"),
            resultingLayout: ()=> 
                dexPlaylistView()  
                    .shadow().find("#layout-141"),
            confirmButton: ()=> 
                dexPlaylistView()
                    .shadow().find("[dialog-confirm='']")
                    .eq(0),
            mediaCards: ()=> 
                dexComponentContainer()
                    .shadow().find(".media-card.paper-material"),
            mediaQuiosque: ()=>
                dexComponentContainer()
                    .shadow().find("[title='BR_Quiosque_V_MCFLURRY_Kitkat_Ovomaltine_MyM.jpg']"),
            mediaAxion: ()=>
                dexComponentContainer()
                    .shadow().find("[title='Cartel AXION Energy PRUEBA1 (2).jpg']"),
            mediaBurguer54: ()=>
                dexComponentContainer()
                    .shadow().find("[title='dex-burger54-multi-arg-red-21.02.2500.wgt']"),
            mediaDescuentos: ()=>
                dexComponentContainer()
                    .shadow().find("[title='Descuentos 1 hasta 9 ago.mp4']"),
            mediaQuiosqueJson: ()=>
                dexComponentContainer()
                    .shadow().find("[title='BR_Quiosque_V_MCFLURRY_Kitkat_Ovomaltine_MyM--2 (1).json']"),
            channels: ()=>
                dexPlaylistTimeline()
                    .shadow().find(".horizontal.layout.flex.media-container"),
            namePlaylistInput: ()=>
                dexPlaylistLDetail()
                    .shadow().find(".flex.input-name")
                    .shadow().find("input[placeholder='Nombre de la Playlist']")
                    .should('be.visible').should('not.be.disabled'),
            condicionalTab: ()=>
                dexComponentInfo()
                    .shadow().find("[data-name='conditional']")
                    .eq(0),
            everyDaysCheckbox: ()=>
                dexComponentInfo()
                    .shadow().find(".flex.day-checkbox")
                    .eq(0),
            fromDateInput: ()=>
                dexComponentInfo()
                    .shadow().find('dex-date-picker.flex.input')
                    .eq(0)
                    .shadow().find("paper-input[aria-disabled='false']"),
            toDateInput: ()=>
                dexComponentInfo()
                    .shadow().find('dex-date-picker.flex.input')
                    .eq(1)
                    .shadow().find("paper-input[aria-disabled='false']"),
            fromHourInput: ()=>
                dexComponentInfo()
                    .shadow().find('paper-input.flex.input')
                    .eq(0)
                    .shadow().find("input[autocomplete='off']"),
            toHourInput: ()=>
                dexComponentInfo()
                    .shadow().find('paper-input.flex.input')
                    .eq(1)
                    .shadow().find("input[autocomplete='off']"),
            fromHourRecurenceInput: ()=>
                dexComponentInfo()
                    .shadow().find('paper-input.flex.input')
                    .eq(2)
                    .shadow().find("input[autocomplete='off']"),
            toHourRecurenceInput: ()=>
                dexComponentInfo()
                    .shadow().find('paper-input.flex.input')
                    .eq(3)
                    .shadow().find("input[autocomplete='off']"),           
            todayButtonFrom: ()=>
                dexComponentInfo()
                    .shadow().find('dex-date-picker.flex.input')
                    .eq(0)
                    .shadow().find('div[today=""]'), 
            todayButtonTo: ()=>
                dexComponentInfo()
                    .shadow().find('dex-date-picker.flex.input')
                    .eq(1)
                    .shadow().find('div[today=""]'), 
            inclusionTagInput: ()=>
                dexComponentInfo()
                    .shadow().find("#inclusionInput")
                    .shadow().find("#tagInput")
                    .shadow().find("#input")
                    .shadow().find("input[aria-labelledby='vaadin-text-field-input-2']"),
            exclusionTagInput: ()=>
                dexComponentInfo()
                    .shadow().find("#exclusionInput")
                    .shadow().find("#tagInput")
                    .shadow().find("#input")
                    .shadow().find("input[aria-labelledby='vaadin-text-field-input-3']"),
            saveButton: ()=>
                dexPlaylistLDetail()
                    .shadow().find("[icon='save']"),
            mediaInchannelInPosition: (cp)=>
                dexPlaylistTimeline()
                    .shadow().find("div[data-id='"+ cp + "'"),
        }
       
        /////////////////////////////////////        ACCIONS        /////////////////////////////////////
        clickAddButton(){
            this.elements.addButton().click()
        }
    
        clickTheaterslistButton(){
            this.elements.theaterslistButton().click()
        }
    
        typesearchLayoutInput(layout){
            this.elements.searchLayoutInput().type(layout, {force:true})
        }
    
        clickResultingLayout(){
            this.elements.resultingLayout().click()
        }
    
        clickConfirmButton(){
            this.elements.confirmButton().click()
            this.elements.mediaCards().its('length').should('be.gt', 0) //Espera implicita para la carga de Media en el contenedor
        }
    
        clickMediaQuiosque(){
           // cy.get(this.elements.mediaCards().eq(1).click())
           this.elements.mediaQuiosque().click()
        }
        
        moveMediaToChannel1(){
            this.elements.mediaQuiosque().then($elemento => {
                
                const elementoDOM = $elemento; 
                this.elements.channels().eq(0).then($elemento1 => {
                
                    const elemento1DOM = $elemento1;
    
                    cy.wrap(elementoDOM).drag(elemento1DOM)
                })
         })
        }
    
        moveMediaToChannel2(){
            this.elements.mediaAxion().then($elemento2 => {
                
                const elemento2DOM = $elemento2; 
                this.elements.channels().eq(1).then($elemento3 => {
                
                    const elemento3DOM = $elemento3;
    
                    cy.wrap(elemento2DOM).drag(elemento3DOM)
                })
         })               
        }
    
        moveMediaToChannel3(){
            this.elements.mediaBurguer54().then($elemento2 => {
                
                const elemento2DOM = $elemento2; 
                this.elements.channels().eq(2).then($elemento3 => {
                
                    const elemento3DOM = $elemento3;
    
                    cy.wrap(elemento2DOM).drag(elemento3DOM)
                })
         })               
        }
    
        moveMediaToChannel4(){
            this.elements.mediaDescuentos().then($elemento2 => {
                
                const elemento2DOM = $elemento2; 
                this.elements.channels().eq(3).then($elemento3 => {
                
                    const elemento3DOM = $elemento3;
    
                    cy.wrap(elemento2DOM).drag(elemento3DOM)
                })
         })               
        }
    
        moveMediaToChannel5(){
            this.elements.mediaQuiosqueJson().then($elemento2 => {
                
                const elemento2DOM = $elemento2; 
                this.elements.channels().eq(4).then($elemento3 => {
                
                    const elemento3DOM = $elemento3;
    
                    cy.wrap(elemento2DOM).drag(elemento3DOM)
                })
         })               
        }
        
        typeNamePlaylistInput(namePlaylist){
            this.elements.namePlaylistInput().click()
            cy.wait(1000)
            this.elements.namePlaylistInput().type(namePlaylist, { force: true })
        }
    
        clickSaveButton(){
            //Crear assertion para asegurar que todos los channels tienen media
            this.elements.saveButton().click() 
        }
    
        clickCondicionalTab(){
            this.elements.condicionalTab().click({force:true})
        }
    
        clickMediaQuiosqueInchannel(){
            this.elements.mediaQuiosqueInchannel().click()
        }
    
        clickMediaAxionInchannel(){
            this.elements.mediaAxionInchannel().click()
        }
    
        clickMediaBurguer54Inchannel(){
            this.elements.mediaBurguer54Inchannel().click()
        }
    
        clickMediaDescuentosInchannel(){
            this.elements.mediaDescuentosInchannel().click()
        }
    
        clickMediaQuiosqueJsonInchannel(){
            this.elements.mediaQuiosqueJsonInchannel().click()
        }
    
        clickMediaInchannelInPosition(c,p){
            p= p -1 //position internamente es un arreglo que inicia en 0. Por tanto, restamos uno para que la selección sea correcta
            let cp = c + "-" + p  //creamos el string "c-p" que luego será utilziado por el comando cy.get
            this.elements.mediaInchannelInPosition(cp).click() //Convocamos la función Cy.get para localizar la media en el canal que se quiere 
        }
    
        clickEveryDaysCheckbox(){
            this.elements.everyDaysCheckbox().click()
        }
    
        clickFromDateInput(){
            this.elements.fromDateInput().click()
        }
    
        clickToDateInput(){
            this.elements.toDateInput().click()
        }
    
        clickTodayButtonFrom(){
            this.elements.todayButtonFrom().click()
        }
    
        clickTodayButtonTo(){
            this.elements.todayButtonTo().click()
        }
    
        typeFromHourInput(from){
            this.elements.fromHourInput().click().type(from)
        }
    
        typeToHourInput(to){
            this.elements.toHourInput().click().type(to)
        }
    
        typeFromHourRecurenceInput(from){
            this.elements.fromHourRecurenceInput().click().type(from)
        }
    
        typeToHourRecurenceInput(to){
            this.elements.toHourRecurenceInput().click().type(to)
        }
    
        assingInclusionTagInput(tag){
            this.elements.inclusionTagInput().click().type(tag+'{enter}')
        }
    
        assingExclusionTagInput(tag){
            this.elements.exclusionTagInput().click().type(tag+'{enter}')
        }
    
        /////////////////////////////////////        FUNCIONES DE CONDICIONALES        /////////////////////////////////////
        assingCondEveryDays(){
            this.clickMediaInchannelInPosition(1,1)
            this.clickCondicionalTab()
            this.clickEveryDaysCheckbox()
        }
    
        assingCondDateFromTo(from,to){
            this.clickMediaInchannelInPosition(3,1)
            this.clickCondicionalTab()
            this.typeFromHourInput(from)
            cy.wait(1000)
            this.typeToHourInput(to)
            this.clickFromDateInput()
            cy.wait(1000)
            this.clickTodayButtonFrom()
            cy.wait(2000)
            this.clickToDateInput()
            cy.wait(1000)
            this.clickTodayButtonTo()
        }
    
        assingCondRecurrence(from,to){
            this.clickMediaInchannelInPosition(2,1)
            this.clickCondicionalTab()
            this.typeFromHourRecurenceInput(from)
            cy.wait(1000)
            this.typeToHourRecurenceInput(to)
        }
        assingCondInclusionTag(tag){
            this.clickMediaInchannelInPosition(3,1)
            this.clickCondicionalTab()
            this.assingInclusionTagInput(tag)  
        }
        assingCondExclusionTag(tag){
            this.clickMediaInchannelInPosition(4,1)
            this.clickCondicionalTab()
            this.assingExclusionTagInput(tag)
        }
       
    }

    module.exports = new playlistPage();