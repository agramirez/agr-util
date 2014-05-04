/**
  @description Basic default logger for logging output.
  @module agr-util/dlogger
*/


/**
  @description Constructor for the Dlogger class.
  @param {Boolean} [debug=false] Determines if output should be rendered.
  @param {Function(msg)} [output=console.log] Function which displays output.
*/
module.exports = function (debug,output) {
  var _debug, _output, internal = {};
  
  // set the input parameters
  _debug = debug || false;
  _output = output || console.log;

  /**
    @description Logs a function start call
    @param {String} name Name of the function
  */
  function start(name) { 
    if (_debug) {
      log('start: ' + name); 
    }
  }

  /**
    @description Logs a function end call
    @param {String} name Name of the function
  */
  function end(name) {
    if (_debug) {
      log('end: ' + name);
    }
  }

  /**
    @description Display one or more values to the _output.
    @param {Array(KeyValue)} [data] This input must be an array of objects implementing a key/value pair interface.  For example: {key: 'alpha', value: 1}.
  */ 
  function vals(data) { 
    var key, value;

    if (_debug) {
      // loop through each item in the data array and display it
      for(var v in data) { 
        // get key and value data
        key = _getKey(data[v]);
        value = _getValue(data[v]);

        // display key and value data
        log('  ' + key + ' = ' + value);
      }
    }
  }

  function _getKey(val) {
    // if the object is an array then we will assume that the first
    // value in the array is the key
    if (Object.prototype.toString.call(val) === '[object Array]') {
      return val[0];
    }

    // if the value is an object and if it contains the key property
    // we will assume it follows the key/value pair interface
    // (i.e. {key: 'name', value: 'data'}
    if (typeof val === 'object' && typeof val.key !== 'undefined') {
      return val.key;
    }

    // if the value is an object we will assume it follows
    // the convention such that it contains a single property
    // with the value we want {key: 'data'}
    if (typeof val === 'object') {
      for(var p in val) {
        return p;
      }
    }

    // if nothing else worked then simply return key
    return 'key';
  }

  function _getValue(val) { 
    // if the object is an array then we will assume that the second
    // value in the array is the value we want
    if (Object.prototype.toString.call(val) === '[object Array]') {
      return val[1];
    }

    // if the value is an object and if it contains the value property
    // we will assume it follows the key/value pair interface
    // (i.e. {key: 'name', value: 'data'}
    if (typeof val === 'object' && typeof val.value !== 'undefined') {
      return val.value;
    }

    // if the value is an object we will assume it follows
    // the convention such that it contains a single property
    // with the value we want {key: 'data'}
    if (typeof val === 'object') {
      for(var p in val) {
        return val[p];
      }
    }

    // if nothing else worked we need to throw an error
    throw new Error('dlogger._getValue: could not get value');
  }

  /** 
    @description Log a message or object to the _output.
    @param {Any} msg Message or object to be logged.
  */
  function log(msg) {
    if (_debug) {
      _output(msg);
    }
  }

  // export functions
  internal.start = start;
  internal.end = end;
  internal.vals = vals;
  internal.log = log;

  // export internal methods and properties for testing
  internal.expose = {
    /** exposes the _debug variable's state */
    getDebug: function () { return _debug; },
    /** exposes the _output function's state */
    getOutput: function () { return _output; }
  };

  return internal;
};  

