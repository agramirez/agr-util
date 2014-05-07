/** Tests for the agr-util.isFunction method */
'use strict';

var util = require('../lib/agr-util.js');

exports.isFunction = {
  setUp: function (done) {
    done();
  },
  'no args': function (test) {
    var expected, actual;

    expected = false;
    actual = util.isFunction();

    test.expect(1);
    test.equal(expected, actual, 'should return false');
    test.done();
  },
  'null value': function (test) {
    var data, expected, actual;

    data = null;
    expected = false;
    actual = util.isFunction(data);

    test.expect(1);
    test.equal(expected, actual, 'should return false');
    test.done();
  },
  'string value': function (test) {
    var data, expected, actual;

    data = 'some string';
    expected = false;
    actual = util.isFunction(data);
    
    test.expect(1);
    test.equal(expected, actual, 'should return false');
    test.done();
  },
  'array value': function (test) {
    var data, expected, actual;

    data = [1,2,3,54,55];
    expected = false;
    actual = util.isFunction(data);
    
    test.expect(1);
    test.equal(expected, actual, 'should return false');
    test.done();
  },
  'object value': function (test) {
    var data, expected, actual;

    data = {};
    expected = false;
    actual = util.isFunction(data);
    
    test.expect(1);
    test.equal(expected, actual, 'should return false');
    test.done();
  },
  'function value': function (test) {
    var data, expected, actual;

    data = function () { return this; };
    expected = true;
    actual = util.isFunction(data);
    
    test.expect(1);
    test.equal(expected, actual, 'should return true');
    test.done();
  }
};
