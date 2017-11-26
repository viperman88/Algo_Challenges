//Given an array arr and a number num, multiply all values in arr
//by num, and return the changed array arr.
const scaleTheArray = (arr, num) => {
    for (var i = 0; i < arr.length; i++) {
        arr[i] *= num;
    }
    return arr;
};
console.log(scaleTheArray([2, 4, 6, 8, 10, 12, 14, 16], 10))
