const elForm =document.querySelector(".form")
const elInput =document.querySelector(".username")
const eltext =document.querySelector(".text")

elForm.onsubmit = (evt) =>{
    evt.preventDefault();
    localStorage.setItem("name", elInput.value);
    eltext.innerHTML = "hi, " + localStorage.getItem("name")
}
eltext.innerHTML = "hi, " + localStorage.getItem("name")