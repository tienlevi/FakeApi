const param = new URLSearchParams(window.location.search);
const Name = param.get("name");
const resultMovie = document.querySelector(".result h1");
const menuBar = document.querySelector(".menu-bar");
const menu = document.querySelector(".menu");
const closeIcon = document.querySelector("#close-icon");

function result() {
  document.title = `Search results for "${Name}"`;
  resultMovie.innerHTML = `Search results for "${Name}"`;
}

function getAPI() {
  const option = {
    method: "GET",
    responseType: "JSON",
  };
  fetch("https://testapi-xfl4.onrender.com/List/", option)
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
                <a class="play-icon" href="detail.html?id=${dataList.id}"><i class="fa-sharp fa-solid fa-play"></i></a>
                </div>`;
      });
      document.querySelector(".movies").innerHTML = list.join("");
    });
}

function searchMovie() {
  const h2 = document.querySelectorAll(".movie-content-text h2");
  const movieContent = document.querySelectorAll(".movie-content");
  for (let i = 0; i < h2.length; i++) {
    const filter = movieContent[i].querySelectorAll(
      ".movie-content-text h2"
    )[0];
    const result = filter.innerHTML;
    if (result.toLowerCase().indexOf(Name) > -1 || result.indexOf(Name) > -1) {
      movieContent[i].style.display = "";
    } else {
      movieContent[i].style.display = "none";
    }
  }
}

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

result();
getAPI();
setInterval(searchMovie, 100);
