//////////////////////////////////////////////////////// DASHBOARD ////////////////////////////////////////////////////////

export function dexHeader() {
    return dexMaster() .shadow().find("#dexHeader")
}

//////////////////////////////////////////////////////// LAYOUT ////////////////////////////////////////////////////////

export function dexLayoutView() {
    return dexMaster().shadow().find("[name='frameset']")
}

export function dexLayoutList() {
    return dexLayoutView().shadow().find("#layoutListTag")
}

export function dexLayoutDetail() {
    return dexLayoutView().shadow().find("#layoutDetailTag")
}

//////////////////////////////////////////////////////// LOGIN ////////////////////////////////////////////////////////

export function dexApp() {
    return cy.get("[user-configured-lang='en']");
}

export function dexLogin() {
    return dexApp().shadow().find("[name='login']")
}

//////////////////////////////////////////////////////// FORGOT PASSWORD ////////////////////////////////////////////////////////

export function dexForgot() {
    return dexApp().shadow().find("[name='forgot-password']")
}


//////////////////////////////////////////////////////// PLAYLIST ////////////////////////////////////////////////////////

export function dexMaster() {
    return dexApp().shadow().find("[name='master']")
}

export function dexPlaylistView() {
    return dexMaster().shadow().find("[name='playlist']")
}

export function dexPlaylistLDetail() {
    return dexPlaylistView().shadow().find("#dexPlaylistDetail")
}

export function dexComponentSelector() {
    return dexPlaylistLDetail().shadow().find("#dexComponentSelector")
}

export function dexComponentContainer() {
    return dexComponentSelector().shadow().find("#dexComponentContainer");
}

export function dexComponentInfo() {
    return dexPlaylistLDetail().shadow().find("#dexComponentInfo")
}

export function dexPlaylistTimeline() {
    return dexPlaylistLDetail().shadow().find("#dexPlaylistTimeline")
}

export function dexFileTree() {
    return dexComponentSelector().shadow().find("#dexFileTree")
}


//////////////////////////////////////////////////////// SCHEDULE ////////////////////////////////////////////////////////
export function dexScheduleView() {
    return dexMaster().shadow().find("[name='schedules']")
}

export function dexScheduleDetail() {
    return dexScheduleView().shadow().find("#dexScheduleDetail")
}

//////////////////////////////////////////////////////// GLOBAL ////////////////////////////////////////////////////////

export function dexLoader() {
    return dexApp().shadow().find("#dexloader")
}

export function vaadinComboBox() {
    return dexHeader().shadow().find("#customerDropdown")
}



//////////////////////////////////////////////////////// NETWORK ////////////////////////////////////////////////////////

export function dexNetworkView() {
    return dexMaster().shadow().find("[name='network']")
}

export function dexNetworkList() {
    return dexNetworkView().shadow().find("#dexNetworkList")
}

//////////////////////////////////////////////////////// GENERAL ////////////////////////////////////////////////////////

export function dexSettingsView() {
    return dexMaster().shadow().find("[name='settings']")
}

export function dexSettingsServer() {
    return dexSettingsView().shadow().find("#server-settings")
}
