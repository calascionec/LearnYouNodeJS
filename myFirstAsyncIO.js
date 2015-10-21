var fs = require('fs');
var newlines = undefined;

function countNewlines(numberNewlines) {
    fs.readFile(process.argv[2], function(err, fileContents) {
        var buf = fileContents.toString();
        newlines = buf.split('\n').length - 1;

        numberNewlines();
    })
}

function numberNewlines() {
    console.log(newlines);
}

countNewlines(numberNewlines);
