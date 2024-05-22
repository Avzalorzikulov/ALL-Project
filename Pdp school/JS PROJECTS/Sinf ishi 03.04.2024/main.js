let elText = document.querySelector(".text");
function time() {
    let currentdate = new Date();

elText.innerHTML =
  currentdate.getDate() +
  "." +
  currentdate.getMonth() +
  "." +
  currentdate.getFullYear();
}
setInterval(time, 1000)

  let elText1 = document.querySelector(".text2");
let currentdate1 = new Date();

elText1.innerHTML = currentdate1.getHours() + ":" + currentdate1.getMinutes() + ":" + currentdate1.getSeconds();
