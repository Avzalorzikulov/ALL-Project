const itemId = new URLSearchParams(window.location.search).get("id");
const elBody = document.querySelector("body");
const elList1 = document.querySelector(".list");
const elList2 = document.querySelector(".js-list");

function renderDetail(nod) {
  const product = chairs.find((el) => el.id == itemId);
  nod.innerHTML = `
  <li class="itemm">
        <img src="${product.image}" alt="this is chair img" class="div-img">
    <div class="div">
        <h3 class="div-title">${product.name}</h3>
        <h5 class="price">$${product.price}</h5>
        <div class="btn-div">
            <button class="btn-1">Check Out</button>
            <button class="btn-2">Add To Cart</button>
        </div>
        <p class="div-description">${product.description}</p>
    </div>
</li>
`;
}
renderDetail(elList1);



const elList = document.querySelector(".js-list");

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
