var wd = require('webdriverjs');

var World = function World(callback) {

  this.browser = new wd.remote({
    host: '127.0.0.1',
    port: 8910,
    desiredCapabilities:{
        browserName: 'phantomjs'
    }
  }); // this.browser will be available in step definitions

  callback(); // tell Cucumber we're finished and to use 'this' as the world instance
};
exports.World = World;