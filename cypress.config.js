const { defineConfig } = require("cypress");

module.exports = defineConfig({
  //set default config
  //this will run in case nothing else is specified
  viewportHeight:760,
  viewportHeight:700,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
