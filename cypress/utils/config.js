class Configuration {
    userName = "testermation"
    password = "QA!2023+"
    client = ""

    setClient(value) {
        this.client = value;
    }
}

const config = new Configuration();
export default config;