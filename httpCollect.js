var http = require('http');
var returnedData = '';

http.get(process.argv[2], function(response) {
    response.setEncoding('utf8').on('data', function(data) {
        returnedData += data;
    });

    response.on('end', function() {
        console.log(returnedData.length);
        console.log(returnedData);
    });
})

//provided solution

// var http = require('http')
// var bl = require('bl')
//
// http.get(process.argv[2], function (response) {
//   response.pipe(bl(function (err, data) {
//     if (err)
//       return console.error(err)
//     data = data.toString()
//     console.log(data.length)
//     console.log(data)
//   }))
// })
