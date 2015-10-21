var fs = require("fs");
var path = require('path');

module.exports = testModule;
function testModule(dir, ext, callback) {
    fs.readdir(dir, function (err, list) {
        if(err) {
            return callback(err);
        }

        var filtered = [];
        for (var i = 0; i < list.length; i++) {
            if (path.extname(list[i]) === '.' + ext) {
                filtered.push(list[i]);
            }
        }
        return callback(null, filtered);
    })
}

// Here's the official solution in case you want to compare notes:
//
// ────────────────────────────────────────────────────────────────────────────────
// solution.js:
//
//     var filterFn = require('./solution_filter.js')
//     var dir = process.argv[2]
//     var filterStr = process.argv[3]
//
//     filterFn(dir, filterStr, function (err, list) {
//       if (err)
//         return console.error('There was an error:', err)
//
//       list.forEach(function (file) {
//         console.log(file)
//       })
//     })
//
// ────────────────────────────────────────────────────────────────────────────────
// solution_filter.js:
//
//     var fs = require('fs')
//     var path = require('path')
//
//     module.exports = function (dir, filterStr, callback) {
//
//       fs.readdir(dir, function (err, list) {
//         if (err)
//           return callback(err)
//
//         list = list.filter(function (file) {
//           return path.extname(file) === '.' + filterStr
//         })
//
//         callback(null, list)
//       })
//     }
//
