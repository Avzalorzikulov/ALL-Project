// let k = +prompt(" Oyni kiriting");
// switch (k) {
//   case 1:
//     alert("31");
//     break;
//   case 2:
//     alert("29");
//     break;
//   case 3:
//     alert("31");
//     break;
//   case 4:
//     alert("30");
//     break;
//   case 5:
//     alert("31");
//     break;
//   case 6:
//     alert("30");
//     break;
//   case 7:
//     alert("31");
//     break;
//   case 8:
//     alert("31");
//     break;
//   case 9:
//     alert("30");
//     break;
//   case 10:
//     alert("31");
//     break;
//   case 11:
//     alert("30");
//     break;
//   case 12:
//     alert("31");
//     break;

//   default:
//     alert("1-12 son kiriting");
// } 

let ogirlik = +prompt(" Og'irlikni kiriting");
let birlig = +prompt("Birligni kiriting");
switch (birlig) {
  case 1:
    alert(ogirlik + "kilogram");
    break;
  case 2:
    alert(ogirlik  / 1000000 + "kilogram");
    break;
  case 3:
    alert(ogirlik / 1000  + "kilogra");
    break;
  case 4:
    alert(ogirlik * 1000 + "kilogram");
    break;
    case 5:
        alert(ogirlik * 100 + "kilogram");
        break;
        default:
    alert("1-5 son kiriting");
}