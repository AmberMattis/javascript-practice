function lineBrake(){

    return "==============================================================================";
}



// 1 //
// Your task is to make a function that can take any non-negative integer as an
// argument and return it with its digits in descending order. Essentially, rearrange
// the digits to create the highest possible number.

//TODO
// 1.) convert the number to a string                                            (using toString())
// 2.) convert the string into an array of strings                               (using .split())
// 3.) sort the array so that the numbers are listed in ascending order          (using .sort())
// 3.) reverse the order of the array                                            (using .reverse())
// 4.) convert back into a string from an array                                  (using .join())
// 5.) convert the string back into a number                                     (using parseInt() or parseFloat())
// 6.) return the result

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


//Complete the solution so that it reverses the string passed into it.
// Ex: 'world'  =>  'dlrow'

function solution(str){
    return str.split("").reverse().join("");
}











