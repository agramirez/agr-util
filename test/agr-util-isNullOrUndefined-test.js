'use strict';
var util = require('../lib/agr-util.js');

/** tests for the isNullOrUndefined function */
exports.isNullOrUndefined = {
  setUp: function (done) {
    done();
  },
  'no args': function (test) {
    test.expect(1);
  
    var expected = true, actual = util.isNullOrUndefined();

    test.equal(expected, actual, 'should return true');

    test.done();
  },
  'undefined value': function (test) {
    test.expect(1);

    var data, expected = true, actual = util.isNullOrUndefined(data);

    test.equal(expected, actual, 'should return true');

    test.done();
  },
  'null value': function (test) {
    test.expect(1);

    var data = null, expected = true, actual = util.isNullOrUndefined(data);

    test.equal(expected, actual, 'should return true');

    test.done();
  },
  'empty object': function (test) {
    test.expect(1);

    var data = {}, expected = false, actual = util.isNullOrUndefined(data);

    test.equal(expected, actual, 'should return false');

    test.done();
  }
};
