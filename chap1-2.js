//Countdown
function countDown(num){
    var newArr = [];
    for(var i = num; i >= 0; i--){
        newArr.push(i);
    }
    console.log(newArr);
    console.log(newArr.length);
}
countDown(10)

//Print and Return
function printReturn(a,b){
    var arr=[a,b]
    console.log(arr[0]);
    return arr[1];
}
printReturn(2,5)

//First Plus length
function arrSum(){
    var arr = ["Hello",3,4,12,7]
    var sum = arr[0] + arr.length
    console.log(sum);
    return sum;
}
arrSum()

//Values Greater Than Second
var arr = [1,3,5,7,9,13,2,3,12]
var newArr = []
for(i = 0; i < arr.length; i++){
    if(arr[i] > arr[1]){
        newArr.push(i);
        console.log(arr[i]);
    }
}
console.log(newArr.length)

//Values Greater Than Second, Generalized
function anyArr(arr){
    var newArr = []
    for(i = 0; i < arr.length; i++){
        if(arr.length < 2){
            console.log("Array length is less than 2")
        }
        else if(arr[i] > arr[1]){
            newArr.push(i);
            console.log(arr[i]);
        }
    }
    console.log("New Arr Length " + newArr.length)
}
anyArr([1,3,5,7,9,13,2,6,3])
anyArr([6])

//This Length That Values
