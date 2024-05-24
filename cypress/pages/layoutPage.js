import {dexLayoutList} from '../utils/shadowRootGetter'
import {dexLayoutDetail} from '../utils/shadowRootGetter'

class layoutPage{

    elements = {
        addButton: ()=> 
            dexLayoutList()
                .shadow().find("[icon='add']")
                .shadow().find("#icon"),
        inputLayout: (indice)=> 
            dexLayoutDetail()
                .shadow().find(".number-input")
                .eq(indice)
                .shadow().find("input"),
        layout: ()=> 
            dexLayoutDetail()
                .shadow().find("#frames"),
        addFrameButton: ()=> 
            dexLayoutDetail()
                .shadow().find("[icon='add']")
                .shadow().find("#icon"),
        inputLayoutName: ()=> 
            dexLayoutDetail()
                .shadow().find(".flex.input-name")
                .shadow().find("input"),   
        saveButton: ()=> 
            dexLayoutDetail()     
                .shadow().find("[icon='save']"),
        overlapToggle: ()=> 
            dexLayoutDetail()     
                .shadow().find("#overlapToggle"),
                
        }
  ///////////////////////////////////////////        ACTIONS        ///////////////////////////////////////////
    clickAddButton(){
        this.elements.addButton().click()
    }

    clickSaveButton(){
        this.elements.saveButton().click() 
    }

    clickOverlapToggle(){
        this.elements.overlapToggle().click() 
    }

    typeInputLayout(indice,value){
        this.elements.inputLayout(indice).type("{backspace}{backspace}{backspace}{backspace}" + value, {force:true})
    }

    dblclickLayout(){
        this.elements.layout().click()
        cy.wait(100)
        this.elements.layout().click()
    }

    clickAddFrameButton(){
        this.elements.addFrameButton().click({force:true})
    }

    /////////////////////////////////////       SEQUENCE OF ACTIONS      /////////////////////////////////////


    crateLayout(Config){
        let frameQty = Config.frameQty;
        let frameOrientation =  Config.frameOrientation;
        let layoutDisposition =  Config.layoutDisposition;
        let layoutWidth = 0;
        let layoutHigh = 0;
        let frameWidth = 0;
        let frameHigh = 0;
        let positionX = 0;
        let positionY = 0;

        switch (frameOrientation + layoutDisposition) {
            case 'vv':
                frameWidth = 1080;
                frameHigh = 1920;
                layoutHigh = frameHigh  * frameQty
                layoutWidth = frameWidth 
                cy.log("Ejecutando configuración " + frameQty + frameOrientation + layoutDisposition + " y la dimensión del layout es:" + layoutWidth + 'x' + layoutHigh); 
                break;
            case 'vh':
                frameWidth = 1080;
                frameHigh =  1920;
                layoutHigh = frameHigh
                layoutWidth = frameWidth  * frameQty
                cy.log("Ejecutando configuración " + frameQty + frameOrientation + layoutDisposition + " y la dimensión del layout es:" + layoutWidth + 'x' + layoutHigh); 
                break;
            case 'hv':
                frameWidth = 1920;
                frameHigh =  1080;
                layoutHigh = frameHigh * frameQty
                layoutWidth = frameWidth  
                cy.log("Ejecutando configuración " + frameQty + frameOrientation + layoutDisposition + " y la dimensión del layout es:" + layoutWidth + 'x' + layoutHigh);
                break;
            case 'hh':
                frameWidth = 1920;
                frameHigh =  1080;
                layoutHigh = frameHigh
                layoutWidth = frameWidth * frameQty
                cy.log("Ejecutando configuración " + frameQty + frameOrientation + layoutDisposition + " y la dimensión del layout es:" + layoutWidth + 'x' + layoutHigh); 
                break;
            default:
              cy.log('Configuración no reconocida');
          }
            //Ajustar resolución del layout
            this.typeInputLayout(4,layoutWidth)
            cy.wait(100)
            this.typeInputLayout(5,layoutHigh)
            cy.wait(100)
           
            //Ajustar FRAME 1 en position (0,0) y ajustar resolución: (frameWidth x frameHigh)
            this.typeInputLayout(2,"0")
            cy.wait(100)
            this.typeInputLayout(3,"0")
            cy.wait(100)
            this.typeInputLayout(0,frameWidth)
            cy.wait(100)
            this.typeInputLayout(1,frameHigh)
            cy.wait(100)

          if (layoutDisposition==="v"){
                
            let counter = 1;

            while (counter < frameQty) {
                cy.log("Dimension del frame: " + frameWidth + "x" + frameHigh);
                cy.log("Posición del frame " + (counter +1) + ": " + positionX + "," + (positionY= counter * frameHigh))
                //Click en +
                this.clickAddFrameButton()
                //2 clicks en layout
                this.dblclickLayout()
                //Ajustar posición del frame nuevo
                this.typeInputLayout(2,positionX)
                cy.wait(100)
                this.typeInputLayout(3,(positionY= counter * frameHigh))
                cy.wait(100)
                //Ajustar dimensión del frame nuevo
                this.typeInputLayout(0,frameWidth)
                cy.wait(100)
                this.typeInputLayout(1,frameHigh)
                cy.wait(100)

                counter++;
            }


          }else{
            let counter = 1;

            while (counter < frameQty) {
                cy.log("Dimension del frame: " + frameWidth + "x" + frameHigh);
                cy.log("Posición del frame " + (counter +1) + ": " + (positionX = counter * frameWidth) + "," + positionY)
                //Click en +
                this.clickAddFrameButton()
                //2 clicks en layout
                this.dblclickLayout()
                //Ajustar posición del frame nuevo
                this.typeInputLayout(2,(positionX = counter * frameWidth))
                cy.wait(300)
                this.typeInputLayout(3,positionY)
                cy.wait(300)
                //Ajustar dimensión del frame nuevo
                this.typeInputLayout(0,frameWidth)
                cy.wait(300)
                this.typeInputLayout(1,frameHigh)
                cy.wait(300)
                
                counter++;
            }


          }
        
    }

    setNameLayout(Config,timestamp){
        let layoutName = Config.frameQty + Config.frameOrientation + Config.layoutDisposition + " " + timestamp;
        Config.setLayout(layoutName)
        this.elements.inputLayoutName().type(layoutName, {force:true})
    }
}

module.exports = new layoutPage();