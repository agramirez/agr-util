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

/** checks the value (object) and returns true if it is empty, false otherwise */
function isEmptyObject(val) {
  // make sure the input is an object
  if (isNullOrUndefined(val)) {
    return true;
  }

  // throw an error if the value is not an object
  if (!isObject(val)) {
    throw new Error('isEmptyObject: value specified is not an Object it is: ' +
                    typeof val);
  }

  // check if there are any properties in the object
  var count = 0;
  for(var p in val) {
    count++;
  }

  return (count === 0);
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
