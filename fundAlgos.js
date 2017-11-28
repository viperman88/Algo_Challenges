//Implement function sigma(num) that given a number, returns
//the sum of all positive integers up to number (inclusive).
//Example: sigma(3) = 6 (or 1 + 2 + 3);
//sigma(5) = 15 (or 1 + 2 + 3 + 4 + 5).
let posInt = '';
let sum = 0;
const sigma = (num) => {
    for (let i = 1; i <= num; i++) {
        sum += i;
        posInt += i + ' + ';
    }
    console.log(posInt);
    return sum;
}
console.log(sigma(5));
console.log(sigma(25));

//Just the Facts, ma'am. Factorials, that is. Write a
//function factorial(num) that, given a number, returns
//the product (multiplication) of all positive integers
//from 1 up to number (inclusive).
//Example: factorial(3) = 6 (or 1 * 2 * 3);
//factorial(5) = 120 (or 1 * 2 * 3 * 4 * 5).
let posInt = '';
let productInt = 1;
const factorial = (num) => {
    if (num < 0) {
        return 'No positive Integers';
    }
    for (let i = 1; i <= num; i++) {
        productInt *= i;
        posInt += i + ' * ';
    }
    console.log(posInt);
    return productInt;
}
console.log(factorial(5));
console.log(factorial(-5));

//Write a function drawLeftStars(num) that accepts a number and
//prints that many asterisks
//Write a function drawRightStars(num) that prints 75 characters total.
//The stars should build from the right side. the last num characters
//should be asterisks; the other remaining of the 75 should be spaces.
//Write a function drawCenterStars(num) that prints 75 characters total.
//The stars should be centered in the 75. the middle num characters
//should be asterisks; the rest of the 75 characters should be spaces.
const drawLeftStars = (num) => {
    let leftStars = '';
    for (let i = 1; i <= num; i++) {
        leftStars += '*';
    }
    console.log(leftStars);
};

const drawRightStars = (num) => {
    let rightStars = '';
    for (let i = 1; i <= 75 - num; i++) {
        rightStars += ' ';
    }
    for (let i = 1; i <= num; i++) {
        rightStars += '*';
    }
    console.log(rightStars);
};

const drawCenterStars = (num) => {
    let centerStars = '';
    for (let i = 1; i <= (75 - num) / 2; i++) {
        centerStars += ' ';
    }
    for (let i = 1; i <= num; i++) {
        centerStars += '*';
    }
    for (let i = 1; i <= (75 - num) / 2; i++) {
        centerStars += ' ';
    }
    console.log(centerStars);
};
drawLeftStars(30);
drawRightStars(40);
drawCenterStars(40);
drawLeftStars(50);
drawRightStars(65);
drawCenterStars(55);
drawLeftStars(10);
drawRightStars(70);
drawCenterStars(25);
