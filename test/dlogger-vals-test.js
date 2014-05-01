'use strict';

var dlogger = require('../lib/dlogger.js'), logger, log;

exports.vals = {
  setUp: function (done) {
    // instantiate our log
    log = [];

    // our logger output will be placed in the log array
    // we will use this to test our output
    logger = dlogger(true, function (msg) {
      var output = {};

      // set our output properties
      output.msg = msg;
      output.time = new Date();

      // log our output
      log.push(output);
    });

    done();
  },
  'no args': function (test) {
    test.expect(1);

    var prelc, poslc;

    prelc = log.length;
    logger.vals();
    poslc = log.length;

    test.equal(prelc, poslc, 'no message was added to the log');

    test.done();
  },
  'a valid array of objects': function (test) {
    test.expect(2);

    var prelc, poslc, data, msg, expected, actual;

    // count how many messages exist in the log before we call vals
    // and setup the message and the data and expected values
    prelc = log.length;
    msg = 'no args';
    data = [{key: 'msg', value: msg}];
    expected = '  msg = ' + msg;

    // call vals and then get the value stored in the log
    logger.vals(data);
    actual = log[prelc].msg;

    // count how many messages exist in the log after we call vals
    poslc = log.length;

    // test results
    test.equal(poslc, prelc + data.length,
      'should increase the size of the log');
    test.equal(actual, expected, 
      'should log the values with the correct format');

    test.done();
  }
};
