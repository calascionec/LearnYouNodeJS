//Problem: Need a simple way to look at a user's badge count and JavaScript points
//Solution: Use Node.js to connect to Treehouse's API to get profile information to print out
var http = require("http");
var userName = "calascionec";


function printMessage(userName, badgeCount, points) {
    var message = userName + " has " + badgeCount + " total badges and " + points + " points.";
    console.log(message);
}

function printError(error) {
    console.log(error.message)
}

//connect to API URL (http://teamtreehouse.com/calascionec.json)


var request = http.get("http://teamtreehouse.com/" + userName + ".json", function(response) {
    console.dir(response.statusCode);
    var body = "";
    response.on("data", function(chunk){
        body += chunk;
    });

    response.on("end", function() {
        if (response.statusCode === 200) {
            try {
                var profile = JSON.parse(body);
                printMessage(userName, profile.badges.length, profile.points.JavaScript);
            } catch(error) {
                //Parse error
                printError(error);
            }
        } else {
            //Status Code error
            printError({message: "There was an error getting profile information for " + userName + ". (" + http.STATUS_CODES[response.statusCode] + ")"});
        }
    });
});




request.on("error", printError);
//read the data
//parse the data
//print the data
