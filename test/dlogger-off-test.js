/**
  @description Tests the on/off functionality of the dlogger module.
*/
'use strict';

var dlogger = require('../lib/dlogger.js'), logger, msgque;

function updateMsgQue(msg) { msgque = msg; }

exports.on = {
  setUp: function (done) {
    // make sure msgque is empty
    msgque = null;
 
    done();
  },
  'called after being instantiated with default debug value': function (test) {
    test.expect(1);
    
    var data = 'my message', 
        expected = null, 
        actual, empty;

    logger = dlogger(empty, updateMsgQue);
    logger.off();
    logger.log(data);
    actual = msgque;

    test.equal(actual, expected, 'should not output log data');

    test.done();
  },
  'called after being instantiated with false debug value': function (test) {
    test.expect(1);
    
    var data = 'my message', 
        expected = null, actual;

    logger = dlogger(false, updateMsgQue); 
    logger.off();
    logger.log(data);
    actual = msgque;

    test.equal(actual, expected, 'should not output log data');

    test.done();
  },
  'called after being instantiated with true debug value': function (test) {
    test.expect(1);
    
    var data = 'my message', 
        expected = null, actual;

    logger = dlogger(true, updateMsgQue); 
    logger.off();
    logger.log(data);
    actual = msgque;

    test.equal(actual, expected, 'should not output log data');

    test.done();
  }
};
