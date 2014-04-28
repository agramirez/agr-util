'use strict';
var util = require('../lib/agr-util.js');

/** tests for the isUndefined function */
exports.isUndefined = {
  setUp: function (done) {
    done();
  },
  'no args': function (test) {
    test.expect(1);
  
    var expected = true, actual = util.isUndefined();

    test.equal(expected, actual, 'should return true');

    test.done();
  },
  'undefined value': function (test) {
    test.expect(1);

    var data, expected = true, actual = util.isUndefined(data);

    test.equal(expected, actual, 'should return true');

    test.done();
  },
  'null value': function (test) {
    test.expect(1);

    var data = null, expected = false, actual = util.isUndefined(data);

    test.equal(expected, actual, 'should return false');

    test.done();
  },
  'empty object': function (test) {
    test.expect(1);

    var data = {}, expected = false, actual = util.isUndefined(data);

    test.equal(expected, actual, 'should return false');

    test.done();
  }
};

/** tests for the isNull function */
exports.isNull = {
  setUp: function (done) {
    done();
  },
  'no args': function (test) {
    test.expect(1);
  
    var expected = false, actual = util.isNull();

    test.equal(expected, actual, 'should return false');

    test.done();
  },
  'undefined value': function (test) {
    test.expect(1);

    var data, expected = false, actual = util.isNull(data);

    test.equal(expected, actual, 'should return false');

    test.done();
  },
  'null value': function (test) {
    test.expect(1);

    var data = null, expected = true, actual = util.isNull(data);

    test.equal(expected, actual, 'should return true');

    test.done();
  },
  'empty object': function (test) {
    test.expect(1);

    var data = {}, expected = false, actual = util.isNull(data);

    test.equal(expected, actual, 'should return false');

    test.done();
  }
};

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
