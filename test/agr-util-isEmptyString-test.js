'use strict';
var util = require('../lib/agr-util.js');

/** tests for the isEmptyString function */
exports.isEmptyString = {
  setUp: function (done) {
    done();
  },
  'no args': function (test) {
    test.expect(1);
  
    var expected = true, actual = util.isEmptyString();

    test.equal(expected, actual, 'should return true');

    test.done();
  },
  'undefined value': function (test) {
    test.expect(1);

    var data, expected = true, actual = util.isEmptyString(data);

    test.equal(expected, actual, 'should return true');

    test.done();
  },
  'null value': function (test) {
    test.expect(1);

    var data = null, expected = true, actual = util.isEmptyString(data);

    test.equal(expected, actual, 'should return true');

    test.done();
  },
  'empty object': function (test) {
    test.expect(1);

    var data = {};

    test.throws(function () {
      util.isEmptyString(data);
    }, 'should throw an error');

    test.done();
  },
  'object with one or more properties': function (test) {
    test.expect(1);

    var data = {
          one: 1, two: 'two', other: {val: 'object'}, 
          data: [1,2,3], weird: function (x) { return x*x; }
        };

    test.throws(function () { 
      util.IsEmptyString(data); 
    }, 'should throw error');

    test.done();
  },
  'empty string': function (test) {
    test.expect(1);

    var data = '', expected = true, actual = util.isEmptyString(data);

    test.equal(expected, actual, 'should return true');

    test.done();
  }, 
  'non empty string with one or more characters': function (test) {
    test.expect(1);

    var data = ' data ', 
        expected = false, 
        actual = util.isEmptyString(data);

    test.equal(expected, actual, 'should return false');

    test.done();
  }, 
  'whitespace string with no characters': function (test) {
    test.expect(1);

    var data = '      ', 
        expected = false, 
        actual = util.isEmptyString(data);

    test.equal(expected, actual, 'should return false');

    test.done();
  }, 
  'empty array': function (test) {
    test.expect(1);

    var data = [];

    test.throws(function () {
      util.isEmptyString(data);
    }, 'should throw error');

    test.done();
  }
};
