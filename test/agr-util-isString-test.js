'use strict';
var util = require('../lib/agr-util.js');

/** tests for the isString function */
exports.isString = {
  setUp: function (done) {
    done();
  },
  'no args': function (test) {
    test.expect(1);
  
    var expected = false, actual = util.isString();

    test.equal(expected, actual, 'should return false');

    test.done();
  },
  'undefined value': function (test) {
    test.expect(1);

    var data, expected = false, actual = util.isString(data);

    test.equal(expected, actual, 'should return false');

    test.done();
  },
  'null value': function (test) {
    test.expect(1);

    var data = null, expected = false, actual = util.isString(data);

    test.equal(expected, actual, 'should return false');

    test.done();
  },
  'empty object': function (test) {
    test.expect(1);

    var data = {}, expected = false, actual = util.isString(data);

    test.equal(expected, actual, 'should return false');

    test.done();
  },
  'empty string': function (test) {
    test.expect(1);
  
    var data = '', expected = true, actual = util.isString(data);

    test.equal(expected, actual, 'should return true');

    test.done();
  }, 
  'empty array': function (test) {
    test.expect(1);
  
    var data = [], expected = false, actual = util.isString(data);

    test.equal(expected, actual, 'should return false');

    test.done();
  }
};
