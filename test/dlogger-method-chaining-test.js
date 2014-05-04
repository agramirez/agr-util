/**
  @description Tests method chaining functionality in the dlogger module.
               The tests apply to all methods which should return a reference
               to the instance.
*/
'use strict';

var dlogger = require('../lib/dlogger.js'), logger = dlogger();

exports.chaining = {
  setUp: function (done) {
    done();
  },
  'calling log with no args': function (test) {
    test.expect(2);

    var expected = logger, actual = logger.log();

    test.equal(actual, expected, 'returns a reference to the object');
    test.equal(logger.log, expected.log, 'can call log again');

    test.done();
  },
  'calling start with no args': function (test) {
    test.expect(2);

    var expected = logger, actual = logger.start();

    test.equal(actual, expected, 'returns a reference to the object');
    test.equal(logger.start, expected.start, 'can call start again');

    test.done();
  },
  'calling end with no args': function (test) {
    test.expect(2);

    var expected = logger, actual = logger.end();

    test.equal(actual, expected, 'returns a reference to the object');
    test.equal(logger.end, expected.end, 'can call end again');

    test.done();
  },
  'calling vals with no args': function (test) {
    test.expect(2);

    var expected = logger, actual = logger.vals();

    test.equal(actual, expected, 'returns a reference to the object');
    test.equal(logger.val, expected.val, 'can call vals again');

    test.done();
  },
  'calling on with no args': function (test) {
    test.expect(2);

    var expected = logger, actual = logger.on();

    test.equal(actual, expected, 'returns a reference to the object');
    test.equal(logger.on, expected.on, 'can call off again');

    test.done();
  },
  'calling off with no args': function (test) {
    test.expect(2);

    var expected = logger, actual = logger.vals();

    test.equal(actual, expected, 'returns a reference to the object');
    test.equal(logger.off, expected.off, 'can call off again');

    test.done();
  }
};
