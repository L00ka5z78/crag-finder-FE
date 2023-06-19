import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3000',
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },

    retries: {
      runMode: 2,
      openMode: 1,
    },
  },

  // pageLoadTimeout: 60000,
  // defaultCommandTimeout: 20000,
  chromeWebSecurity: false,

  reporter: 'cypress-mochawesome-reporter',

  reporterOptions: {
    charts: true,
    reportPageTitle: 'Samurays Team',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
  },

  video: true,
  screenshotOnRunFailure: true,
});
