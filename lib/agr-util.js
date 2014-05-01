/** 
  @description This module contains a bunch of useful functions for doing various things such as type checking, null value defaults, etc.  It is intended to provide usefull building blocks and common functionality for larger projects and libraries.
  @author      Alex Ramirez
  @module      util
*/

var _debug = false, 
    _logger,
    _dlogger = require('./dlogger.js');

/**
*/
function debugOn(logger) {
  _debug = true;
  _logger = logger || new _dlogger(_debug);
}

/**
*/
function debugOff() {
  _debug = false;
}

/** 
  @description  Checks a value to determine if it is undefined.
  @param        {Any}     val Value to check.  Can be any valid JavaScript.
  @returns      {Boolean} True if the value is undefined, false otherwise.
  @author       Alex Ramirez
*/
function isUndefined(val) {
  var u;

  // check if the value is undefined
  if (typeof val === typeof u) { return true; }

  return false;
}

/** 
  @description  Checks a value to determine if it is null.
  @param        {Any}     val Value to check.  Can be any valid JavaScript.
  @returns      {Boolean} True if the value is null, false otherwise.
  @author       Alex Ramirez
*/
function isNull(val) {
  return (val === null);
}

/** 
  @description  Checks a value to determine if it is null or undefined.
  @param        {Any}     val Value to check.  Can be any valid JavaScript.
  @returns      {Boolean} True if the value is null or undefined, false 
                          otherwise.
  @author       Alex Ramirez
*/
function isNullOrUndefined(val) {
  // check if the value is undefined or null
  if (isUndefined(val) || isNull(val)) { return true; }

  // value is not null or undefined
  return false;
}

/** 
  @description  Checks an object to determine if it is empty.  In this case
                empty means that the object has no properties or any value
                (i.e. val = {}).  A null or undefined value will also be treated
                as empty.
  @param        {Object}  val Value to check.  Must be an Object type.
  @returns      {Boolean} True if the object is empty, false otherwise.
  @throws       {Error}   When the value is not an Object.
  @author       Alex Ramirez
*/
function isEmptyObject(val) {
  // make sure the input is an object
  if (isNullOrUndefined(val)) {
    return true;
  }

  // throw an error if the value is not an object
  if (!isObject(val) || isArray(val)) {
    throw new Error('isEmptyObject: value specified is not an Object.');
  }

  // check if there are any properties in the object
  var count = 0;
  for(var p in val) {
    if (!isNullOrEmpty(p)) {
      count++;
    }
  }

  return (count === 0);
}

/** 
  @description  Checks an array to determine if it is empty.  In this case
                empty means that the array has no values (i.e. its length is 0).
                A null or undefined value will also be treated as empty.
  @param        {Array}   val Value to check.  Must be an Array type.
  @returns      {Boolean} True if the array is empty, false otherwise.
  @throws       {Error}   When the value is not an Array.
  @author       Alex Ramirez
*/
function isEmptyArray(val) {
  // throw an error if the value is not an array and is NOT null or empty
  if (!isArray(val) && !isNullOrUndefined(val)) {
    throw new Error('isEmptyArray: value is not an array.');
  }

  // check for values
  if (isNullOrUndefined(val)) {
    return true;
  }

  return (val.length === 0);
}

/** 
  @description  Checks a string to determine if it is empty.  In this case
                empty means that the string has no characters, including white-
                space.  A null or undefined value will also be treated as empty.
  @param        {String}  val Value to check.  Must be a String type.
  @returns      {Boolean} True if the string is empty, false otherwise.
  @throws       {Error}   When the value is not a String.
  @author       Alex Ramirez
*/
function isEmptyString(val) {
  // throw an error if the value is not a string and is NOT null or empty
  if (!isString(val) && !isNullOrUndefined(val)) {
    throw new Error('isEmptyString: vaue is not a string.');
  }

  if (isNullOrUndefined(val)) {
    return true;
  }

  return (val.length === 0);
}

/** 
  @description  Checks a value to determine if it is null or empty.  This method
                works on any valid JavaScript object.  For strings empty means
                null, undefined, or ''.  For arrays empty means null, undefined,
                or [].  For objects empty means null, undefined, or {}.
  @param        {Any}     val Value to check.
  @returns      {Boolean} True if the value is null, undefined, or empty.  
                          False otherwise.
  @author       Alex Ramirez
*/
function isNullOrEmpty(val) {
  // check if it's an empty array, note that we need to run this check before
  // we run the check for an empty object, this is necessary because arrays are 
  // objects, but testing for an empty array is not the same as for an object
  if (isArray(val)) {
    return isEmptyArray(val);
  }

  // check if it's an empty string
  if (isString(val)) {
    return isEmptyString(val);
  }

  // check if it's an empty object
  if (isObject(val)) {
    return isEmptyObject(val);
  }

  // if all else fails test for null or undefined value
  return isNullOrUndefined(val);
}

/** 
  @description  Checks a value to determine if it is null or empty.  This method
                works on any valid JavaScript object.  For strings empty means
                null, undefined, '', or a string consisting only of whitespace.                 For arrays empty means null, undefined, or [].  For objects 
                empty means null, undefined, or {}.  This method works on any
                object, but it is most useful for strings.
  @param        {Any}     val Value to check.
  @returns      {Boolean} True if the value is null, undefined, empty, or 
                          whitespace.  False otherwise.
  @author       Alex Ramirez
*/
function isNullOrWhitespace(val) {
  // if it is null or empty return true
  if (isNullOrEmpty(val)) {
    return true;
  }

  // check if it's a string
  if (!isString(val)) {
    // since it's not a string and it's not null or empty, return false
    return false;
  }

  // trim the string and test for string length
  return (val.trim().length === 0 && val.trim() === '');
}

/** 
  @description  Checks a value to determine if it is an object.
  @param        {Any}     val Value to check.
  @returns      {Boolean} True if the value is an object, false otherwise.
  @author       Alex Ramirez
*/
function isObject(val) {
  return (typeof val === typeof {});
}

/** 
  @description  Checks a value to determine if it is an array.
  @param        {Any}     val Value to check.
  @returns      {Boolean} True if the value is an array, false otherwise.
  @author       Alex Ramirez
*/
function isArray(val) {
  return (Object.prototype.toString.call(val) === '[object Array]');
}

/** 
  @description  Checks a value to determine if it is a string.
  @param        {Any}     val Value to check.
  @returns      {Boolean} True if the value is a string, false otherwise.
  @author       Alex Ramirez
*/
function isString(val) {
  return (typeof val === typeof '');
}

/** 
  @description Used to return a non-null value.  Similar to the NVL function in
               oracle or the coalesce function in ms sql.  Returns the first 
               non-null value from the available choices.  Note that the vals
               param can be an array of possible values to return.  If the value
               that should be returned is an array, and not a value inside the
               array, then the original array to return must be placed within
               an array wrapper.  If this is not done the function will think 
               that it must return a value within the array and not the array
               itself.
  @param       {Any} val  Value to be checked. It is returned if not null.
  @param       {Any} vals Value or values to return if val is null.  Can be a 
                          single value or an array of values.
  @returns     {Any} First non-null value found.
  @author      Alex Ramirez
*/
function nullValueList(val,vals) {
  // check if val is null
  if (!isNullOrUndefined(val)) {
    return val;
  }

  // check if vals is an array
  if (!isArray(vals)) {
    // if it is not, then return the value
    return vals;
  } else {
    // find the first non-null value
    for(var v in vals) {
      // return the first no-null value
      if (!isNullOrUndefined(vals[v])) {
        return vals[v];
      }
    }
  }
}

/**
  @description  Creates a new object with the properties of the first param.  
                The values of the properties are set to the values found in the
                secondparam if they exist.
  @param        {Object} template Object to be used as a template.  The result 
                                  from the function contains the same properties
                                  as this object.
  @param        {Object} values   Object with the new values to override the 
                                  defaults in the template object.
  @returns      {Object} New object with the properties specfified in the first
                         param and the values, if any, from the second param.  
                         Returns an empty object if the template is null.
  @author       Alex Ramirez
*/
function duplicateObject(template, values) {
  template = template || {};
  values = values || {};

  var result = {}; 

  // duplicate the properties from the template
  for(var prop in template) {
    // use the values from the second parameter if defined
    // otherwise use the default values from the template
    result[prop] = nullValueList(values[prop], template[prop]);
  }

  return result;
}


// export functions
exports.isUndefined = isUndefined;
exports.isNull = isNull;
exports.isNullOrUndefined = isNullOrUndefined;
exports.isObject = isObject;
exports.isArray = isArray;
exports.isString = isString;
exports.isEmptyObject = isEmptyObject;
exports.isEmptyArray = isEmptyArray;
exports.isEmptyString = isEmptyString;
exports.isNullOrEmpty = isNullOrEmpty;
exports.isNullOrWhitespace = isNullOrWhitespace;
exports.nullValueList = nullValueList;
exports.duplicateObject = duplicateObject;

// export function aliases
// these are less verbose than the full function name
exports.inou = isNullOrUndefined;
exports.inoe = isNullOrEmpty;
exports.inow = isNullOrWhitespace;
exports.nvl = nullValueList;
exports.dparams = duplicateObject;

// expose internal functionality for testing
exports.expose = {
  debug: {
    on: debugOn,
    off: debugOff
  }
};
