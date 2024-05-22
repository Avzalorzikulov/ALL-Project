const elInputName = document.querySelector(".js-input");
const elInputAge = document.querySelector(".js-input2");
const elInputLocation = document.querySelector(".js-input3");
const elForm = document.querySelector(".js-form");
const elList = document.querySelector(".list");
const elBtn = document.querySelector(".js-button");

let users = [];
elForm.onsubmit = (evt) => {
  evt.preventDefault();
  users.push({
    id: Date.now(),
    name: elInputName.value,
    age: elInputAge.value,
    city: elInputLocation.value,
  });
  localStorage.setItem("users", JSON.stringify(users));
  render(JSON.parse(localStorage.getItem("users")), elList);
  console.log(users);
  elInputName.value = "";
  elInputAge.value = "";
  elInputLocation.value = "";
};
function render(array, list) {
  let count = 1;
  list.innerHTML = "";
  array.forEach((el) => {
    list.innerHTML += ` <li id=${el.id} class="js-item">
  <span class="item-name"> ${el.name} </span>
  <span class="item-age">${el.age}</span>
  <span class="item-city">${el.city}</span>
  <button class="delete-btn">delete</button>
<button class="edit-btn">edit</button>
  </li>`;
    count++;
  });
}
render(JSON.parse(localStorage.getItem("users")), elList);

function func() { 
  document.body.onclick = (evt) => {
    if (evt.target.classList.contains("delete-btn")) {
      users = users.filter((item) => item.id != evt.target.parentElement.id);
      localStorage.setItem("users", JSON.stringify(users));
      render(JSON.parse(localStorage.getItem("users")), elList);

    }
    
if (evt.target.classList.contains("edit-btn")) {
  users =JSON.parse(localStorage.getItem("users"));
  let editElement = users.find(
    (el)=>el.id ==evt.target.parentElement.id
  )

  let index = users.indexOf(editElement);
  console.log(index);

  elInputName.value = editElement.name
  elInputAge.value = editElement.age
  elInputLocation.value = editElement.city
  elForm.onsubmit = (evt) => {
    evt.preventDefault();
    users.splice(index, 1,{
      id: Date.now(),
      name: elInputName.value,
      age: elInputAge.value,
      city: elInputLocation.value,
    } )
    localStorage.setItem("users", JSON.stringify(users));
    render(JSON.parse(localStorage.getItem("users")), elList);
    console.log(users);
    elInputName.value = "";
    elInputAge.value = "";
    elInputLocation.value = "";
  };
  console.log(editElement);
  console.log("edit element bodildi");
}
  };

}
func();

