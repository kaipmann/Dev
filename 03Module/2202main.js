const myReuse = require('./2202module');
const myLog = require('./2202module2');

myReuse.sayHello('Module exporting function');
myReuse.square(10);
console.log(myReuse.cube(2));

// myLog('Module exporting a function');
myLog.logger('Module exporting an object');