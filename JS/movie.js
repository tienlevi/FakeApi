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
            const movie = document.querySelector(".movie")

            movie.innerHTML += `<iframe src="${data.iframe}" allowfullscreen>`
        });
}
getAPI()