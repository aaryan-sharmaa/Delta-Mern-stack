// =======================* guess the movie *============================*
// let n = prompt("Write your number : ");
// n = parseInt(n);
// for ( let i = n; i<=n*10; i = i + n){
//     console.log(i)
// }
const favMovie = "JohnWick";

let guess = prompt("Guess fav movie : ");

while (guess != favMovie) {
    if (guess == "quit") {
        console.log("you quit!");
            break;
    }
    guess = prompt("wrong guess. please try again");
}

if (guess == favMovie) {
    console.log(`Congrats You Win!`);
}

// ======================================================================*

// ==========================* to do list *==============================*
// let todo = [];

// let choice = prompt(`Please Enter your choice :`);
// while (true) {
//     if (choice == "quit") {
//     console.log(`quitting app..`);
//     break;
//     }
//     if (choice == "list") {
//         console.log(`===============`);
//         for (let i = 0; i < todo.length; i++) {
//         console.log(i, todo[i]);
//         }
//         console.log(`===============`);
//     } else if (choice == "add"){
//         let itemToAdd = prompt("Enter the task to add:");
//         todo.push(itemToAdd);
//         console.log(`Task Added`);
//     } else if (choice == "delete") {
//         let idx = prompt(`please enter task index you want to delete`);
//         todo.splice(idx , 1); // splice method returns
//         console.log(` deleted successfully `);
//     } else {console.log(`Wrong choice enetered...`)}

//     choice = prompt(`Please Enter your choice :`);
// }

