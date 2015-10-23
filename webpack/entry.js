require('./style.css');
require('./style.scss');

document.write(require('./modules/greeter.js'));

var sayHelloToES6 = require('./modules/es6greeter');
console.log(sayHelloToES6);
sayHelloToES6.greet('Konrad');
