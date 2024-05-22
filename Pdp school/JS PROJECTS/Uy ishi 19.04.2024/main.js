// let  numbers = [1, -2, 3, 4, -5, 6, 7, -8]

// let sum = 1;    

// numbers.forEach(function (el) {
//   if (el > 0  ) {
//     sum = sum * el;
//   }
// });

// console.log(sum);


// let sum = 0;

// numbers.forEach((ell) => {
//   if (ell > -5 && ell < 5) {
//     return (sum += ell);
//   }
// });
// console.log(sum);


let types = [6, true, "salom", {}, [], 8, 9];
let sum = [];

types.forEach((element) => {
  sum.push(typeof element);
});
console.log(sum);