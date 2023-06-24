const API = "https://testapi-tj1g.onrender.com/List"

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
                <h3>${dataList.genre}</h3>
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

const select = document.querySelector(".myselect");

function myFunction() {
    const select = document.querySelector(".myselect");
    const option = select.options[select.selectedIndex].value;
    const movieContent = document.querySelectorAll(".movie-content");
    const genre = document.querySelectorAll("h3");
    for (let i = 0; i < genre.length; i++) {
        const filter = movieContent[i].querySelectorAll("h3")[0];
        const chose = filter.innerHTML;
        if (chose.includes("Action") && option == "Action") {
            movieContent[i].style.display = ""
        } else {
            movieContent[i].style.display = "none"
        }
        if (chose.includes("Drama") && option == "Drama") {
            movieContent[i].style.display = ""
        }
        if (chose.includes("Horror") && option == "Horror") {
            movieContent[i].style.display = ""
        }
        if (chose.includes("Adventure") && option == "Adventure") {
            movieContent[i].style.display = ""
        }
        if (chose.includes("Crime") && option == "Crime") {
            movieContent[i].style.display = ""
        }
        if (chose.includes("Thriller") && option == "Thriller") {
            movieContent[i].style.display = ""
        }
        if (chose.includes("Animation") && option == "Animation") {
            movieContent[i].style.display = ""
        }
        if (chose.includes("Sci-Fi") && option == "Sci-Fi") {
            movieContent[i].style.display = ""
        }
        if (chose.includes("") && option == "") {
            movieContent[i].style.display = ""
        }
    }
}
select.addEventListener("change", myFunction)


currentAPI();
getAPI();





// select.addEventListener("change", myFunction)