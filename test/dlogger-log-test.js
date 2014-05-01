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

    var expected = 'undefined', actual;

    logger.log();
    actual = logData;

    test.equal(expected, typeof actual, 'returns undefined');

    test.done();
  },
  'a single string': function (test) {
    test.expect(1);

    var data = 'some message', 
        expected = data, 
        actual;

    logger.log(data);
    actual = logData;

    test.equal(expected, actual, 'returns the value given');

    test.done();
  },
  'an object': function (test) {
    test.expect(1);

    var data = {data: 'some message'}, 
        expected = data, 
        actual;

    logger.log(data);
    actual = logData;
    
    test.equal(expected, actual, 'returns the value given');

    test.done();
  },
  'an array': function (test) {
    test.expect(1);

    var data = ['some', 'data'], 
        expected = data, 
        actual;

    logger.log(data);
    actual = logData;

    test.equal(expected, actual, 'returns the value given');

    test.done();
  },
  'a number': function (test) {
    test.expect(1);

    var data = 132, 
        expected = data, 
        actual;
    
    logger.log(data);
    actual = logData;

    test.equal(expected, actual, 'returns the value given');

    test.done();
  },
  'a boolean': function (test) {
    test.expect(1);

    var data = false, 
        expected = data, 
        actual;

    logger.log(data);
    actual = logData;

    test.equal(expected, actual, 'returns the value given');

    test.done();
  }
};
