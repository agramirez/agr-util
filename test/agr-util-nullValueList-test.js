'use strict';

var util = require('../lib/agr-util.js');

exports.nullValueList = {
  setUp: function (done) {
    done();
  },
  'no args': function (test) {
    test.expect(1);

    var expected = 'undefined', actual = util.nullValueList();

    test.equal(expected, typeof actual, 'should return undefined');

    test.done();
  },
  'first param undefined and second param text string': function (test) {
    test.expect(1);

    var val, data = 'some val', 
        expected = data,
        actual = util.nullValueList(val,data);

    test.equal(expected, actual, 'should return second param');

    test.done();
  },
  'first param undefined and second param array with single number': function (test) {
    test.expect(1);

    var val, data = ['some val'],
        expected = data[0],
        actual = util.nullValueList(val, data);

    test.equal(expected, actual, 'should return first value of second param');

    test.done();
  },
  'first param undefined and second param array with multiple values': function (test) {
    test.expect(1);

    var val, data = [val, val, 'some val'],
        expected = data[2],
        actual = util.nullValueList(val, data);

    test.equal(expected, actual, 'should return third value of second param');

    test.done();
  }
};
