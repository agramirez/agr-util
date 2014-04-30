/** checks the value and returns true if it is undefined, else false */
function isUndefined(val) {
  var u;

  // check if the value is undefined
  if (typeof val === typeof u) { return true; }

  return false;
}

/** checks the value and returns true if it is null, else false */
function isNull(val) {
  return (val === null);
}

/** returns true if the value is null or undefined, false otherwise */
function isNullOrUndefined(val) {
  // check if the value is undefined or null
  if (isUndefined(val) || isNull(val)) { return true; }

  // value is not null or undefined
  return false;
}

/** checks the value and returns true if it is empty, false otherwise */
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

/** returns true if the array is null or empty, false otherwise */
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

/** returns true if the string is empty (i.e. has no length) */
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

/** returns true if the value is null, undefined, or empty */
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

/** returns true if the value is null, undefined, empty, or whitespace */
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

/** returns true if the value is an object, false otherwise */
function isObject(val) {
  return (typeof val === typeof {});
}
/** returns true if the value is an array, false otherwise */
function isArray(val) {
  return (Object.prototype.toString.call(val) === '[object Array]');
}
/** returns true if the value is a string, false otherwise */
function isString(val) {
  return (typeof val === typeof '');
}

/** 
  returns the first non-null value.
  @param val Value to be checked. It is returned if not null.
  @param vals Value or values to return if val is null.  Can be a single value or an array of values.
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

// export function aliases
exports.inou = isNullOrUndefined;
exports.inoe = isNullOrEmpty;
exports.inow = isNullOrWhitespace;
exports.nvl = nullValueList;
