node-pwgen
==========

Easy-to-remember secure password generator

Usage:
```javascript
var pwgen = require('./pwgen.js')({ // Note: these are the default values when no arguments are given
  separators:"-_.", //limit password word separators to these characters. 
  numbers: 3, // how many numbers should be near the end of the password
  mixCase: true, // Is mixed casing required for the password
  padding: 0, // number of characters to surround the password (ex. "password" becomes ".password.") 
  maxSize: 9999 // What is the maximum length of the generated password?
})

var password = pwgen({numbers:2}) // can override above values by supplying them in function arguments.
```
