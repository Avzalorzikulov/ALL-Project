const elSelect = document.querySelector(".js-select");
const elList = document.querySelector(".list");
const elForm = document.querySelector(".form");
const elInput = document.querySelector(".search");

getList(films);
elSelect.addEventListener("change", function () {
  const elSelectedMovies = [];
  console.log(elSelect.value);
  films.forEach(function (el) {
    el.genres.forEach(function (e) {
      if (e === elSelect.value) {
        elSelectedMovies.push(el);
      }
    });
  });
  getList(elSelectedMovies);
});

function modalOchgich(id){
  console.log(film);
  let film = film.find((kino) =>kino.id == id)
}

function getList(array) {
  elList.innerHTML = "";
  for (let kino of array) {
    elList.innerHTML += `
    <li class="item">
            <img src=${kino.poster} class="image">
            <div class="box">
                <p class="film__id">
                    Film's id ${kino.id}
                </p>  
                <h1 class="film__name">
                    ${kino.title}
                </h1>
                <p class="film__year">
                    Release year: ${new Date(
                      kino.release_date * 100
                    ).getFullYear()}  
                </p>
            </div>
            <button onclick = "modalOchgich(${kino.id}) type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
    kino uchun ma'lumot
  </button>
        </li>`;
  }
}



