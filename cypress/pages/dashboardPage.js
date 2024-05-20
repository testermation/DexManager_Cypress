import {dexHeader} from '../utils/shadowRootGetter'

class dashboardPage{

    elements = {
        networkIcon: ()=> 
            dexHeader()
                .shadow().find(".network-color")
                .shadow().find("#icon"),
        playlistIcon: ()=> 
            dexHeader()
                .shadow().find(".playlist-color")
                .shadow().find("#icon"),
        scheduleIcon: ()=> 
            dexHeader()
                .shadow().find(".schedules-color")
                .shadow().find("#icon"),
        menuPlaylist: ()=> 
            dexHeader()
                .shadow().find("[data-name='playlist']"),
        menuSetting: ()=> 
            dexHeader()
                .shadow().find("[data-name='setting']"),
        optionLayout: ()=> 
            dexHeader()
                .shadow().find("[icon='view-quilt']"),
        optionGeneral: ()=> 
            dexHeader()
              .shadow().find("[href='#!/settings/server-settings']"),
        accountMenu: ()=>   //Imagen del perfil
            dexHeader()
               .shadow().find(".header-profile-picture"),
        logout: ()=> 
            dexHeader()
              .shadow().find(".flex.account-menu-item")
              .eq(2)

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

    clickMenuPlaylist(){
        this.elements.menuPlaylist().click()
    }

    clickOptionLayout(){
        this.elements.optionLayout().click()
    }

    clickOptionGeneral(){
        this.elements.optionGeneral().click()
    }

    clickAccountMenu(){
        this.elements.accountMenu().click()
    }

    clickLogout(){
        this.elements.logout().click()
    }

    clickMenuSetting(){
        this.elements.menuSetting().click()
    }
}

module.exports = new dashboardPage();