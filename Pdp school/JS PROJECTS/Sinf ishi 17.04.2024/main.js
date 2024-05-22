const elTablo = document.querySelector('.tablo');
const elBtns = document.querySelectorAll('.btn');

for (let i = 0; i < elBtns.length; i++) {
    if (i != 17 && i != 11) {
        elBtns[i].onclick =(evt) => {
            if (elTablo.innerHTML == '0') elTablo.innerHTML = '';
            elTablo.innerHTML += evt.target.innerHTML;
            console.log(elTablo.innerHTML);
    };
}else{
    elBtns[i].onclick =() => {
        elTablo.innerHTML = eval(elTablo.innerHTML);
    };
}
elBtns[i].onclick =(evt) => {
    if (i == 11) {
        elTablo.innerHTML = '';
    }
    else if( i == 17){
        elTablo.innerHTML = eval(elTablo.innerHTML);
    }
    else{
        elTablo.innerHTML += evt.target.innerHTML
    } 
};
}



