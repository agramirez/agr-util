'use strict';

var util = require('../lib/agr-util.js');

exports.inoe = {
  setUp: function (done) {
    done();
  },
  'no args': function (test) {
    test.expect(1);
  
    var expected = true, actual = util.inoe();

    test.equal(expected, actual, 'should return true');

    test.done();
  },
  'null object': function (test) {
    test.expect(1);
  
    var data = null, expected = true, actual = util.inoe(data);

    test.equal(expected, actual, 'should return true');

    test.done();
  },
  'undefined value': function (test) {
    test.expect(1);
  
    var data, expected = true, actual = util.inoe(data);

    test.equal(expected, actual, 'should return true');

    test.done();
  },
  'empty object': function (test) {
    test.expect(1);
  
    var data = {}, expected = true, actual = util.inoe(data);

    test.equal(expected, actual, 'should return true');

    test.done();
  },
  'empty array': function (test) {
    test.expect(1);
  
    var data = [], expected = true, actual = util.inoe(data);

    test.equal(expected, actual, 'should return true');

    test.done();
  },
  'empty string': function (test) {
    test.expect(1);
  
    var data = '', expected = true, actual = util.inoe(data);

    test.equal(expected, actual, 'should return true');

    test.done();
  },
  'string with 5 whitespaces and no characters': function (test) {
    test.expect(1);
  
    var data = '     ', 
        expected = false, 
        actual = util.inoe(data);

    test.equal(expected, actual, 'should return false');

    test.done();
  },
  'object with two properties': function (test) {
    test.expect(1);
  
    var data = {one: 1, two: 2}, 
        expected = false, 
        actual = util.inoe(data);

    test.equal(expected, actual, 'should return false');

    test.done();
  },
  'array with three values': function (test) {
    test.expect(1);
  
    var data = [1,2,3], 
        expected = false, 
        actual = util.inoe(data);

    test.equal(expected, actual, 'should return false');

    test.done();
  },
  'string with five characters': function (test) {
    test.expect(1);
  
    var data = 'fives',
        expected = false, 
        actual = util.inoe(data);

    test.equal(expected, actual, 'should return false');

    test.done();
  }
};
