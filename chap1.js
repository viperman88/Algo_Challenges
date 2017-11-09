// setting & swapping

var myNumber = 42;
var myName = "Robert";
var temp = myNumber;
myNumber = myName;
myName = temp;
console.log(myNumber,myName);

// print -52 to 1066

for(var i = -52; i <= 1066; i++){
    console.log(i);
}

// dont worry be happy

function beCheerful(){
    for(var i = 1; i < 99; i++){
        console.log("good morning!")
    }
}
beCheerful()

//multiples of three but not all

for(var i = -300; i <= 0; i += 3){
  if(i == -3 || i == -6){
    continue;
  }
  else{
    console.log(i);
  }
}

// printing integers with while

var num = 2000;
while(num <= 5280){
    console.log(num);
    num++;
}

// you say it's your birthday

function birthday(day,month){
    var myDay = 20;
    var myMonth = 11;
    if(day == myDay && month == myMonth){
        console.log("How did you know!");
    }
    else{
        console.log("Just another day.");
    }
}
birthday(20,12)

// leap year

function leapYear(year){
    if(year % 4 ===0 && year % 100 !== 0){
        console.log("It's a leap year");
    }
    else if(year % 100 === 0 && year % 400 ===0){
        console.log("It's also a leap year");
    }
    else{
        console.log("Just a regular ol year!")
    }
}
leapYear(2400)

// print & countdown

var count = 0;
for(var i = 512; i <= 4096; i++){
    if(i % 5 ===0){
        console.log(i);
        count += 1;
    }
}
console.log(count);

// the final countdown

function finalCountdown(param1,param2,param3,param4){
    num = param2
    while(num <= param3){
        if(num == param4){
            num += 1;
            continue;
        }
        else if(num % 3 === 0){
            console.log(num);
        }
        num += 1;
    }
}
finalCountdown(3,5,17,9)
