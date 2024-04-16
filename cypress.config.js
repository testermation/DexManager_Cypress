const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "yfxzuh",
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
      require('cypress-mochawesome-reporter/plugin')(on);
    
    },
  },
});
