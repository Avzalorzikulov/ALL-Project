// function findString(arr) {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         if (typeof arr[i] === 'string') {
//             sum++
//         }
//     }
//     return sum;
// }


function findString(arr, str){
    const index = arr.indexOf(str
        , 0);
    if (index === -1) {
      console.log('The provided string is
      not present in the array');
    } else {
      console.log(`Element found at index
      ${index}`);
    }
}   

findString([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3); 