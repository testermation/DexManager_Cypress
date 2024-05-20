class Configuration {
    userName = "testermation";
    password = "QA!2023+";
    client = "ARG - Automatizacion QA";
    layout = "2hh 23/04/2024 21:39:01";
    ruta = "Testing/Automation/carpeta 1";
	medias = ["pandas 1.jpg", "pandas 2.jpg", "pandas 3.jpg", "pandas 4.jpg", "pandas 5.jpg"];
    frameQty = 2;
    frameOrientation =  "h";
    layoutDisposition =  "h";
    calendarPL = "solo pandas(NO MODIFICAR)";
    

    setClient(clientName) {
        this.client = clientName;
    }

    setLayout(layoutName) {
        this.layout = layoutName;
    }
}

const config = new Configuration();
export default config;