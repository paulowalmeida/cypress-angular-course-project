const { defineConfig } = require("cypress");

module.exports = defineConfig({
  env: {
    "userName": "flavio",
    "password": "123"
  },
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    baseUrl: 'https://alura-fotos.herokuapp.com/',
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      // on('after:spec', (spec, results) => {
      //   if (results && results.spec) {
      //     // Do we have failures for any retry attempts?
      //     const failures = _.some(results.tests, (test) => {
      //       return _.some(test.attempts, { state: 'failed' })
      //     })
      //     if (!failures) {
      //       // delete the video if the spec passed and no tests retried
      //       return del(results.spec)
      //     }
      //   }
      // })
    },
  },
});
