function lineBrake(){

    return "==============================================================================";
}



// 1 //
// Your task is to make a function that can take any non-negative integer as an
// argument and return it with its digits in descending order. Essentially, rearrange
// the digits to create the highest possible number.

function descendingOrder(n){
    const reversedNum = n.toString().split("").sort().reverse().join("");
    return parseInt(reversedNum);
}
console.log(descendingOrder(12345));

console.log("")
console.log(lineBrake());
console.log("")


// Above code refactored //
function descendingOrderRefactored(n){
    return parseInt(n.toString().split("").sort().reverse().join(""));
}
console.log(descendingOrderRefactored(3984858));

console.log("")
console.log(lineBrake());
console.log("")






// 2 //
//In this little assignment you are given a string of space separated numbers,
// and have to return the highest and lowest number.

//The map() method creates a new array populated with the
// results of calling a provided function on every element in the calling array.

//the apply() method is a convenient way to pass an array of data as parameters to a function.

//Math.max() grabs the highest element in an array
//Math.min() grabs the lowest number in an array

function highAndLow(numbers){
    let numbers1 = numbers.split(' ').map(Number);
    return Math.max.apply(Math, numbers1) + ' ' + Math.min.apply(Math, numbers1);
}

console.log(highAndLow("1 4 6 7 9 -2"));

console.log("")
console.log(lineBrake());
console.log("")



//3//
//Complete the solution so that it reverses the string passed into it.
// Ex: 'world'  =>  'dlrow'

function solution(str){
    return str.split("").reverse().join("");
}

//alternate solution
function solutionAlt(s){
    var o = '';
    for (var i = s.length - 1; i >= 0; i--)
        o += s[i];
    return o;
}




//4//
// Complete the square sum function so that it squares each number passed into it and then sums the results together.
// For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.

//my solution//
function squareSum(numbers){

    let sum = 0;

    for (i = 0; i < numbers.length; i++){
        numbers[i] *= numbers[i];
        sum += numbers[i];
    }
    return sum;
}

// alternate solutoin //

function squareSum(numbers){
    return numbers.reduce(function(sum, n){
        return (n*n) + sum;
    }, 0)
}













