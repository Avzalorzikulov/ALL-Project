// function Qoshgich( a, b) {
//     return a*b
// }

// alert(Qoshgich(prompt('1-son'),prompt('2-son'))) ;


// let nimadirFunction =(a,b,c) => {
//     let sum =0;
//     if ( a % 2==0);{
//         sum = sum + a;
//     }
//     if ( b % 2==0);{
//         sum = sum + b;
//     }
//     if ( c % 2==0);{
//         sum = sum + c;
//     }
   
//     return sum;
// };
// alert(nimadirFunction(5,6,8));
// alert(nimadirFunction(24,16,18));
// alert(nimadirFunction(3,5,7));


let countMusbat = (a,b,c, d, e) => {

    if (a<0) {
        alert("1 ta manfiy son")
    }
    if (b<0) {
        alert("2 ta manfiy son")
    }
    if (c<0) {
        alert("3 ta manfiy son")
    }
    if (d<0) {
        alert("4 ta manfiy son")
    }
    if (e<0) {
        alert("5 ta manfiy son")
    }




    if (a>0) {
        alert("1 ta musbat son")    
    }
    if (b>0) {
        alert("2 ta musbat son")
    }
    if (c>0) {
        alert("3 ta musbat son")
    }
    if (d>0) {
        alert("4 ta musbat son")
    }
    if (e>0) {
        alert("5 ta musbat son")
    }
let sum =0;
return sum
}

alert(countMusbat(prompt('1-son'),prompt('2-son'),prompt('3-son'),prompt('4-son'),prompt('5-son')))