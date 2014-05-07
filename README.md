#agr-utils
This is a set of utilities to help achieve common tasks in a nice and uniform manner.  This is similar to [underscore](http://underscore.org)...but with a bit more capabilities.

##Install
To install the app you can get the latest code from github or install it using npm.
```
  npm install agr-util --save
```

###Install from github

You can get the latest version of the code base by using git to pull all the files from github.com.  The easiest way to do it is to clone the repo.  This will create a local folder with most of the required files.  After cloning the repo you will need to install dependcies using npm. 

```
git clone git@github.com:agramirez/agr-util.git
cd agr-util
npm install
```

# API (V 0.3.1)

agr-util.isUndefined(val)
-------------------------
Checks a value and determines if it is undefined.

**Parameters**

**val**:  *Any*,  Value to check.

**Returns**

*Boolean*,  True if the value is undefined, false otherwise.

**Example**

```  
var util = require('agr-util');
var val1 = 'something', val2 = null, val3;

console.log(util.isUndefined(val1)); // displays false
console.log(util.isUndefined(val2)); // displays false
console.log(util.isUndefined(val3)); // displays true
```

agr-util.isNull(val)
--------------------
Checks a value and determines if it is null.  

**Parameters**

**val**:  *Any*,  Value to check.  Can be any valid JavaScript.

**Returns**

*Boolean*,  True if the value is null, false otherwise.

**Example**

```
var util = require('agr-util');
var val1 = 'something', val2 = null, val3;

console.log(util.isNull(val1)); // displays false
console.log(util.isNull(val2)); // displays true
console.log(util.isNull(val3)); // displays false
```

agr-util.isNullOrUndefined(val)
-------------------------------
Checks a value and determines if it is null or undefined.


**Parameters**

**val**:  *Any*,  Value to check.

**Returns**

*Boolean*,  True if the value is null or undefined, false otherwise.

**Example**

```
var util = require('agr-util');
var val1 = 'something', val2 = null, val3;

console.log(util.isNullOrUndefined(val1)); // displays false
console.log(util.isNullOrUndefined(val2)); // displays true
console.log(util.isNullOrUndefined(val3)); // displays true
```

agr-util.isEmptyObject(val)
---------------------------
Checks that an object is empty.  In this case empty means that the object has no properties (i.e. val = {}).  A null or undefined value will also be treated
as empty.

**Parameters**

**val**:  *Object*,  Value to check.  Must be an Object type.

**Returns**

*Boolean*,  True if the object is empty, false otherwise.

**Example**

```
var util = require('agr-util');
var val1 = 'something', val2 = null, val3, val4 = {}, val5 = {prop: 14};

console.log(util.isEmptyObject(val1)); // displays false
console.log(util.isEmptyObject(val2)); // displays true
console.log(util.isEmptyObject(val3)); // displays true
console.log(util.isEmptyObject(val4)); // displays true
console.log(util.isEmptyObject(val5)); // displays false
```
agr-util.isEmptyArray(val)
--------------------------
empty means that the array has no values (i.e. its length is 0).
A null or undefined value will also be treated as empty.


**Parameters**

**val**:  *Array*,  Value to check.  Must be an Array type.

**Returns**

*Boolean*,  True if the array is empty, false otherwise.

agr-util.isEmptyString(val)
---------------------------
empty means that the string has no characters, including white-
space.  A null or undefined value will also be treated as empty.


**Parameters**

**val**:  *String*,  Value to check.  Must be a String type.

**Returns**

*Boolean*,  True if the string is empty, false otherwise.

agr-util.isNullOrEmpty(val)
---------------------------
works on any valid JavaScript object.  For strings empty means
null, undefined, or ''.  For arrays empty means null, undefined,
or [].  For objects empty means null, undefined, or {}.
False otherwise.


**Parameters**

**val**:  *Any*,  Value to check.

**Returns**

*Boolean*,  True if the value is null, undefined, or empty.

agr-util.isNullOrWhitespace(val)
--------------------------------
works on any valid JavaScript object.  For strings empty means
null, undefined, '', or a string consisting only of whitespace.                 For arrays empty means null, undefined, or [].  For objects
empty means null, undefined, or {}.  This method works on any
object, but it is most useful for strings.
whitespace.  False otherwise.


**Parameters**

**val**:  *Any*,  Value to check.

**Returns**

*Boolean*,  True if the value is null, undefined, empty, or

agr-util.isObject(val)
----------------------
**Parameters**

**val**:  *Any*,  Value to check.

**Returns**

*Boolean*,  True if the value is an object, false otherwise.

agr-util.isArray(val)
---------------------
**Parameters**

**val**:  *Any*,  Value to check.

**Returns**

*Boolean*,  True if the value is an array, false otherwise.

agr-util.isString(val)
----------------------
**Parameters**

**val**:  *Any*,  Value to check.

**Returns**

*Boolean*,  True if the value is a string, false otherwise.

agr-util.nullValueList(val, vals)
---------------------------------
Similar to the oracle nvl or the coalesce function in ms sql.  
Returns the first non-null value from the available choices.  
Note that the vals param can be an array of possible values 
to return.  If the value that should be returned is an array, 
and not a value inside the array, then the original array to 
return must be placed within an array wrapper.  If this is 
not done the function will think that it must return a value 
within the array and not the array itself.

**Alias (AKA)**
agr-util.nvl(val,vals)


**Parameters**

**val**:  *Any*,  Value to be checked. It is returned if not null.

**vals**:  *Any*,  Value or values to return if val is null.  Can be a

**Returns**

*Any*,  First non-null value found.

agr-util.duplicateObject(template, values)
------------------------------------------
The values of the properties are set to the values found in the
secondparam if they exist.
from the function contains the same properties
as this object.
defaults in the template object.
param and the values, if any, from the second param.
Returns an empty object if the template is null.


**Parameters**

**template**:  *Object*,  Object to be used as a template.  The result

**values**:  *Object*,  Object with the new values to override the

**Returns**

*Object*,  New object with the properties specfified in the first

agr-util.isFunction(val) 
-----------------------
Tests an object to see if it is a function.

**parameters**

**val**: *Object*, Object to check.

**Returns** *Boolean*, True if the value is a function, false otherwise

**Example**
```
var util = require('agr-util');

console.log(util.isFunction({})); // returns false
console.log(util.isFunction('')); // returns false
console.log(util.isFunction(function () { return this; })); // returns true
```
