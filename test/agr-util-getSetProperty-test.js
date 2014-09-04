'use strict';

var util = require('../lib/agr-util.js');

exports.getSetProperty = {
	setUp: function (done) {
		done();
	},
	'no args': function (test) {
		test.expect(1);
		test.throws(function () {
			util.getSetProperty();
		}, 'error when prop is not specified');
		test.done();
	},
	'valid obj, valid prop, no val': function (test) {
		var obj = {}, actual, expected;
		
		expected = undefined;
		actual = util.getSetProperty(obj, 'name');
		
		test.expect(1);
		test.throws(actual, expected, 'value should be undefined');
		test.done();
	},
	'valid obj, undefined prop, no val': function (test) {
		var obj = {};
		
		test.expect(1);
		test.throws(function () {
			util.getSetProperty(obj);
		}, 'error when prop is not specified');
		test.done();
	},
	'valid obj, null prop, no val': function (test) {
		var obj = {};
		
		test.expect(1);
		test.throws(function () {
			util.getSetProperty(obj, null);
		}, 'error when prop is not specified');
		test.done();
	},
	'valid obj, empty string prop, no val': function (test) {
		var obj = {};
		
		test.expect(1);
		test.throws(function () {
			util.getSetProperty(obj, '');
		}, 'error when prop is not specified');
		test.done();
	},
	'valid obj, whitespace prop, no val': function (test) {
		var obj = {};
		
		test.expect(1);
		test.throws(function () {
			util.getSetProperty(obj, '    ');
		}, 'error when prop is not specified');
		test.done();
	},
	'valid obj, valid property, string val': function (test) {
		var obj = {}, actual, expected, value, prop;
		
		prop = 'pname';
		value = 'data';
		expected = value;
		actual = util.getSetProperty(obj, prop, value);
		
		test.expect(3);
		test.equal(actual, expected, 'values should be the same');
		test.ok(typeof obj[prop] !== 'undefined', 'new property should exist');
		test.equal(obj[prop], value, 'object now contains the new property with the expected value');
		test.done();
	},
	'valid obj with existing property returns property value': function (test) {
		var obj = {}, actual, expected, value, prop;
		
		prop = 'pname';
		value = 'data';
		obj[prop] = value;
		expected = value;
		actual = util.getSetProperty(obj, prop);
		
		test.expect(1);
		test.equal(actual, expected, 'values should be the same');
		test.done();
	},
	'valid obj with existing property returns new property value': function (test) {
		var obj = {}, actual, expected, value, prop, newValue;
		
		prop = 'pname';
		value = 'data';
		newValue = 'not data';
		obj[prop] = value;
		expected = newValue;
		actual = util.getSetProperty(obj, prop, newValue);
		
		test.expect(1);
		test.equal(actual, expected, 'values should be the same');
		test.done();
	}
};

// test the function alias gsp
exports.gsp = {
	setUp: function (done) {
		done();
	},
	'exists': function (test) {
		test.expect(2);
		test.ok(typeof util.gsp !== 'undefined', 'gsp alias should be defined');
		test.ok(typeof util.gsp === 'function', 'gsp alias should be a function');
		test.done();
	}
};