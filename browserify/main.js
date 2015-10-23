var unique = require('uniq');
var greeter = require('./modules/greeter.js');
console.log(greeter);
var data = [1,2,3,4,5,5,6];

alert(unique(data));

var message = greeter.greet("Konrad");
greeter.show(message);
