const API = "https://testapi-tj1g.onrender.com/List/"

function getAPI() {
    fetch(API)
        .then(response => response.json())
        .then(response => console.log(response))
}

getAPI();