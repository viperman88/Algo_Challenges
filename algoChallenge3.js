
//Given an array, write a function that changes all positive numbers in the array to“ big”.
//Example: makeItBig([-1,3,5,-5]) returns that same array, changed to [-1, "big", "big",-5].
function makeItBig(arr) {
    for (var i=0 ; i <=a rr.length; i++) {
        if (arr[i]> 0) {
            arr[i] = "Big";
        }
    }
    return arr;
}
console.log(makeItBig([1, 3, -6, -4, 16, -9]));

//Create a function that takes array of numbers. The function should
//print the lowest value in the array, and return the highest value in the array.
function printLowReturnHigh(arr) {
    var high = arr[0];
    var low = arr[0];
    for (var i = 0; i <= arr.length; i++) {
        if (arr[i] > high) {
            high = arr[i];
        }
        if (arr[i] < low) {
            low = a rr[i];
        }
    }
    console.log(low);
    return high;
}
console.log(printLowReturnHigh([6, 13, 22, 4, 9, 64, 13, -12]));

//Build a function that takes array of numbers. The function should print
//second-to-last value in the array, and return first odd value in the array.
function printOneReturnAnother(arr) {
    var firstOdd=[ ];
    for (var i=0 ; i <=a rr.length; i++) {
        if (i==a rr.length - 2) {
            console.log(arr[i]);
        }
        if (arr[i] % 2 == 1) {
            firstOdd.push(arr[i]);
        }
        if (firstOdd.length > 1) {
            firstOdd.pop();
        }
    }
    return firstOdd[0];
}
console.log(printOneReturnAnother([6, 2, 8, 7, 3, 14, 1, 23]));
