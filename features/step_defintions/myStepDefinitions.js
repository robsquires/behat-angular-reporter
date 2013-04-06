
var myStepDefinitionsWrapper = function () {
  
    this.World = require("../bootstrap/world.js").World; // overwrite default World constructor

    this.Given(/^I am on the Cucumber\.js Github repository$/, function(callback) {
      // express the regexp above with the code you wish you had
      
      this
        .browser
        .init()
        .end()
      ;

    });

    this.When(/^I go to the README file$/, function(callback) {
      // express the regexp above with the code you wish you had
      callback.pending();
    });

    this.Then(/^I should see "([^"]*)" as the page title$/, function(arg1, callback) {
      // express the regexp above with the code you wish you had
      callback.pending();
    });

}

module.exports = myStepDefinitionsWrapper;