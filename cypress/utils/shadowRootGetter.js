//////////////////////////////////////////////////////// LOGIN ////////////////////////////////////////////////////////

export function dexApp() {
    return cy.get("[user-configured-lang='en']");
}

export function dexLogin() {
    return dexApp().shadow().find("[name='login']")
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
//////////////////////////////////////////////////////// NETWORK ////////////////////////////////////////////////////////
export function dexNetworkView() {
    return dexMaster().shadow().find("[name='network']")
}

export function dexNetworkDetail() {
    return dexNetworkView().shadow().find("#dexNetworkList")
}

