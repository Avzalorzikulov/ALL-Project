// const elBtn = document.querySelector(".btn");
// const elText = document.querySelector("body");

// let record = new webkitSpeechRecognition();

// elBtn.onclick = () => {
//   record.start();
// };

// record.lang = "uz-UZ";
// record.onend = () => {
//   console.log("Eshitim");
// };
// record.onerror = (evt) => {
//   console.log(evt + "xayolik!");
// };

// record.onresult = (evt) => {
//   console.log(evt.results[0][0].transcript);
//   if (evt.results[0][0].transcript === "qizil") {
//     elText.style.backgroundColor = "rgb(255, 0 , 0)";
//   } else if (evt.results[0][0].transcript === "yashil") {
//     elText.style.backgroundColor = "green";
//   } else if (evt.results[0][0].transcript === "negr") {
//     elText.style.backgroundColor = "black";
//   } else elText.style.backgroundColor = "blue";
// };

// ---------------------------------------Amaliyot2----------------------------------------
const elInput = document.querySelector(".input");
const elAdd = document.querySelector(".btn");
const elRecord = document.querySelector(".record");

let record = new webkitSpeechRecognition();

elAdd.onclick = () => {
  record.start();
};

record.lang = "uz-UZ";
record.onend = () => {
  aleret("Eshitim");
};
record.onerror = (evt) => {
  alert(evt + "xayolik!");
};

record.onresult = (evt) => {
  elInput(evt.results[0][0].transcript);
  elInput.value = evt.results[0][0].transcript;
};