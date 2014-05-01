# enhance dlogger.vals function

Using an array of objects with a key value pair signature can be cumbersome
for the developer when dealing with a large number of variables that need to 
be displayed.

To resolve this issue we should enhance the dlogger.vals function to simplify
the signature required for a key/value pair.  For example, we could pass key 
the key/value pair consist of an array.  the first item will be the key and the
second item will be the value.

**example**
```
  var dlogger = require('dlogger.js'), log = dlogger();

  var val1 = 234, val2 = 'once', val3 = {some: 'data'};

  // current signature
  log.vals([
    {
      key: 'val1',
      value: val1
    },
    {
      key: 'val2',
      value: val2
    },
    {
      key: 'val3',
      value: val3
    }
  ]);

  // new signature - array
  log.vals([
    ['val1', val1],
    ['val2', val2],
    ['val3', val3]
  ]);

  // new signature - object
  log.vals({
    val1: val1,
    val2: val2,
    val3: val3
  });
```
