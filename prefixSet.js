//originally a file to
//add a function that will take an array and return the first covering prefix
//var arr = [1,3,4,1,3,4,4];
//function solution(arr);
//should return [1,3,4]

//pretty sure it's going to turn into a file of useful functions that might be needed later when working with arrays


//new function added to the Array prototype to check if a value is in an array
Array.prototype.contains = function(valueToCheck) {
    for (var i = 0; i < this.length; i++) {
        if (this[i] === valueToCheck) {
            return true;
        }
    }
    return false;
};

//this function will return an array of unique values of the array. This does not affect the original array
Array.prototype.unique = function() {
    var arr = [];
    for (var i = 0; i < this.length; i++) {
        if (!arr.contains(this[i])) {
            arr.push(this[i]);
        }
    }
    return arr;
};

//this function returns the first prefixSet, no alterations to the original array
//this was the jumping off point for this file
Array.prototype.prefixSet = function () {
    var arrUnique = this.unique();
    var arrUniqueLength = arrUnique.length
    var arrPrefix = [];

    for (var i = 0, j = 0; j < arrUniqueLength; i++) {
        if (!arrPrefix.contains(this[i])) {
            arrPrefix.push(this[i]);
            j++;
        } else {
            arrPrefix.push(this[i]);
        }
    }
    return arrPrefix;
};


//return
Array.prototype.min = function () {
    return Math.min.apply(Math, this);
};

Array.prototype.tapeEqualibrium = function() {
    var arrayToCheck = [];
    var number = 0;
    var i, sliceOne, sliceTwo, difference;
    var arrLength = this.length;

    for (i = 1; i < arrLength; i++) {
        sliceOne = this.slice(0,i).reduce(function(a, b) {return a + b;});
        sliceTwo = this.slice(i).reduce(function(a, b) {return a + b;});
        difference =  Math.abs(sliceOne - sliceTwo);
        if (!number) {
            number = difference;
        } else if (difference < number) {
            number = difference;
        }
    }
    return number;
}
