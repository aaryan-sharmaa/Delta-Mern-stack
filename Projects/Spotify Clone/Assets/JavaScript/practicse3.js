/* Qs1. Write a JS program to delete all occurrences of element ‘num’ in a given array.
Example : if arr = [1, 2, 3, 4, 5, 6, 2, 3] & num = 2
Result should be arr = [1, 3, 4, 5, 6, 3] */

//Solution-----------------------------------------#

// let arr = [1, 2, 3, 4, 5, 6, 2, 3, 2, 9, 2, 7, 10];

// let num = 2; // Element we want to remove from the Array

// for(i=0;i<arr.length;i++) {
//     if(arr[i] == num) {
//         arr.splice(i,1)
//     }
// }
// console.log(arr)

/* Qs2. Write a JS program to find the no of digits in a number.
Example : if number = 287152, count = 6 */

// let number = 123456;
// let str = number.toString();
// console.log("Number is: ",number);
// count = str.length
// console.log(`Count : ${count}`)

/* Qs3. Write a JS program to find the sum of digits in a number.
Example : if number = 287152, sum = 25 */

let number = 123;
let sum = 0;
let copy = number;
while(copy > 0){
    digit = parseInt(copy % 10);
    sum = sum + digit
}
console.log(sum)
