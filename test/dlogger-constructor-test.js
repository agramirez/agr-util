'use strict';

var dlogger = require('../lib/dlogger.js');

exports.constructor = {
  setUp: function (done) {
    done();
  },
  'no args': function (test) {
    test.expect(5);

    var log = dlogger();
    
    test.equal('object', typeof log, 
      'object should be created');
    test.equal('object', typeof log.expose, 
      'logger should have expose method');
    test.equal(false, log.expose.getDebug(), 
      'default debug value should be false'); 
    test.equal('function', typeof log.expose.getOutput(), 
      'default output value should be a function');
    test.equal(console.log, log.expose.getOutput(), 
      'default output value should be same as console.log');

    test.done();
  },
  'first arg set to true': function (test) {
    test.expect(1);

    var data = true,
        expected = data,
        log = dlogger(data),
        actual = log.expose.getDebug();

    test.equal(expected, actual, 'should set debug to true');

    test.done();
  },
  'second arg given a special function': function (test) {
    test.expect(1);

    var data = function (message) { return message; },
        expected = data,
        actual = dlogger(true, data).expose.getOutput();

    test.equal(expected, actual, 
      'should set the output to the special function');

    test.done();
  }
};
