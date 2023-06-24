const param = new URLSearchParams(window.location.search);
const id = param.get("id");

function getAPI() {
    const option = {
        method: "GET",
        responseType: "JSON",
    }
    fetch("https://testapi-tj1g.onrender.com/List/" + id, option)
        .then(response => response.json())
        .then(data => {
            const movie = document.querySelector(".movie-detail");

            movie.innerHTML += `<h2>${data.name}</h2>`
            movie.innerHTML += `<img src=${data.img} />`
            movie.innerHTML += `<p>${data.overview}</p>`
            movie.innerHTML += `<a href="movie.html?id=${data.id}">Watch now</a>`
            movie.innerHTML += `Genre:<p>${data.genre}</p>`
            movie.innerHTML += `Release:<p>${data.release}</p>`
        });
}
getAPI()