const elText = document.querySelector(".text")
const elBtn = document.querySelector(".btn")

function  sayHello() {
    elText.innerHTML += "Hello World!"
}
let myInterval = setInterval(sayHello,1000)

elBtn.onclick = () => {
    clearInterval(myInterval)
}
