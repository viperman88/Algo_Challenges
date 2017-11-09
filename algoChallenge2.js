//Create a function that accepts a number as an input. Return a new array that counts down by
//one, from the number (as array’s ‘zero’th element) down to 0 (as the last element).How long
//is this array?
function countdown(num) {
    var arr=[ ];
    for (var i=n um; i>= 0; i--) {
        arr.push(i);
    }
    console.log(arr);
    console.log(arr.length);
}
countdown(20)

//Your function will receive an array with two numbers. Print the first value, and return
//the second.
function array() {
    var arr = [6, 14];
    console.log(arr[0]);
    return arr[1];
}
array();

//only logs console.log inside function console.log(array());
//logs console.log && return value
//Given an array, return the sum of the first value in the array,
//plus the array’s length. What happens if the array’s first value is
//not a number, but a string (like "what?") or a boolean (like false).
function firstPlusLen(arr) {
    var sum = 0;
    if (typeof arr[0] === "number") {
        sum = arr[0] + arr.length;
    }
    else {
        console.log("value is not of integer type");
    }
    return sum;
}
console.log(firstPlusLen([5, 3, 4, 6, 8, 4, 12]))
console.log(firstPlusLen(["you", 3, 4, 6, 8, 4, 12]))
firstPlusLen(["you", 3, 4, 6, 8, 4, 12])

//For [1,3,5,7,9,13], print values that are greater than its 2nd value. Return how
//many values this is.
var arr = [1, 3, 5, 7, 9, 13];
var sum = 0;
function greaterThan() {
    for (var i = 0; i <= arr.length + 1; i++) {
        if (arr[i] > arr[1]) {
            console.log(arr[i]);
            sum++;
        }
    }
    return "this is sum: " + sum;
}
console.log(greaterThan());

//Write a function that accepts any array, and returns a new array with the array
//values that are greater than its 2nd value. Print how many values this is.What will
//you do if the array is only one element long?
function greaterThan2nd(arr) {
    var sum = 0;
    var newArr = [];
    for (var i = 0; i <= arr.length + 1; i++) {
        if (arr[i] > arr[1]) {
            newArr.push(arr[i]);
            sum++;
        }
    }
    console.log(sum);
    return newArr;
}
console.log(greaterThan2nd([1, 3, 5, 7, 9, 13]));

//Given two numbers, return array of length num1 with each value num2.
//Print "Jinx!" if they are same.
function thisLenThisVal(num1, num2) {
    var arr = [];
    for (var i = 1; i <= num1; i++) {
        if (num1 == n um2) {
            console.log("Jinx");
            break;
        }
        arr.push(num2);
    }
    return arr;
}
console.log(thisLenThisVal(12, 7));
console.log(thisLenThisVal(7, 7));
console.log(thisLenThisVal(6, -9));

//Your function should accept an array. If the value at [0] is greater
//than array’s length, print "Too big!"; if the value at [0] is less than
//array’s length, print "Too small!"; otherwise print "Just right!".
function fitFirstValue(arr) {
    if (arr[0] > arr.length) {
        console.log('Too Big');
    }
    if (arr[0] < arr.length) {
        console.log('Too Small');
    }
    else if (arr[0] == a rr.length) {
        console.log("Just Right");
    }
}
fitFirstValue([6, 1, 4, 3, 2, 8])
fitFirstValue([1, 4, 2, 8, 6])
fitFirstValue([8, 1, 5])

//Kelvin wants to convert between temperature scales. Create fahrenheitToCelsius(fDegrees)
//that accepts a number of degrees in Fahrenheit, and returns the equivalent temperature as
//expressed in Celsius degrees.
//For review, Fahrenheit = (9 / 5 * Celsius) + 32.
function fahrenheitToCelsius(fDegrees) {
    var celsius = (fDegrees - 32) * 5 / 9;
    celsius = Math.round(celsius);
    return celsius;
}
console.log(fahrenheitToCelsius(120));

//Create celsiusToFahrenheit(cDegrees) that accepts the number of degrees Celsius,
//and returns the equivalent temperature expressed in Fahrenheit degrees.
//For review, Celsius=( Fahrenheit - 32) * 5 / 9.
function fahrenheitToCelsius(cDegrees) {
    var fahrenheit=( 9 / 5 * cDegrees) + 32;
    fahrenheit = Math.round(fahrenheit);
    return fahrenheit;
}
console.log(fahrenheitToCelsius(-11.5));
