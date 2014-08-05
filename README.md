node-pwgen
==========

Easy-to-remember secure password generator, which generates passwords such as `SUPER.Obedient.FISH856` and `SHY-Gentle-LION827` in the fashion of `adjective{separator}adjective{separator}animal{number}`. Generation can be customized such as adding padding, changing the number of numbers, and declaring a maximum length, in which case you might end up with a password like `-ICY-Hard-CAT58-`

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
