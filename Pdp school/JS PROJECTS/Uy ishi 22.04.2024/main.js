let products = [
  {
    id: 1,
    name: "Smart Watch",
    price: 399,
  },
  {
    id: 2,
    name: "Blooteh Speaker",
    price: 499,
  },
  {
    id: 3,
    name: "Iphone",
    price: 999,
  },
  {
    id: 4,
    name: "Macbook",
    price: 1199,
  },
  {
    id: 5,
    name: "Imac",
    price: 2499,
  },
];

const elList = document.querySelector(".js-list");
const elForm = document.querySelector(".form");
const elInput = document.querySelector(".input");
const elInput2 = document.querySelector(".input2");
const elBtnPrice = document.querySelectorAll(".btn-sort")[0];
const elBtnName = document.querySelectorAll(".btn-sort")[1];

function renderList(array) {
  elList.innerHTML = "";
  if (array.length == 0) {
    elText.innerHTML = "Bunday mahsulot mavjud emas!";
  }
  array.forEach((el) => {
    elList.innerHTML += `
    <li class="js-item">
    <p class="item-id">ID: ${el.id}</p>
    <h3 class="item-name">Name: ${el.name}</h3>
    <p class="item-price">Price: ${el.price}$</p>
    </li>`;
  });
}

elBtnPrice.onclick = () =>{
  products.sort(function(a,b){
    if (a.name > b.name)return 1;
    else return -1;
  })
  renderList(products);  
}
elBtnName.onclick = () =>{
  products.sort(function(a,b){
    if (a.price > b.price)return 1;
    else return -1;
  })
  renderList(products);  
}
for (let product of products) {
  elList.innerHTML += `<li class="js-item">
      <p class="js-id">${product.id}</p>  
      <h3 class="js-name">${product.name}</h3>
      <strong class="js-price">${product.price}</strong>
      <p class="js-desc">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, magni.
      </p>
    </li>`;
}

elForm.addEventListener("submit", function (e) {
  e.preventDefault();
  console.log(elInput.value);
  const filteredArray = products.filter(function (el) {
    return el.price > elInput.value && el.price < elInput2.value;
  });
  console.log(filteredArray);

  elList.innerHTML = "";
  for (let product of filteredArray) {
    elList.innerHTML += `<li class="js-item">
    <p class="js-id">${product.id}</p>
    <h3 class="js-name">${product.name}</h3>
    <strong class="js-price">${product.price}</strong>
    <p class="js-desc">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, magni.
    </p>
  </li>`;
  }
});
