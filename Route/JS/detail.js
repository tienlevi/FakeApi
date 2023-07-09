const param = new URLSearchParams(window.location.search);
const id = param.get("id");
const menuBar = document.querySelector(".menu-bar");
const menu = document.querySelector(".menu");
const closeIcon = document.querySelector("#close-icon");

function getAPI() {
  const option = {
    method: "GET",
    responseType: "JSON",
  };
  fetch("https://testapi-xfl4.onrender.com/List/" + id, option)
    .then((response) => response.json())
    .then((data) => {
      const movie = document.querySelector(".movie-detail");
      document.title = `${data.name}`;
      movie.innerHTML += `<h2>${data.name}</h2>`;
      movie.innerHTML += `<img src=${data.img} />`;
      movie.innerHTML += `<a href="./movie.html?id=${data.id}">Watch now</a>`;
      movie.innerHTML += `<p>Genre:${data.genre}</p>`;
      movie.innerHTML += `<p>Country:${data.country}</p>`;
      movie.innerHTML += `<p>Release:${data.release}</p>`;
      movie.innerHTML += `<p>${data.overview}</p>`;
    });
}
getAPI();
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
