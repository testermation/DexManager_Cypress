import {dexPlaylistView} from '../utils/shadowRootGetter'
import {dexComponentContainer} from '../utils/shadowRootGetter'
import {dexPlaylistTimeline} from '../utils/shadowRootGetter'
import {dexPlaylistLDetail} from '../utils/shadowRootGetter'
import {dexComponentInfo} from '../utils/shadowRootGetter'
import {dexFileTree} from '../utils/shadowRootGetter'
import {dexComponentSelector} from '../utils/shadowRootGetter'

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
            media1: (nameMedia1)=>
                dexComponentContainer()
                    .shadow().find("[title='" + nameMedia1 + "']"),
            media2: (nameMedia2)=>
                dexComponentContainer()
                    .shadow().find("[title='" + nameMedia2 + "']"),
            media3: (nameMedia3)=>
                dexComponentContainer()
                    .shadow().find("[title='" + nameMedia3 + "']"),
            media4: (nameMedia4)=>
                dexComponentContainer()
                    .shadow().find("[title='" + nameMedia4 + "']"),
            media5: (nameMedia5)=>
                dexComponentContainer()
                    .shadow().find("[title='" + nameMedia5 + "']"),
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
            searchMediaInput: ()=>
                dexComponentSelector()
                    .shadow().find("paper-input[class='flex search-input-tree']")
                    .shadow().find("input[placeholder='Búsqueda/Filtro']"),
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

        moveMediaToChannel1(channel1,nameMedia1){
            this.elements.media1(nameMedia1).click().then(elemento2 => {
                cy.wait(1000)
                this.elements.channels().eq(channel1-1).click().then((elemento3) => {
                    cy.wrap(elemento2).drag(elemento3)
                })
            })               
        }

        moveMediaToChannel2(channel2, nameMedia2){
            this.elements.media2(nameMedia2).click().then(elemento1 => {
                cy.wait(1000)
                this.elements.channels().eq(channel2-1).click().then((elemento4) => {
                    cy.wrap(elemento1).drag(elemento4)
                })
            })               
        }
        
        moveMediaToChannel3(channel, nameMedia){
            this.elements.media3(nameMedia).click().then(elemento1 => {
                cy.wait(1000)
                this.elements.channels().eq(channel-1).click().then((elemento2) => {
                    cy.wrap(elemento1).drag(elemento2)
                })
            })               
        }

        moveMediaToChannel4(channel, nameMedia){
            this.elements.media4(nameMedia).click().then(elemento1 => {
                cy.wait(1000)
                this.elements.channels().eq(channel-1).click().then((elemento2) => {
                    cy.wrap(elemento1).drag(elemento2)
                })
            })               
        }

        moveMediaToChannel5(channel, nameMedia){
            this.elements.media5(nameMedia).click().then(elemento1 => {
                cy.wait(1000)
                this.elements.channels().eq(channel-1).click().then((elemento2) => {
                    cy.wrap(elemento1).drag(elemento2)
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
        
        typeSearchMediaInput(ruta){
            this.elements.searchMediaInput().click().type(ruta + '{enter}', { force: true })
        }
        /////////////////////////////////////        FUNCIONES COMPUESTAS DE ACCIONESs       /////////////////////////////////////
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

        
        buscarRuta(ruta){
            this.typeSearchMediaInput(ruta)
        }

        ubicarSubcarpetaFinal(ruta) {
            
            if (ruta !== "") {
                const listaSubcarpetas = ruta.split("/");
                let j=listaSubcarpetas.length;
                cy.log(j)
                    
                let carpetaSR = dexFileTree()
                                    .shadow().find("dex-file-folder[tabindex='0']")
                                    .click();
        
                let i = 1;
        
                while (i <= listaSubcarpetas.length) {
                    carpetaSR = carpetaSR.shadow().find("dex-file-folder[tabindex='0']").click();
                    i++;
                }		
            }
        }
    }

    module.exports = new playlistPage();