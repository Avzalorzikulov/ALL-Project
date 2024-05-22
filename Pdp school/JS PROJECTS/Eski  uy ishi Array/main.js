
// -----------------------------------------1chi topshiriq-----------------------------------------------

const elText =document.querySelector('.text');
const elForm =document.querySelector('.form');
const elInput =document.querySelector('.input');
const elStatus =document.querySelector('.status');


let cars = []
elForm.addEventListener('submit', function (evt) {
    evt.preventDefault();
    if (!elInput.value) {
        elStatus.innerHTML = 'Bush narsa kiritmang'
        elStatus.style.color = 'red';
    }
  
    else{
        cars.push(elInput.value); 
        elText.innerHTML = cars;
        elInput.value = '';
    }
});
    
   

elText.innerHTML = cars;
 

// -----------------------------------------2 chi topshiriq----------------------------------------------------

// -------------------------------2chi topshiriqni 1 chi vazifasi------------------------------------
// const first = +prompt(' 1 chi sonni kiriting')
// const second = +prompt(' 2 chi sonni kiriting')
// function obshiy(first, second) {
//     return [first, second];
//   }
  
// alert(`${first}; ${second}`); 
// -------------------------------2chi topshiriqni 2 chi vazifasi!!!------------------------------------


// function birinchiSon(numbers) {
//       return numbers[0];
//   }
//   const array = [1, 2, 3, 4, 5];
// alert(birinchiSon(array)); // Output: 1

// -------------------------------2chi topshiriqni 3 chi vazifasi------------------------------------
// function sonQushivchi(num) {
//     if (typeof num === 'number') {
//       return num + 1;
//     } 
//   }
//   alert(sonQushivchi(5)); 
// -------------------------------2chi topshiriqni 4 chi vazifasi------------------------------------

// function perimetrUchburchak(keng, uzun) {
//     if (typeof keng === 'number' && typeof uzun === 'number') {
//       return  keng * uzun/2;
//     } 
//   }

//   alert(perimetrUchburchak(5, 6)); 
// -------------------------------2chi topshiriqni 5 chi vazifasi------------------------------------

// function calculatorAge(age) {
//     if (typeof age === 'number' && age > 0) {
//       return age * 365;
//     } 
//   }

//   alert(calculatorAge(35)); 
