let item = [{
    id: 1,
    name: 'Leanne Graham',
    username: 'Bret',
    email: 'Sincere@april.biz',
    phone: '1-770-736-8031 x56442',
},
{
    id: 2,
    name: 'Ervin Howell',
    username: 'Antonette',
    email: 'Shanna@melissa.tv',
    phone: '010-692-6593 x09125',
},
{
    id: 3,
    name: 'Clementine Bauch',
    username: 'Samantha',
    email: 'Nathan@yesenia.net',
    phone: '1-463-123-4447',
},
{
    id: 4,
    name: 'Patricia Lebsack',
    username: 'Karianne',
    email: 'Julianne.OConner@kory.org',
    phone: '493-170-9623 x156',
},
{
    id: 5,
    name: 'Chelsey Dietrich',
    username: 'Kamren',
    email: 'Lucio_Hettinger@annie.ca',
    phone: '(254)954-1289',
},
];
const elList = document.querySelector('.list')
for (let mahsulot of item) {
    const elItem = document.createElement('li');
    const elSpanId = document.createElement('p');
    const elSpanName = document.createElement('p');
    const elSpanUsername = document.createElement('p');
    const elSpanEmail = document.createElement('p');
    const elSpanPhone = document.createElement('p');

    elItem.setAttribute('class', 'item')
    elSpanId.innerHTML = mahsulot.id
    elSpanName.innerHTML = mahsulot.name
    elSpanUsername.innerHTML = mahsulot.username
    elSpanEmail.innerHTML = mahsulot.email
    elSpanPhone.innerHTML = mahsulot.phone

    elItem.appendChild(elSpanId)
    elItem.appendChild(elSpanName)
    elItem.appendChild(elSpanUsername)
    elItem.appendChild(elSpanEmail)
    elItem.appendChild(elSpanPhone)
    elList.appendChild(elItem)
}