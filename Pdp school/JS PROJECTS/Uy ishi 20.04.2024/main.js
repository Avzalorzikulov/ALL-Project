let products = [
  {
      id: 1,
      name: 'iPhone',
      price: 99,
  },
  {
      id: 2,
      name: 'SmartWatch',
      price: 699,
  },
  {
      id: 3,
      name: "MacBo'q",
      price: 99,
  },
  {
      id: 4,
      name: 'iMac',
      price: 299,
  },
  {
      id: 5,
      name: 'Bluetooth Speaker',
      price: 499,
  },
];
const elList = document.querySelector('.list')
for (let item of products) {
  const elId = document.createElement('p');
  const elItem = document.createElement('li');
  const elPrice = document.createElement('p');
  const elName = document.createElement('p');
  elItem.setAttribute('class', 'item')
  elName.innerHTML = item.name
  elId.innerHTML = item.id
  elPrice.innerHTML = item.price
  elList.appendChild(elItem)
  elItem.appendChild(elPrice)
  elItem.appendChild(elName)
  elItem.appendChild(elId)
}

items.forEach(function (products) {
  if (products.price <= 500) {
      elItem.innerHTML =  ` ID: ${products.id}, Name: ${products.name}, Price: $${products.price}`;
      elList.appendChild(
          elItem);
  }
});
console.log(newArray);
