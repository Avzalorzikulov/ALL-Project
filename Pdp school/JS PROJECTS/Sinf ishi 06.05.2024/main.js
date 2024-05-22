let arr=  [
    {
        name: 'Opilsin',
        price: 100
    },
    {
        name: 'Bich',
        price: 200

    },
    {
        name: 'Black',
        price: 3000
    },
    {
        name: 'Speaker',
        price: 400
    },
    {
        name: 'Ibook',
        price: 500
    }
]

const elList = document.querySelector(".js-list");
let chiqarator = arr.find((el) => el.name == 'Speaker')
elList.innerHTML = `<li class ="list__inner">
<p class = "text" ${chiqarator.price} </p>
</li>`


