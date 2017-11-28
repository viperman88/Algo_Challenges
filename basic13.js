//Print all the integers from 1 to 255.
for (let i = 1; i <= 255; i++) {
    console.log(i);
}

//Print all odd integers from 1 to 255.
for (let i = 1; i <= 255; i++) {
    if (i % 2 == 1) {
        console.log(i);
    }
}

//Print integers from 0 to 255, and with each integer print the sum so far.
let sum = 0;
for (let i = 0; i <= 255; i++) {
    sum += i;
    console.log('Int: ' + i + ' Sum so far: ' + sum);
}

//Iterate through a given array, printing each value.
let arr = [1, 'hello', 34, 'world', true];
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

//Given an array, find and print its largest element.
let arr = [1, 'hello dojo', 34, 'world', true, 'Welcome to my house'];
let largestArr = '';
for (let i = 0; i < arr.length; i++) {
    if (largestArr == 'undefined') {
        largestArr = arr[i];
    }
    if (arr[i].length > largestArr.length) {
        largestArr = arr[i];
    }
}
console.log(largestArr);

//Analyze an array’s values and print the average.
let arr = [12, 45, 32, 76, 94, 2, 13, 22];
let sum = 0;
let avg;

for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
}
avg = sum / arr.length;
console.log('Sum: ' + sum + ' Avg: ' + avg);

//Create an array with all the odd integers between 1 and 255 (inclusive).
let arr = [];
for (let i = 1; i <= 255; i++) {
    if (i % 2 == 1) {
        arr.push(i);
    }
}
console.log(arr);

//Square each value in a given array, returning that
//same array with changed values.
let arr = [12, 32, 45, 68, 41, 235, 20];
for (let i = 0; i < arr.length; i++) {
    arr[i] *= arr[i];
}
console.log(arr);

//Given an array and a value Y, count and print the
//number of array values greater than Y.
let arr = [1, 2, 45, 32, 3, 7, 9, 15, 22, 58, 37];
let y = 30;
let count = 0;
for (let i = 0; i < arr.length; i++) {
    if (arr[i] > y) {
        count++;
    }
}
console.log('Values in arr greater than y: ' + count);

//Return the given array, after setting any negative values to zero.
let arr = [1, -2, 45, 32, -3, 7, 9, 15, -22, 58, 37];
for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
        arr[i] = 0;
    }
}
console.log('New array with no negatives:');
console.log(arr);

//Given an array, print the max, min and average values for that array.
let arr = [1, 32, 45, 2, 6, 9, 12];
let max = [0];
let min = arr[0];
let sum = 0;
let avg;
for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    if (arr[i] > max) {
        max = arr[i];
    }
    if (arr[i] < min) {
        min = arr[i];
    }
}
console.log(`Max: ${max}, Min: ${min}, Avg: ${sum / arr.length}`);

//Given an array, move all values forward by one index,
//dropping the first and leaving a '0' value at the end.
let arr = ['Hello', 'How', 'Are', 'You?'];
arr.shift();
arr.push(0);
console.log(arr);

//Given an array of numbers, replace any negative
//values with the string 'Dojo'.
let arr = ['welcome', ' to the', -23, '!!', 'The', -1, 'ROCKS'];
for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
        arr[i] = 'Dojo';
    }
}
console.log(arr);
