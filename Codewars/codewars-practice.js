
// 1 //
// Your task is to make a function that can take any non-negative integer as an
// argument and return it with its digits in descending order. Essentially, rearrange
// the digits to create the highest possible number.

//TODO
// 1.) convert the number to a string                (using toString())
// 2.) convert the string into an array of strings   (using .split())
// 3.) reverse the order of the array                (using .reverse())
// 4.) convert back into a string from an array      (using .join())
// 5.) convert the string back into a number         (using parseInt() or parseFloat())
// 6.) return the result

function descendingOrder(n){
    const reversedNum = n.toString().split("").reverse().join("");
    return parseInt(reversedNum);
}
console.log(descendingOrder(12345));



