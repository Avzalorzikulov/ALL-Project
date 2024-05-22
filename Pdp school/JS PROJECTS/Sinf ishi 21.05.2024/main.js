
fetch("https://jsonplaceholder.typicode.com/posts")
.then((res) => res.json())
.then((data) => render(data, elList))
.catch((err) => console.log(err));
const elList = document.querySelector(".js-list")
function render(array, node) {
    array.forEach(item => {
        node.innerHTML +=`
        <li class ="item"  >
        <span class="item-id">
        ${item.id}
        <span/>
        <h3 class ="item-title" >
        ${item.title}
        <h3>
        <p class="item-text">
        ${item.body}
        <p>
        <li/>;
        `
    });
}