const param = new URLSearchParams(window.location.search);
const id = param.get("id");

function getAPI() {
  const option = {
    method: "GET",
    responseType: "JSON",
  };
  fetch("https://testapi-ccix.onrender.com/List/" + id, option)
    .then((response) => response.json())
    .then((data) => {
      const movie = document.querySelector(".movie");
      document.title = `Watch ${data.name}`;
      movie.innerHTML += `<h1>Watch ${data.name}</h1>`;
      movie.innerHTML += `<iframe src="${data.iframe}" allowfullscreen>`;
    });
}
getAPI();
