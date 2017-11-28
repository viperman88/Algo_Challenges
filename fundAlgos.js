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

//From Star Art, derive the following that will accept
//and draw the given characters, not just asterisks:
//drawLeftChars(num, char)
//drawRightChars(num, char)
//drawCenterChar(num, char)
//For all three of these, you can safely assume that 'char'
//is a string with length 1.
const drawLeftChar = (num, char) => {
    let leftChar = '';
    for (let i = 1; i <= num; i++) {
        leftChar += char;
    }
    console.log(leftChar);
};

const drawRightChar = (num, char) => {
    let rightChar = '';
    for (let i = 1; i <= 75 - num; i++) {
        rightChar += ' ';
    }
    for (let i = 1; i <= num; i++) {
        rightChar += char;
    }
    console.log(rightChar);
};

const drawCenterChar = (num, char) => {
    let centerChar = '';
    for (let i = 1; i <= (75 - num) / 2; i++) {
        centerChar += ' ';
    }
    for (let i = 1; i <= num; i++) {
        centerChar += char;
    }
    for (let i = 1; i <= (75 - num) / 2; i++) {
        centerChar += ' ';
    }
    console.log(centerChar);
};
drawLeftChar(30, 'R');
drawRightChar(40, '*');
drawCenterChar(40, 'C');
drawLeftChar(50, '?');
drawRightChar(65, 'W');
drawCenterChar(55, '@');
drawLeftChar(10, 'F');
drawRightChar(70, '$');
drawCenterChar(25, '^');

//Create ThreesFives(start,end) that adds values from your range
//If that value is evenly divisible by 3 or 5 but
//not both. Display the final sum in the console.
const threesFives = (start, end) => {
    let sum = 0;
    let divBy3or5 = [];
    for (let i = start; i <= end; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            continue;
        } else if (i % 3 === 0 || i % 5 === 0) {
            divBy3or5.push(i);
            sum += i;
        }
    }
    console.log(divBy3or5);
    return 'Sum: ' + sum;
}
console.log(threesFives(10, 100));

//Change is inevitable (especially when you break a twenty!).
//Make generateCoinChange(cents). Accept a number of American
//cents, compute and print how to represent that amount with
//the smallest number of coins possible. Common American
//coins are penny (1 cent), nickel (5 cents), dime (10 cents)
//and quarter (25 cents).
//Second: Can you simplify/shorten your code?
//Third: Add half-dollar (50 cents) and dollar (100 cents) coins
//with 40 additional characters or less
const generateCoinChange = cents => {
    let silverDollar = 0;
    let halfDollar = 0;
    let quarter = 0;
    let dime = 0;
    let nickel = 0;
    let penny = 0;
    let remainingChange = cents;

    while (remainingChange >= 1.00) {
        remainingChange -= 1.00;
        silverDollar++;
    }
    while (remainingChange >= .50) {
        remainingChange -= .50;
        halfDollar++;
    }
    while (remainingChange >= .25) {
        remainingChange -= .25;
        quarter++;
    }
    while (remainingChange >= .10) {
        remainingChange -= .10;
        dime++;
    }
    while (remainingChange >= .05) {
        remainingChange -= .5;
        nickel++;
    }
    while (remainingChange > 0) {
        remainingChange -= .01;
        penny++;
    }
    console.log(`Silver Dollars: ${silverDollar}, Half Dollars: ${halfDollar}, Quarters: ${quarter}, Dimes: ${dime}, Nickels: ${nickel}, Pennies: ${penny}`)
};
generateCoinChange(.94);
generateCoinChange(1.30);
generateCoinChange(.23);
generateCoinChange(4.72);
generateCoinChange(100.93);

//Create a function messyMath(num) that will return the following
//sum: add all integers from 0 up to the given num, except for
//the following special cases of our count value:

//If current count (not num) is evenly divisible by 3, don't add
//to sum; use continue to skip to the next value of count;
//Otherwise, if current count is evenly divisible by 7, include it
//twice in sum instead of once;
//Regardless of the above, if the current count is exactly 1/3 of
//num, return -1 immediately.
//Example: if given num is 4, return 7. If given num is 8, return 34.
//If given num is 15, return -1.
const messyMath = (num) => {
    let sum = 0;
    for (let i = 0; i <= num; i++) {
        if (i === num / 3) {
            return -1;
        } else if (i % 3 === 0) {
            continue;
        } else if (i % 7 === 0) {
            sum += i * 2;
        } else {
            sum += i;
        }
    }
    return `Sum: ${sum}`
}
console.log(messyMath(8));
