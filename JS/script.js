const API = "https://testapi-tj1g.onrender.com/List/";

function currentAPI() {
    fetch(API)
        .then(response => response.json())
        .then(data => {
            const list = data.map(dataList => {
                return `<div class="movie-content">
                <img src="${dataList.img}">
                <h1>${dataList.name}</h1>
                <div class="play-icon">
                <a href="detail.html?id=${dataList.id}"><i class="fa-sharp fa-solid fa-play"></i></a>
                </div>
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