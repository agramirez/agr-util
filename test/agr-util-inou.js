'use strict';
var util = require('../lib/agr-util.js');

/** tests for the inou function */
exports.inou = {
  setUp: function (done) {
    done();
  },
  'no args': function (test) {
    test.expect(1);
  
    var expected = true, actual = util.inou();

    test.equal(expected, actual, 'should return true');

    test.done();
  },
  'undefined value': function (test) {
    test.expect(1);

    var data, expected = true, actual = util.inou(data);

    test.equal(expected, actual, 'should return true');

    test.done();
  },
  'null value': function (test) {
    test.expect(1);

    var data = null, expected = true, actual = util.inou(data);

    test.equal(expected, actual, 'should return true');

    test.done();
  },
  'empty object': function (test) {
    test.expect(1);

    var data = {}, expected = false, actual = util.inou(data);

    test.equal(expected, actual, 'should return false');

    test.done();
  }
};
