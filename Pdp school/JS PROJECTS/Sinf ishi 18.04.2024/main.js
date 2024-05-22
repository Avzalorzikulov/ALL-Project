// let numbers = [6, true, "sgsdf", {}, [], 8, 9, 9,];

// let sum = 0;    

// numbers.forEach(function (el) {
//   if (typeof el === "number") {
//     sum++
//   } 
// });

// console.log(sum);

                   
let  numbers = [1, -2, 3, 4, -5, 6, 7, -8]

let sum = 1;    

numbers.forEach(function (el) {
  if (el > 0  ) {
    sum = sum * el;
  }
});

console.log(sum);
