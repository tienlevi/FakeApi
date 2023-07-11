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
      const movie = document.querySelector(".movie");
      document.title = `Watch ${data.name}`;
      movie.innerHTML += `<h1>Watch ${data.name}</h1>`;
      movie.innerHTML += `<iframe src="${data.iframe}" allowfullscreen>`;
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
