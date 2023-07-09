const API = "https://testapi-xfl4.onrender.com/List/";
const menuBar = document.querySelector(".menu-bar");
const menu = document.querySelector(".menu");
const closeIcon = document.querySelector("#close-icon");

function currentAPI() {
  fetch(API)
    .then((response) => response.json())
    .then((data) => {
      const list = data.map((dataList) => {
        return `<div class="movie-content">
                <div class="movie-content-img">
                <img src="${dataList.img}">
                </div>
                <div class="movie-content-text">
                <h2>${dataList.name}</h2>
                <p>${dataList.genre}</p>
                <p>${dataList.country}</p>
                </div>
                <a class="play-icon" href="./detail.html?id=${dataList.id}"><i class="fa-sharp fa-solid fa-play"></i></a>
                </div>`;
      });
      document.querySelector(".movies").innerHTML = list.join("");
    });
}

currentAPI();
menuBar.addEventListener("click", () => {
  menu.classList.add("menu-active");
});

closeIcon.addEventListener("click", () => {
  menu.classList.remove("menu-active");
});

window.onresize = function () {
  if (innerWidth > 1000) {
    menu.classList.remove("menu-active");
  }
};
