//Given an array, write a function that changes all positive numbers in the array to“ big”.
//Example: makeItBig([-1,3,5,-5]) returns that same array, changed to [-1, "big", "big",-5].
function makeItBig(arr) {
    for (var i = 0; i <= a rr.length; i++) {
        if (arr[i] > 0) {
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
    var firstOdd = [];
    for (var i = 0; i <= a rr.length; i++) {
        if (i == a rr.length - 2) {
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

//Given array, create a function to return a new array where each value in the
//original has been doubled. Calling double([1,2,3]) should return [2,4,6]
//without changing original.
function doubleVision(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        newArr.push(arr[i] * 2);
    }
    console.log(arr);
    return newArr;
}
console.log(doubleVision([2, 4, 6, 8, 10]));

//Given array of numbers, create function to replace last value with number of positive values.
//Example: countPositives([-1,1,1,1]) changes array to [-1,1,1,3] and returns it.
function countPositives(arr) {
    let positiveSum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            positiveSum += arr[i];
        }
    }
    arr.pop();
    arr.push(positiveSum);
    return arr;
}
console.log(countPositives([1, 2, 3, 4, 5]))

// Create a function that accepts an array. Every time that array has three
// odd values in a row, print "That’s odd!" Every time the array has three
// evens in a row, print "Even more so!"
const oddsAndEvens = (arr) => {
    for (i = 0; i < arr.length; i++) {
        if (arr[i] && arr[i + 1] && arr[i + 2]) {
            if (arr[i] % 2 == 0 && arr[i + 1] % 2 == 0 && arr[i + 2] % 2 == 0) {
                console.log("even");
            }
            if (arr[i] % 2 != 0 && arr[i + 1] % 2 != 0 && arr[i + 2] % 2 != 0) {
                console.log("odd");
            }
        }
    }
}
oddsAndEvens([1, 3]); /* nothing. no 3 defined values in a row */
oddsAndEvens([1, 3, 7]); /* odd */
oddsAndEvens([2, 2, 8]); /* even */
oddsAndEvens([1, 3, 1, 2, 4, 6]); /* odd, even */

// Given an array of numbers arr, add 1 to every second element,
//   specifically those whose index is odd (arr[1], [3], [5], etc).
//   Afterward, console.log each array value and return arr.
const incrementSeconds = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr.length < 2) {
            console.log('Not enough values to get to inx[1]');
        }
        if (typeof arr[i] !== 'number') {
            continue;
        } else if (i % 2 == 1) {
            arr[i]++;
        }
    }
    console.log(arr);
    return arr;
}
incrementSeconds([1, 2, 3, 4, 5, 6, 7, 8, 9])
incrementSeconds([1])
incrementSeconds([1, 2, 3, 4, 5, 6, 7, 'hello', 9])

// You are passed an array containing strings. Working within
// // that same array, replace each string with a number – the
// // length of the string at previous array index – and return the array.

// const previousLengths = (arr) => {
//   let prevLen;
//   let newVal;
//   for(let i = 0; i < arr.length; i++){
//     if(arr[i] == arr[0]){
//       prevLen = arr[i].length;
//       arr[i] = prevLen;
//     }
//     else{
//     newVal = prevLen;
//     prevLen = arr[i].length;
//     arr[i] = newVal;
//     }
//   }
//   console.log(arr);
//   return arr;
// }
// previousLengths(['Hello', 'Wow', 'Photosynthesis','Today!'])
