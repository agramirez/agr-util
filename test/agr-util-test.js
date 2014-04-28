'use strict';
var util = require('../lib/agr-util.js');

exports.isUndefined = {
  setUp: function (done) {
    done();
  },
  'no args': function (test) {
    test.expect(1);
  
    var expected = true, actual = util.isUndefined();

    test.equal(expected, actual, 'should return false');

    test.done();
  }
};
