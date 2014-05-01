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
        key = data[v].key;
        value = data[v].value;

        // display key and value data
        log('  ' + key + ' = ' + value);
      }
    }
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

