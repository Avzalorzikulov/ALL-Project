const API1 = "https://jsonplaceholder.typicode.com/posts"
const API2 = "https://jsonplaceholder.typicode.com/comments"
const elList = document.querySelector(".js-list")

fetch(API1).then((res)=>res.json()).then((data)=>render(data))
fetch(API2).then((res)=>res.json()).then((data)=>render(data))

function render(array) {
    elList.innerHTML = ""
    if (array.length == 0) {
        elText.innerHTML = "Bunday mahsulot mavjud emas!"
    }
    array.forEach((el) => {
        elList.innerHTML += `
        <li class="js-item">
        <p class="item-id">ID: ${el.id}</p>
        <p class="item-title">${el.title}</p>
        <p class="item-body">${el.body}</p>
        </li>
        `
    })
}
