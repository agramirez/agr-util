'use strict';
var util = require('../lib/agr-util.js');

/** tests for the isEmptyArray function */
exports.isEmptyArray = {
  setUp: function (done) {
    done();
  },
  'no args': function (test) {
    test.expect(1);
  
    var expected = true, actual = util.isEmptyArray();

    test.equal(expected, actual, 'should return true');

    test.done();
  },
  'undefined value': function (test) {
    test.expect(1);

    var data, expected = true, actual = util.isEmptyArray(data);

    test.equal(expected, actual, 'should return true');

    test.done();
  },
  'null value': function (test) {
    test.expect(1);

    var data = null, expected = true, actual = util.isEmptyArray(data);

    test.equal(expected, actual, 'should return true');

    test.done();
  },
  'empty array': function (test) {
    test.expect(1);

    var data = [], expected = true, actual = util.isEmptyArray(data);

    test.equal(expected, actual, 'should return true');

    test.done();
  },
  'array of numbers': function (test) {
    test.expect(1);

    var data = [1,2,3,4,5,6],
        expected = false,
        actual = util.isEmptyArray(data);

    test.equal(expected, actual, 'should return false');

    test.done();
  },
  'array of arrays': function (test) {
    test.expect(1);

    var data = [[1,2],[3,4],[5,6,7,8]],
        expected = false,
        actual = util.isEmptyArray(data);

    test.equal(expected, actual, 'should return false');

    test.done();
  },
  'array of strings': function (test) {
    test.expect(1);

    var data = ['1','2','3'],
        expected = false,
        actual = util.isEmptyArray(data);

    test.equal(expected, actual, 'should return false');

    test.done();
  },
  'array of objects': function (test) {
    test.expect(1);

    var data = [{one:1}, {two: 2}, {three: 3}],
        expected = false,
        actual = util.isEmptyArray(data);

    test.equal(expected, actual, 'should return false');

    test.done();
  },
  'object with one or more properties': function (test) {
    test.expect(1);

    var data = {
          one: 1, two: 'two', other: {val: 'object'}, 
          data: [1,2,3], weird: function (x) { return x*x; }
        };

    test.throws(function () {
      util.isEmptyArray(data);
    }, 'should throw an error');

    test.done();
  },
  'empty string': function (test) {
    test.expect(1);

    var data = '';

    test.throws(function () { 
      util.IsEmptyArray(data); 
    }, 'should throw error');

    test.done();
  }, 
  'empty object': function (test) {
    test.expect(1);

    var data = {};

    test.throws(function () {
      util.isEmptyArray(data);
    }, 'should throw error');

    test.done();
  }
};
