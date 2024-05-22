// -------------------------------------1 chi topshiriq--------------------------------------
// const elList =document.querySelector('.list')
// const elItem= document.querySelector('.item')

// elItem.innerHTML="nok"
//  elList.appendChild(elItem)

// -------------------------------------2 chi topshiriq--------------------------------------

const elList = document.querySelector('.list')
const elBotton = document.querySelector('.button')
const elForm = document.querySelector('.form')
const elInput = document.querySelector('.input')

elForm.addEventListener('submit' , function (e){
    e.preventDefault()
    const elItem = document.createElement('li')
    const spancha = document.createElement('span')
    elItem.classList.add('item')
    elItem.innerHTML = elInput.value
    elList.appendChild(elItem)
    elItem.appendChild(spancha)
    spancha.classList.add('spancha')
    spancha.innerHTML = 'x'
    elInput.value = ''
    spancha.onclick=function (e) {
    e.target.parentElement.remove()
    }
});
