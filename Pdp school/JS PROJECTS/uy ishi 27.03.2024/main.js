// --------------------------------------1 chi topshiriq----------------------------------------
// function typeTopgich(arr) { 
//     let  result = [];
//     for ( let  i = 0; i < arr.length; i++) {
//       result.push(typeof arr[i]);
//     }
//     return result;
//   }
//   const a = [1, 'hello', true, null, [],  'Alice', 1, 2, 3];
//   const b = typeTopgich(a);
//   console.log(b);   
// --------------------------------------2 chi topshiriq----------------------------------------
// function stringAylantirgich(arr) {
//     let result = [];
//     for (let i = 0; i < arr.length; i++) {
//         result.push(String(arr[i]));
//     }
//     return result;
// }

// let arr = [1, true,  "John" , undefined, null];
// console.log(stringAylantirgich(arr)); 
// --------------------------------------3 chi topshiriq----------------------------------------
function ikkigaKupaytirgcih(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        result.push(arr[i] * 2);    
    }
    return result;
}

let arr = [1, 2, 3, 4, 5];
console.log(ikkigaKupaytirgcih(arr)); 

