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
//#1 is the shortened code with 50 & 100 values

// #1
const generateCoinChange = cents => {
    let counts = [0, 0, 0, 0, 0, 0, cents];
    let denominations = [100, 50, 25, 10, 5, 1];
    for (let i = 0; i < 6; i++) {
        counts[i] = Math.floor(counts[6] / denominations[i])
        counts[6] -= counts[i] * denominations[i]
    }
    console.log(`Silver Dollar: ${counts[0]}, Half Dollar: ${counts[1]}, Quarters: ${counts[2]}, Dimes: ${counts[3]}, Nickels: ${counts[4]}, Pennies: ${counts[5]}`)
};
generateCoinChange(94)
generateCoinChange(322)
generateCoinChange(175)
generateCoinChange(587)

// #2
const generateCoinChange = (cents) => {
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

//Write a function that console.logs the number 1,
//then "chick", then "boom", then "chick", then 2,
//then "chick", then "boom", then "chick" - continuing
//the same cycle for each number up to (including) 12.
const twelveBarBlues = (num) => {
    for (let i = 1; i <= num; i++) {
        console.log(`${i}- chick, boom, chick!`);
    }
};
twelveBarBlues(12);

//Create a function to generate Fibonacci numbers. In this
//famous mathematical sequence, each number is the sum of
//the previous two, starting with values 0 and 1. Your
//function should accept one argument, an index into the
//sequence (where 0 corresponds to the initial value, 4
//corresponds to the value four later, etc).

const fibonacci = (num) => {
    let num1 = 0;
    let num2 = 1;
    let count = 0;
    let sum = 0;

    for (let i = 0; i <= num; i++) {
        console.log(`Fibonacci(${count}) = ${sum}`);
        sum = num1 + num2;
        num1 = num2;
        num2 = sum;
        count++;
    }
};
fibonacci(13);

//Kaitlin sees beauty in numbers, but also believes that
//less is more. Implement sumToOne(num) that sums a given
//integer's digits repeatedly until the sum is only one
//digit. Return that one-digit result.
const sumToOne = (num) => {
    sum = 0;

    while (num) {
        sum += num % 10;
        num = Math.floor(num / 10);
    }
    console.log(sum);
};
sumToOne(928);

//Create function clockHandAngles(seconds) that, given the number
//of seconds since 12:00:00, will print the angles (in degrees) of
//the hour, minute and second hands. As a quick review, there are
//360 degrees in a full rotation.

//Examples: Given clockHandAngles(3600) (equivalent to 1:00:00),
//print "Hour Hand: 30 degs. Minute Hand: 0 degs. Second Hand: 0 degs."
//. For an input parameter seconds of 119730 (equivalent to 9:15:30
//plus 24 hrs!), you should log "Hour Hand: 277.75 degs. Minute Hand:
//93 degs. Second Hand: 180 degs.". Note: in the second example, the
//angle for the minute hand is not simply 90 degrees; it has advanced
//a bit further, because of the additional 30 seconds in that minute so far.
const clockHandAngles = seconds => {
    let counts = [0, 0, 0, seconds];
    let denominations = [3600, 60, 1];
    let scaling = [30, 6, 6];
    for (let i = 0; i < 3; i++) {
        counts[i] = counts[3] / denominations[i] * scaling[i] % 360;
        counts[3] -= Math.floor(counts[i] / scaling[i]) * denominations[i];
    }
    console.log(`Hour Hand: ${counts[0]} degs, Minute Hand: ${counts[1]} degs, Second Hand: ${counts[2]} degs`);
};
clockHandAngles(119730)
clockHandAngles(3606)
clockHandAngles(267891)

// Make a function that takes a number of quarters (1 quarter = 1 game).
// There is a 1 in 100 chance to win the slot machine (which will give you between
//50 - 100 quarters -- use Math.random and Math.floor to pick a random number of coins).
// While the user still has quarters, use Math.random to determine if they won.
// If they ever win, return the number of quarters (ex: they had 50 remaining quarters
//and won 90, so it should return 140). Return 0 if all the quarters were wasted.
// Bonus (Only If You Have Time): Let the user pass the number they are willing to leave
// (ex: If they won the lottery and still have 40 coins, they will keep playing until they
//have collected 200 coins)
const slots = (quarters, min, max) => {
    let bet = 5;
    while (quarters > min) {
        let machineNum = Math.floor(Math.random() * 50);
        let yourNum = Math.floor(Math.random() * 50);
        if (machineNum === yourNum) {
            let winnings = Math.floor(Math.random() * 50) + 51;
            quarters += winnings;
            console.log(`Congrats! You won ${winnings} quarters! You now have ${quarters}!`)
        } else {
            quarters -= bet;
            console.log(`You lost ${bet} quarters. Your number was ${yourNum}, the machines was ${machineNum}. You now have ${quarters} quarters.`)
        }
    }
    console.log(`You available quarters is ${quarters}. You reached you min/max set playing values.`)
}
slots(100, 20, 300);

//Make a function that removes all values that are not numbers.
//(instead of copying to a new array)
const numbersOnly = arr => {
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] !== 'number') {
            arr.splice(i, 1);
        }
    }
    console.log(arr)
}

numbersOnly([1, "apple", -3, "orange", 0.5]);
