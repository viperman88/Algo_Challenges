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
