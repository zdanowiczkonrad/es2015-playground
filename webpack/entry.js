require('./style.css');
document.write(require('./modules/greeter.js'));

var sayHelloToES6 = require('./modules/es6greeter');
console.log(sayHelloToES6);
sayHelloToES6.greet('Konrad');
