// let startimg = document.getElementsByClassName("bottomimg");
// for(i=0;i<startimg.length;i++){
//     startimg[i].src = "Assets/Spider-Man.png"
//     console.log(`images changed`)
// }

// let newObj = document.getElementsByClassName("creationDev");
// let newP = document.createElement("p");
// newP.innerText = "Hey I'm Red!"
// newObj[0].appendChild(newP);

//Practice Question
let para1 = document.createElement("p");
para1.innerText = "Hey I'm Red!";
let body = document.querySelector("body");
body.append(para1);
para1.classList.add("red");

let para2 = document.createElement("h3");
para2.innerText = "I'm Blue h3!";
body.append(para2);
para2.classList.add("blue");

let div = document.createElement("div");
let h1 = document.createElement("h1");
let para3 = document.createElement("p");

div.append(h1);
div.append(para3);

h1.innerText = "I am in a div";
para3.innerText = "ME TOO!";

div.classList.add("box");
body.append(div);

//Assignment question

let btn = document.createElement("button");
btn.innerText = "click me!";
body.append(btn);

btn.id = "btn";

body.querySelector("btn");
btn.classList.add("btn");

let head = document.createElement("h1");
head.innerText = "DOM Practice";
body.append(head);
head.classList.add("h");

let para4 = document.createElement("p");
para4.innerHTML = "Apna College <b>Delta</b> Practice";
body.append(para4);
console.dir(para4);
