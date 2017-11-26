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
