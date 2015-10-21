
var http = require('http');
var returnedDataArray = [];
var returnedData = '';

http.get(process.argv[2], function(response) {
    response.setEncoding('utf8').on('data', function(data) {
        returnedData += data;
    });

    response.on('end', function() {
        returnedDataArray.push(returnedData);
        returnedData = '';
        http.get(process.argv[3], function(response) {
            response.setEncoding('utf8').on('data', function(data) {
                returnedData += data;
            });

            response.on('end', function() {
                returnedDataArray.push(returnedData);
                returnedData = '';
                http.get(process.argv[4], function(response) {
                    response.setEncoding('utf8').on('data', function(data) {
                        returnedData += data;
                    });

                    response.on('end', function() {
                        returnedDataArray.push(returnedData);
                        returnedDataArray.forEach(function(string) {
                            console.log(string);
                        })
                    })
                })
            })
        })
    })
})


// http.get(process.argv[2], function(response) {
//     response.setEncoding('utf8').on('data', function(data) {
//         returnedData += data;
//     })
//     response.on('end', function() {
//         returnedDataArray.push(returnedData)
//         counter++;
//         if (counter === 3) {
//             for (var i = 0; i < returnedDataArray.length; i ++) {
//                 console.log(returnedDataArray[i]);
//             }
//         }
//     })
// })
//
// http.get(process.argv[3], function(response) {
//     returnedData = '';
//     response.setEncoding('utf8').on('data', function(data) {
//         returnedData += data;
//     })
//     response.on('end', function() {
//         returnedDataArray.push(returnedData)
//         counter++;
//         if (counter === 3) {
//             for (var i = 0; i < returnedDataArray.length; i ++) {
//                 console.log(returnedDataArray[i]);
//             }
//         }
//     })
// })
//
// http.get(process.argv[4], function(response) {
//     returnedData = '';
//     response.setEncoding('utf8').on('data', function(data) {
//         returnedData += data;
//     })
//     response.on('end', function() {
//         returnedDataArray.push(returnedData)
//         counter++;
//         if (counter === 3) {
//             for (var i = 0; i < returnedDataArray.length; i ++) {
//                 console.log(returnedDataArray[i]);
//             }
//         }
//     })
// })
