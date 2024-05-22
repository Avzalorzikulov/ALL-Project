const elText = document.querySelector(".text")

let soat = +prompt("Soatni  kiriting")
let min = +prompt("Daqiqani  kiriting")
let sec = +prompt("Soniyani kiriting")

function timer() {
    if (soat == 0 && min == 0 && sec == 0) {
        elText.innerHTML = "Time is up"
        elText.style.color = "red"
    }
    else {
        sec--
        if(sec <0) {
            min--
            sec = 59
        }
        if(min <0) {
            soat--
            min = 59
        }
        elText.innerHTML = soat + ":" + min + ":" + sec
    }
}

setInterval(timer,1000)