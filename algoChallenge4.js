//Given an array arr and a number num, multiply all values in arr
//by num, and return the changed array arr.
const scaleTheArray = (arr, num) => {
    for (var i = 0; i < arr.length; i++) {
        arr[i] *= num;
    }
    return arr;
};
console.log(scaleTheArray([2, 4, 6, 8, 10, 12, 14, 16], 10));

//Stan learned something today: that reducing an array’s .length
//immediately shortens it by that amount. Given array arr and number
//X, remove all except the last X elements, and return arr (changed
//and shorter). Given ([2,4,6,8,10],3), change the given array to
//[6,8,10] and return it.
const onlyKeepLastFew = (arr, x) => {
    let newArr = arr.slice(x, arr.length);
    return newArr;
}
console.log(onlyKeepLastFew([1, 2, 3, 4, 5, 6, 7, 8, 9], 4));

//Kenny tries to stay safe, but somehow everyday something
//happens. If there is a 10% chance of volcano, 15% chance
//of tsunami, 20% chance of earthquake, 25% chance of
//blizzard, and 30% chance of meteor strike, In this new
//function test for each disaster independently, instead of
//assuming exactly one disaster will happen. In other words,
//with this new function, all five might occur today

const whatHappensToday = () => {
    let chance = Math.random();
    if (chance <= .1) {
        console.log('volcano');
    }
    if (chance <= .15) {
        console.log('tsunami');
    }
    if (chance <= .2) {
        console.log('earthquake');
    }
    if (chance <= .25) {
        console.log('blizzard');
    }
    if (chance <= .3) {
        console.log('meteor strike');
    }
    console.log(chance);
};

whatHappensToday();

//Your time with us will definitely make you smarter!
//Let’s say a new Dojo student, Bogdan, entered with a
//modest IQ of 101. How smart would Bogdan be at the
//end of the bootcamp, if his IQ rose by .01 on the
//first day, then went up by an additional .02 on the
//second day, up by .03 more on the third day, etc….
//all the way until increasing by .98 on his 98th day
//(the end of 14 full weeks)?
const soaringIQ = (iq) => {
    let iqRise = 0.01;
    for (let i = 1; i <= 98; i++) {
        iq += iqRise;
        iqRise += 0.01;
        //console.log(iq);
    }
    return iq;
};
console.log(soaringIQ(101));

//Mr. Cerise teaches high school math. Write a function
//that assigns and prints a letter grade, given an integer
//representing a score from 0 to 100? Those getting 90+
//get an ‘A’, 80-89 earn ‘B’, 70-79 is a ‘C’, 60-69 should
//get a ‘D’, and lower than 60 receive ‘F’.
//Example: given 88, you should log "Score:88. Grade: B".
//Given the score 61, log the string "Score: 61. Grade: D".
const letterGrade = (grade) => {
    if (grade < 60) {
        console.log(`Score: ${grade}, Grade: F`);
    } else if (grade < 70) {
        console.log(`Score: ${grade}, Grade: D`);
    } else if (grade < 80) {
        console.log(`Score: ${grade}, Grade: C`);
    } else if (grade < 90) {
        console.log(`Score: ${grade}, Grade: B`);
    } else {
        console.log(`Score: ${grade}, Grade: A`);
    }
};
letterGrade(58);
letterGrade(63);
letterGrade(72);
letterGrade(87);
letterGrade(98);

//Mr. Cerise teaches high school math. Write a function
//that assigns and prints a letter grade, given an integer
//representing a score from 0 to 100? Those getting 90+
//get an ‘A’, 80-89 earn ‘B’, 70-79 is a ‘C’, 60-69 should
//get a ‘D’, and lower than 60 receive ‘F’.
//Example: given 88, you should log "Score:88. Grade: B".
//Given the score 61, log the string "Score: 61. Grade: D".

//For an additional challenge, add ‘-’ signs to scores in
//the bottom two percent of A, B, C and D scores, and “ +”
//signs to the top two percent of B, C and D scores
//(sorry, Mr. Cerise never gives an A+).

//Example: Given 88, console.log "Score: 88. Grade: B+".
//Given 61, log "Score: 61. Grade: D-".
const letterGrade = (grade) => {
    console.log(`Score: ${grade}, Grade: ${gradingTable(grade)}`);
};

const gradingTable = (grade) => {
    if (grade < 60) {
        return 'F';
    } else if (grade >= 60 && grade <= 62) {
        return 'D-';
    } else if (grade >= 68 && grade < 70) {
        return 'D+';
    } else if (grade > 62 && grade < 68) {
        return 'D';
    } else if (grade >= 70 && grade <= 72) {
        return 'C-';
    } else if (grade >= 78 && grade < 80) {
        return 'C+';
    } else if (grade > 72 && grade < 78) {
        return 'C';
    } else if (grade >= 80 && grade <= 82) {
        return 'B-';
    } else if (grade >= 88 && grade < 90) {
        return 'B+';
    } else if (grade > 82 && grade < 88) {
        return 'B';
    } else if (grade >= 90 && grade <= 92) {
        return 'A-';
    } else if (grade > 92) {
        return 'A';
    }
};
//Alternate way using switch statement
const gradingTable = (grade) => {
    switch (true) {
        case (grade < 60):
            return "F";
        case (grade >= 60 && grade <= 62):
            return "D-";
        case (grade >= 68 && grade <= 70):
            return "D+";
        case (grade >= 62 && grade < 68):
            return "D";
        case (grade >= 70 && grade <= 72):
            return "C-";
        case (grade >= 78 && grade < 80):
            return "C+";
        case (grade >= 72 && grade < 78):
            return "C";
        case (grade >= 80 && grade <= 82):
            return "B-";
        case (grade >= 88 && grade < 90):
            return "B+";
        case (grade >= 82 && grade < 88):
            return "B";
        case (grade >= 90 && grade <= 92):
            return "A-";
        case (grade > 92):
            return "A";
    }
};
letterGrade(58);
letterGrade(69);
letterGrade(65);
letterGrade(61);
letterGrade(79);
letterGrade(75);
letterGrade(71);
letterGrade(89);
letterGrade(85);
letterGrade(81);
letterGrade(99);
letterGrade(92);
