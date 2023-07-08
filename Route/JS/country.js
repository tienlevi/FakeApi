const API = "https://testapi-ccix.onrender.com/List/";
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
                <b>${dataList.country}</b>
                </div>
                <a class="play-icon" href="/Route/HTML/detail.html?id=${dataList.id}"><i class="fa-sharp fa-solid fa-play"></i></a>
                </div>`;
      });
      document.querySelector(".movies").innerHTML = list.join("");
    });
}

const select = document.querySelector(".myselect");

function myFunction() {
  const select = document.querySelector(".myselect");
  const option = select.options[select.selectedIndex].value;
  const movieContent = document.querySelectorAll(".movie-content");
  const genre = document.querySelectorAll(".movie-content-text b");
  for (let i = 0; i < genre.length; i++) {
    const filter = movieContent[i].querySelectorAll(".movie-content-text b")[0];
    const chose = filter.innerHTML || filter.innerText;
    if (chose.includes("USA") && option == "USA") {
      movieContent[i].style.display = "";
    } else {
      movieContent[i].style.display = "none";
    }
    if (chose.includes("UK") && option == "UK") {
      movieContent[i].style.display = "";
    }
    if (chose.includes("Russia") && option == "Russia") {
      movieContent[i].style.display = "";
    }
    if (chose.includes("") && option == "") {
      movieContent[i].style.display = "";
    }
  }
}
select.addEventListener("change", myFunction);

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
