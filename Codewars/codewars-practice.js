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

function highAndLow(numbers){
    numbers = numbers.split(' ').map(Number);
    return Math.max.apply(0, numbers) + ' ' + Math.min.apply(0, numbers);
}
console.log(highAndLow(123343591-1));

console.log("")
console.log(lineBrake());
console.log("")








