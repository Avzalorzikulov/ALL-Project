document.getElementById("book-form").addEventListener("submit", function (e) {
  e.preventDefault();
  let title = document.getElementById("title").value;
  let year = document.getElementById("year").value;
  let author = document.getElementById("author").value;
  let table = document.getElementById("book-list");
  let rowCount = table.rows.length + 1;
  let row = table.insertRow();
  row.innerHTML = `<td class="tdcha" >${rowCount}</td><td>${title}</td><td>${year}</td><td>${author}</td><td class="edit">edit</td><td class="delete">delete</td>`;
  title.value = "";
  year.value = "";
  author.value = "";
});

document.getElementById("book-list").addEventListener("click", function (e) {
  if (e.target.classList.contains("delete")) {
    let row = e.target.parentElement;
    row.parentElement.removeChild(row);
  } else if (e.target.classList.contains("edit")) {
    let row = e.target.parentElement;
    let cells = row.getElementsByTagName("td");
    title.value = cells[1].textContent;
    year.value = cells[2].textContent;
    author.value = cells[3].textContent;
    row.parentElement.removeChild(row);
  }
});
