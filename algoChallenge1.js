
//Print all integer multiples of 5, from 512 to 4096. Afterward, also log how many there were.
var sum = 0;
for (var i = 512; i <= 4096; i++) {
    if (i % 5 === 0) {
        console.log(i);
        sum++;
    }
}
console.log("this is sum" + " " + sum);

//Print multiples of 6 up to 60, 000, using a WHILE.
var i = 0;
while (i < 1000) {
    if (i % 6 === 0) {
        console.log(i);
    }
    i++;
}

//Print integers 1 to 100. If divisible by 5, print "Coding" instead. If by 10, also print " Dojo".
for (var i=1 ; i < 101; i++) {
    if (i % 10===0 ){
        console.log("Coding Dojo");
    } else if (i % 5 === 0) {
        console.log("Coding");
    } else {
        console.log(i);
    }
}

//Your function will be given an input parameter incoming. Please console.log this value.
function someValue(incoming) {
    console.log(incoming);
}
someValue("Whatever you input")

//Add odd integers from -300 to 300, and console.log the final sum. Is there a shortcut?
function oddIntegers(start, end) {
    var sum=0 ;
    for (var i=s tart; i <=e nd; i++) {
        if (i % 2==1 ) {
            sum +=i ;
        }
    } console.log("this is the sum of odd integers " + sum);
}
oddIntegers(-300, 300)

//Log positive numbers starting at 2016, counting down by fours (exclude 0), without a FOR loop.
var i = 2016;
while (i> 0) {
    console.log(i);
    i -= 4;
}

//Based from earlier “Countdown By Fours”, given (lowNum, highNum, mult), print
//the numbers in multiples of mult from highNum down to lowNum, using a FOR loop.
//Example: For (2,9,3), print 9 6 3 (on successive lines).
function countdown(lowNum, highNum, mult) {
    for (var i = highNum; i >= lowNum; i--) {
        if (i % mult === 0) {
            console.log(i + " is a multiple of " + mult);
        }
    }
}
countdown(0, 227, 13)

//Given 4 parameters (param1,param2,param3,param4), print the multiples of param1, starting at
//param2 and extending to param3. One exception: if a multiple is equal to param4, then skip
//(don’t print) that one. Do this using a WHILE loop.
//Example: Given (3,5,17,9), print 6,12,15 (which are all of the multiples of 3 between 5 and 17,
//except for the value 9).
function countdown(param1, param2, param3, param4) {
    var i = param2;
    while (i <= param3) {
        if (i == p aram4) {
            i++;
            continue;
        }
        if (i % param1 === 0) {
            console.log(i + " is a multiple of " + param1);
        }
        i++;
    }
}
countdown(13, 0, 299, 52)
