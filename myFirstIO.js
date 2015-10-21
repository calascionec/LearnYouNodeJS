var fs = require('fs');
var buf = fs.readFileSync(process.argv[2]);

var bufString = buf.toString();

var bufArray = bufString.split('\n');

console.log(bufArray.length - 1);
