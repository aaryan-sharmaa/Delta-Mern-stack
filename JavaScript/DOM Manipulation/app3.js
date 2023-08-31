// function one(){
//     return 1;
// }
// function two(){
//     return one() + one();
// }
// function three(){
//     let ans = two() + one();
//     console.log(ans);
// }

// three();

/*

//* Callback Hell Example-1

let h1 = document.querySelector("h1");

function changeColor(color, delay, nextColorChange) {
  setTimeout(() => {
    h1.style.color = color;
    if (nextColorChange) nextColorChange();
  }, delay);
}

changeColor("red", 1000, () => {
  changeColor("blue", 800, () => {
    changeColor("green", 800, () => {
      changeColor("purple", 800, () => {
        changeColor("Aqua", 800, () => {
          changeColor("maroon", 800, () => {
            changeColor("grey", 800, () => {
              changeColor("#4c5fd5", 800, () => {
                changeColor("#1db954", 800);
              });
            });
          });
        });
      });
    });
  });
});
*/

//! Callback Hell Example-2

// function saveToDb(data, success, failure) {
//   let interSpeed = Math.floor(Math.random() * 10) + 1;
//   if (interSpeed > 4) {
//     success();
//   } else {
//     failure();
//   }
// }

// saveToDb(
//   "Aryan",
//   () => {
//     console.log("Success : Date saved successfully");
//     saveToDb(
//       "Shivam",
//       () => {
//         console.log("Success2 : Date saved successfully");
//         saveToDb(
//           "Pratyush",
//           () => {
//             console.log("Success3 : Date saved successfully");
//           },
//           () => {
//             console.log("Failure3 : Poor internet connection! Data not saved");
//           }
//         );
//       },
//       () => {
//         console.log("Failure2 : Poor internet connection! Data not saved");
//       }
//     );
//   },
//   () => {
//     console.log("Failure : Weak internet connection! Data not saved");
//   }
// );

//! Promises in JavaScript

/*
function saveToDb(data) {
  return new Promise((resolve, reject) => {
    let interSpeed = Math.floor(Math.random() * 10) + 1;
    if (interSpeed > 4) {
      resolve("Success : Date saved successfully");
    } else {
      reject("Failure : Weak internet connection! Data not saved");
    }
  });
}

saveToDb("Aryan")
  .then((result) => {
    console.log("data1 saved. promise was resolved");
    console.log( `result of promise : ${result}`)
    return saveToDb("Shivam");
  })
  .then((result) => {
    console.log("data2 saved. promise was resolved");
    console.log( `result of promise : ${result}`)
    return saveToDb("Pratyush");
  })
  .then((result) => {
    console.log("data3 saved. promise was resolved");
    console.log( `result of promise : ${result}`)
    return saveToDb("Raj");
  })
  .then((result) => {
    console.log("data4 saved. promise was resolved");
    console.log( `result of promise : ${result}`)
  })
  .catch((error) => {
    console.log("promise was rejected");
    console.log( `error of promise : ${error}`)
  });
*/
/*
//*  Promises Example-2

let h1 = document.querySelector("h1");

function changeColor(color, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      h1.style.color = color;
      resolve("color changed");
    }, 1000);
  });
}

changeColor("red", 1000)
  .then(() => {
    return changeColor("blue", 1000);
  })
  .then(() => {
    return changeColor("green", 1000);
  })
  .then(() => {
    return changeColor("purple", 1000);
  })
  .then(() => {
    return changeColor("maroon", 1000);
  })
  .then(() => {
    return changeColor("violet", 1000);
  });
*/

//! Async Function

// async function hello() {
//   throw "Page 404 not found";
//   return "hello";
// }

// hello()
//   .then((result) => {
//     console.log("Promise was resolved");
//     console.log("result was :", result);
//   })
//   .catch((error) => {
//     console.log("promise was rejected with error:", error);
//   });

// let h1 = document.querySelector("h1");

// function changeColor(color, delay) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       h1.style.color = color;
//       resolve("color changed");
//     }, delay);
//   });
// }

// async function change() {
//   await changeColor("red", 1000);
//   await changeColor("blue", 1000);
//   await changeColor("green", 1000);
//   await changeColor("purple", 1000);
//   await changeColor("maroon", 1000);
//   changeColor("violet", 1000);
// }

//! Handling Rejections

// let h1 = document.querySelector("h1");

// function changeColor(color, delay) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       let num = Math.floor(Math.random() * 5) + 1;
//       if (num > 3) {
//         reject("Promise rejected");
//       }
//       h1.style.color = color;
//       resolve("color changed");
//     }, delay);
//   });
// }

// async function change() {
//   try {
//     await changeColor("red", 1000);
//     await changeColor("blue", 1000);
//     await changeColor("green", 1000);
//     await changeColor("purple", 1000);
//     await changeColor("maroon", 1000);
//   } catch (err) {
//     console.log("error caught");
//     console.log(err);
//   }
//   let x = 5;
//   console.log(x);
// }


