let form = document.querySelector('.form')
let li = document.querySelector('.push')
let ul = document.querySelector('.ul')
let elYozgich = document.querySelector('.yozgich')
let record = new webkitSpeechRecognition();
elYozgich.onclick = () => {
    record.start()
}
record.lang = 'uz-UZ'


record.onerror = (evt) => {
    console.log(evt + 'xatolik!');
}

record.onresult = (evt) => {
    evt.preventDefault();
    li.value = evt.results[0][0].transcript;
}

form.addEventListener('submit', function (e) {
    e.preventDefault();
    let text = document.createElement('li')
    let elSpan = document.createElement('span')
    text.setAttribute('class', 'text')
    elSpan.setAttribute('class', 'span')
    text.innerHTML = li.value
    ul.appendChild(text)
    text.appendChild(elSpan)
    elSpan.innerHTML = 'x'
    li.value = '';


    elSpan.onclick = function (evt) {
        evt.target.parentElement.remove()       
    }
})

