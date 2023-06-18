const API = "http://localhost:3000/Lists";
const movies = document.querySelector(".movies")

function currentAPI() {
    fetch(API)
        .then(response => response.json())
        .then(data => {
            const list = data.map(dataList => {
                return `<div class="movie-content">
                <img src="${dataList.img}">
                <h1>${dataList.name}</h1>
                <a href="detail.html?id=${dataList.id}">Watch</a>
                </div>`
            })
            document.querySelector(".movies").innerHTML = list.join("");
        });
}

function getAPI() {
    fetch(API)
        .then(response => response.json())
        .then(response => console.log(response))
}
getAPI()
currentAPI()