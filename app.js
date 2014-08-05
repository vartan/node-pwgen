var argv = require('minimist')(process.argv.slice(2))

var pwgen = require('./pwgen.js')({numbers:1})
var mixCase = !(argv['c'] || (argv['ignorecase']))
var numbers = argv['n'] || argv['numbers']
var padding = argv['p']
var maxSize = argv['l'] || argv['limit']
var separators = argv['s'] || argv['separators']
var password = pwgen({separators:separators,numbers:numbers,mixCase:mixCase,padding:padding, maxSize:maxSize})
pbcopy(password)
console.log(password+"  <-- This is your new password. If you are using a mac, it has been copied to your clipboard.")
console.log()

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
}

function pbcopy(data) { 
	var proc = require('child_process').spawn('pbcopy')
	proc.stdin.write(data); 
	proc.stdin.end(); 
}
