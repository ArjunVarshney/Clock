let darkmodeswitcher = document.getElementById("darkmode");
let light = document.getElementById("light");
let dark = document.getElementById("dark");
let root = document.querySelector(":root");

let menuicon = document.getElementsByClassName("menuicon");
menuicon[1].style.display = "none";

darkmodeswitcher.addEventListener("click", function () {
  if (document.getElementsByClassName("menuicon")[1].style.display == "none") {
    root.style.setProperty("--white", "#0b121d");
    root.style.setProperty("--black", "#ecf1f3");
    document.getElementsByClassName("menuicon")[0].style.display = "none";
    document.getElementsByClassName("menuicon")[1].style.display = "flex";
    document.querySelector("#clock>div>img").style.filter = "invert(100%)";
  } else {
    root.style.setProperty("--black", "#0b121d");
    root.style.setProperty("--white", "#ecf1f3");
    document.getElementsByClassName("menuicon")[1].style.display = "none";
    document.getElementsByClassName("menuicon")[0].style.display = "flex";
    document.querySelector("#clock>div>img").style.filter = "invert(0%)";
  }
});

function showmenu() {
  let menuicon = document.getElementsByClassName("menu_icon");
  menuicon[0].classList.toggle("open");
  let menu = document.getElementsByClassName("menu");
  menu[0].classList.toggle("menuopen");
}

setTimeout(function () {
  let element = document.getElementsByClassName("loader_bg");
  let ele = document.querySelector(".loader_bg>img");
  element[0].style.backgroundColor = "transparent";
  element[0].style.color = "transparent";
  ele.style.opacity = "0";
}, 2000);

setTimeout(function () {
  let element = document.getElementsByClassName("loader_bg");
  element[0].style.display = "none";
}, 2500);

let time = new Date();
let sec = time.getSeconds();
let min = time.getMinutes();
let hour = time.getHours();
let day = time.getDay();
let date = time.getDate();
let year = time.getFullYear();
let month = time.getMonth();

let alldays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];
var allmonths = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

let secangle = sec * 6 - 90;
let minangle = min * 6 + sec * 0.1 - 90;
let hourangle = hour * 30 + min * 0.5 + sec * 0.0083333 - 90;
root.style.setProperty("--sec-rotation", secangle + "deg");
root.style.setProperty("--min-rotation", minangle + "deg");
root.style.setProperty("--hour-rotation", hourangle + "deg");

setInterval(() => {
  let dates = new Date();
  sec = dates.getSeconds();
  min = dates.getMinutes();
  hour = dates.getHours();
  day = dates.getDay();
  date = dates.getDate();
  year = dates.getFullYear();
  month = dates.getMonth();
  if (sec == 0) {
    document.getElementsByClassName("needlesec")[0].style.transition = "none";
  } else {
    document.getElementsByClassName("needlesec")[0].style.transition =
      "transform 1s";
  }
  if (min == 0) {
    document.getElementsByClassName("needlemin")[0].style.transition = "none";
  } else {
    document.getElementsByClassName("needlemin")[0].style.transition =
      "transform 1s";
  }
  if (hour == 0) {
    document.getElementsByClassName("needlehour")[0].style.transition = "none";
  } else {
    document.getElementsByClassName("needlehour")[0].style.transition =
      "transform 1s";
  }
  let secangle = sec * 6 - 90;
  let minangle = min * 6 + sec * 0.1 - 90;
  let hourangle = hour * 30 + min * 0.5 + sec * 0.0083333 - 90;
  root.style.setProperty("--sec-rotation", secangle + "deg");
  root.style.setProperty("--min-rotation", minangle + "deg");
  root.style.setProperty("--hour-rotation", hourangle + "deg");
  document.querySelector(".month").innerHTML = "Month: " + allmonths[month];
  document.querySelector(".date").innerHTML = "Date: " + date;
  document.querySelector(".year").innerHTML = "Year: " + year;
  document.querySelector(".day").innerHTML = "Day: " + alldays[day];
}, 1000);
