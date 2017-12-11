//Let's say shirts cost $20 (including tax), but friendly Josh will give a 9%
//discount if you buy two, or a nice 19% discount if you buy three, or a sweet
//35% discount if you buy four or more. He only accepts cash and doesn't have
//coins, so you have to round up to the nearest dollar. Build a function
//shirtPricing(num) that, given how many sweatshirts you want, returns the cost.


const shirtPricing = num => {
    let shirtCost = 20;

    switch (true) {
        case (num === 2):
            shirtCost -= shirtCost * .09;
            shirtCost = Math.ceil(shirtCost * num);
            return shirtCost;
        case (num === 3):
            shirtCost -= shirtCost * .19;
            shirtCost = Math.ceil(shirtCost * num);
            return shirtCost;
        case (num > 3):
            shirtCost -= shirtCost * .35;
            shirtCost = Math.ceil(shirtCost * num);
            return shirtCost;
        default:
            return shirtCost;
    }
}
console.log(shirtPricing(2));
console.log(shirtPricing(3));
console.log(shirtPricing(5));
console.log(shirtPricing(1));

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
        counts[3] -= Math.round(counts[i] / scaling[i]) * denominations[i];
    }
    console.log(`Hour Hand: ${Math.round(counts[0])} degs, Minute Hand: ${Math.round(counts[1])} degs, Second Hand: ${Math.round(counts[2])} degs`);
};
clockHandAngles(119730)
clockHandAngles(3606)
clockHandAngles(267891)

//Create the extractDigit(num,digitNum) function that given a number and
//a digit number, returns the numeral value of that digit. 0 represents
//the ones digit, 1 represents the tens digit, etc. Given (1824,2), return
//8. Given (1824,0), return 4. Given (1824,7), return 0.

//Second: handle negative digitNum values, where -1 represents tenths digit
//(0.x), -2 represents hundredths digit (0.0x), etc. Given (123.45,-1), return 4.

//Third: handle negative num values as well, doing what you think is appropriate.

const extractDigit = (num, digitNum) => {
    num += '';
    num = num.split('').reverse().join('');
    return num[digitNum];
}
console.log(extractDigit(1824, 2))
