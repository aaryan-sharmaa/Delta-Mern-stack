//*Creating a function
/*
    function poem(){
        console.log("Twinkle Twinlle little star ");
    }

    poem()

    function diceRoll(){
        let randomNum = Math.floor(Math.random()*6) + 1;
        console.log(randomNum) 

    }

    diceRoll()
    */
//*Creating a funtion with arguments
/*
    function nameInfo(Name, age){
        console.log(Name, age);
    }

nameInfo("Aryan", 18);
nameInfo("Shivam", 18);
nameInfo("Ojal", 18); 
nameInfo("Raj");
nameInfo(age=18);   
*/

//Funtion that gives us the average of three number
/*
function avgNum(a, b ,c){
    avg = (a+b+c)/3;
    console.log(avg);
}

avgNum(2,4,5);
avgNum(5,10,15);
avgNum(10,20,30);
*/

//*Creating a function that prints multiplication table of a number

// function mulTable(num){
//     for(let i=num ; i<=num*10; i+=num ){
//         console.log(i);
//     }
// }
// mulTable(5);
// mulTable(17);
// mulTable(19);

// function sum(a, b){
//     return a+b;
// }
// console.log(sum(sum(5,8),3));

//
// function getSum(num){
//     let sum=0;
//     for(let i=1 ; i<=num; i++ ){
//         sum+=i;
//     }
//     return sum;
// }
// console.log(getSum(10))

//*Arrow function

// const pow = (a, b) => {
//   return a ** b;
// };

// const square = n => {
//   return n * n ;
// };
//  const mul = (a,b) => (
//     a * b
//  );
//*setTimeout & setInterval function
//Practise ques=====================

// let id = setInterval(()=>{
//     console.log("HellO World!")
// } ,2000);

// setTimeout(() => {
//     clearInterval(id)
// },10000);

//* Write an arrow function named isEven() that takes a single number as argument and returns if it is even or not.
// const isEven = n => {
//     n%2==0   {
//         console.log("Number is even")
//     } else {console.log("Number is not even")}
// }

//* Write an arrow function named arrayAverage that accepts an array of numbers and returns the average of those numbers.
// arr=[10,10,10,10]
// const arrayAverage = (arr) => {
//     let sum = 0;
//     for(i=0;i<arr.length;i++){
//          sum = sum + arr[i];   
//     };
//     const avg = sum/arr.length;
//     return avg;
// };
// const object = {
//     message: 'Hello, World!',

//     logMessage() {
//         console.log(this.message);
//     }
// };
// setTimeout(object.logMessage, 1000);
let length = 4;
function callback() {
    console.log(this.length);
};
const object = {
    length: 5,
    method(callback) {
        callback();
    },
};
object.method(callback, 1, 2);