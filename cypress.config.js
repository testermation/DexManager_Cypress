const { defineConfig } = require("cypress");

const mysql = require("mysql");



module.exports = defineConfig({
  projectId: "qa5ydh",
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    reportDir: "cypress/report",
    charts: true,
    reportPageTitle: 'Suit_Login_Result',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
  },
  e2e: {
    defaultCommandTimeout:15000,
    setupNodeEvents(on, config) {
      on('task', {
        queryDb: (query) =>{
          return queryTestDb(query, config)
        },
      }) // FOR RUNNIUNG SQL QUERY
    }
  },
  
});

function queryTestDb(query, config){
    const connection = mysql.createConnection({
      host: 'dexdbserver.database.windows.net',
      user: 'testing',
      password: 'B&7L9kSeh!7TrX2h',
      database: 'dexdemodb'
    });
    
    connection.connect();

    return new Promise((resolve, reject) => {
        connection.query(query, (error, result) => {
            if (error) reject(error);
            else {
                connection.end();
                return resolve(result);
            }
        });
    });
}
