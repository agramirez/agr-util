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

    var expected = 'end: undefined', actual;

    logger.end();
    actual = logData;

    test.equal(actual, expected, 'returns end text with no function name');

    test.done();
  },
  'a string': function (test) {
    test.expect(1);

    var data = 'myFunctionName', 
        expected = 'end: ' + data, 
        actual;

    logger.end(data);
    actual = logData;

    test.equal(actual, expected, 'returns end text with function name');

    test.done();
  }
};
