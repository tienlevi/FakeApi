const API = "https://testapi-tj1g.onrender.com";

fetch(API).then(response => response.json())
    .then(response => console.log(response));