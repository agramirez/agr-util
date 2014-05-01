'use strict';

var dlogger = require('../lib/dlogger.js'), logger, logData;

exports.log = {
  setUp: function (done) {
    // setup logger function
    logger = dlogger(true, function (msg) { 
      logData = msg;
    });
    
    done();
  },
  'no args': function (test) {
    test.expect(1);

    var expected = 'start: undefined', actual;

    logger.start();
    actual = logData;

    test.equal(actual, expected, 'returns start text with no function name');

    test.done();
  },
  'a string': function (test) {
    test.expect(1);

    var data = 'myFunctionName', 
        expected = 'start: ' + data, 
        actual;

    logger.start(data);
    actual = logData;

    test.equal(actual, expected, 'returns start text with function name');

    test.done();
  }
};
