'use strict';

var util = require('../lib/agr-util.js');

exports.duplicateObject = {
  setUp: function (done) {
    done();
  },
  'no args': function (test) {    
    test.expect(1);

    var expected = {}, actual = util.duplicateObject();

    test.deepEqual(expected, actual, 'should return empty object');  

    test.done();
  },
  'template with no overrides': function (test) {
    test.expect(3);

    var template = {sin: 'ooh', cos: 'aoh'},
        expected = template,
        override,
        actual = util.duplicateObject(template, override);

    test.equal('object', typeof actual, 'return value must be object');
    test.equal(expected.sin, actual.sin, 'sin values must be the same');
    test.equal(expected.cos, actual.cos, 'cos values must be the same');

    test.done();
  }, 
  'template with overrides': function (test) {
    test.expect(3);

    var template = {sin: 'ooh', cos: 'aoh'},
        override = {cos: 'gato'},
        expected = {sin: template.sin, cos: override.cos},
        actual = util.duplicateObject(template, override);

    test.equal('object', typeof actual, 'return value must be object');
    test.equal(expected.sin, actual.sin, 'sin values must be the same');
    test.equal(expected.cos, actual.cos, 'cos values must be the same');

    test.done();
  },
};
// test the aliases for this function
exports.alias = {
	'dupo': function (test) {
		var expected = util.duplicateObject, actual = util.dupo;
		
		test.expect(2);
		
		test.ok(actual !== null || typeof actual !== 'undefined', 'alias not found');
		test.equal(expected, actual, 'alias same as function');
		
		test.done();
	},
	'dparams': function (test) {
		var expected = util.duplicateObject, actual = util.dparams;
		
		test.expect(2);
		
		test.ok(actual !== null || typeof actual !== 'undefined', 'alias not found');
		test.equal(expected, actual, 'alias same as function');
		
		test.done();
	}
};