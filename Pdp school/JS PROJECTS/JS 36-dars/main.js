const elForm = document.querySelector(".js-form");
const inputTitle = document.querySelector(".js-book-title");
const inputAuthor = document.querySelector(".js-book-author");
const inputYear = document.querySelector(".js-book-year");
const elList = document.querySelector(".js-list");

let books = JSON.parse(localStorage.getItem("books")) || [];

elForm.onsubmit = (evt) => {
  evt.preventDefault();
  books.push({
    id: Date.now(),
    title: inputTitle.value,
    author: inputAuthor.value,
    year: inputYear.value,
  });
  localStorage.setItem("books", JSON.stringify(books));
  render(JSON.parse(localStorage.getItem("books")), elList);
  inputTitle.value = "";
  inputAuthor.value = "";
  inputYear.value = "";
};

function render(array, list) {
  list.innerHTML = "";
  array.forEach((el, index) => {
    list.innerHTML += `<li id=${el.id} class="js-item">
        <span class="js-item-id">${index + 1}</span>
        <span class="js-item-title">${el.title}</span>
        <span class="js-item-author">${el.author}</span>
        <span class="js-item-year">${el.year}</span>
        <button class="edit-btn">edit</button>
        <button class="delete-btn">delete</button>
        </li>`;
  });
}

render(JSON.parse(localStorage.getItem("books")), elList);

document.body.onclick = (evt) => {
  if (evt.target.classList.contains("delete-btn")) {
    books = books.filter((item) => item.id != evt.target.parentElement.id);
    localStorage.setItem("books", JSON.stringify(books));
    render(JSON.parse(localStorage.getItem("books")), elList);
  }

  if (evt.target.classList.contains("edit-btn")) {
    let editedElement = books.find(
      (el) => el.id == evt.target.parentElement.id
    );
    let index = books.indexOf(editedElement);

    inputTitle.value = editedElement.title;
    inputAuthor.value = editedElement.author;
    inputYear.value = editedElement.year;

    elForm.onsubmit = (evt) => {
      evt.preventDefault();

      books.splice(index, 1, {
        id: Date.now(),
        title: inputTitle.value,
        author: inputAuthor.value,
        year: inputYear.value,
      });

      localStorage.setItem("books", JSON.stringify(books));
      render(JSON.parse(localStorage.getItem("books")), elList);
      inputTitle.value = "";
      inputAuthor.value = "";
      inputYear.value = "";
    };
  }
};
