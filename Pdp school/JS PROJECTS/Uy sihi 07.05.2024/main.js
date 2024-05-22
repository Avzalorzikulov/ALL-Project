//  1 chi vazifa
// let arr = [ "orange", "lemon", "banan","olma", "apple", ]
// arr.splice(2,2)
// console.log(arr);
// 2 chi vazifa
// let arr = [ "banan", "melon", "lemon","olma", "mango", ]
// arr.splice(1,1)
// arr.splice(2,1)
// console.log(arr);

const elList = document.querySelector(".js-list");
const elItem = document.querySelector(".js-item");
const elPrice = document.querySelector(".js-price");
const elTitle = document.querySelector(".js-Title");

function renderList(array) {
  elList.innerHTML = "";
  array.forEach((el) => {
    elList.innerHTML += `
    <li class="item">
     <a href="./new.html?id=${el.id}" ><img style="width:200px; height:auto" src="${el.image}" class="img"></a>
            <h3 style="width: 150px; display: inlene-block; margin: 0 auto; margin-bottom: 7px;" class="name">${el.name}</h3>
            <strong style="display: block;" class="price">${el.price} $</strong>
        </li>
    `;
  });
}
renderList(chairs);
