'use strict';
var util = require('../lib/agr-util.js');

/** tests for the isEmptyObject function */
exports.isEmptyObject = {
  setUp: function (done) {
    done();
  },
  'no args': function (test) {
    test.expect(1);
  
    var expected = true, actual = util.isEmptyObject();

    test.equal(expected, actual, 'should return true');

    test.done();
  },
  'undefined value': function (test) {
    test.expect(1);

    var data, expected = true, actual = util.isEmptyObject(data);

    test.equal(expected, actual, 'should return true');

    test.done();
  },
  'null value': function (test) {
    test.expect(1);

    var data = null, expected = true, actual = util.isEmptyObject(data);

    test.equal(expected, actual, 'should return true');

    test.done();
  },
  'empty object': function (test) {
    test.expect(1);

    var data = {}, expected = true, actual = util.isEmptyObject(data);

    test.equal(expected, actual, 'should return true');

    test.done();
  },
  'object with one or more properties': function (test) {
    test.expect(1);

    var data = {
          one: 1, two: 'two', other: {val: 'object'}, 
          data: [1,2,3], weird: function (x) { return x*x; }
        },
        expected = false,
        actual = util.isEmptyObject(data);

    test.equal(expected, actual, 'should return false');

    test.done();
  },
  'empty string': function (test) {
    test.expect(1);

    var data = '';

    test.throws(function () { 
      util.IsEmptyObject(data); 
    }, 'should throw error');

    test.done();
  }, 
  'empty array': function (test) {
    test.expect(1);

    var data = [];

    test.throws(function () {
      util.isEmptyObject(data);
    }, 'should throw error');

    test.done();
  }
};
