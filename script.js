const tabdots = document.querySelectorAll(".dot");
const contentslide = document.querySelectorAll(".content-slide");
const tabcontent = document.querySelector(".tab-content");
const blogtabs = document.querySelectorAll(".blog-tab-item");
const nextarrow = document.querySelector("#nextarrow");
const prevarrow = document.querySelector("#prevarrow");
let current = 0;

function changeSlide(index) {
    if (index >= contentslide.length) {
        index = 0
    }
    if (index < 0) {
        index = contentslide.length - 1
    }
    tabdots[current].classList.toggle("active-dot");
    tabdots[index].classList.toggle("active-dot");
    contentslide[current].classList.toggle("active");
    contentslide[index].classList.toggle("active");
    current = index;
}

nextarrow.addEventListener("click", () => {
    changeSlide(current + 1);
})

prevarrow.addEventListener("click", () => {
    changeSlide(current - 1);
})

tabdots.forEach((click, clickdot) => {
    click.addEventListener("click", () => {
        if (current != clickdot) {
            changeSlide(clickdot);
        }
    });
})

const autoslide = setInterval(() => {
    changeSlide(current + 1);
}, 4000);

for (a = 0; a < blogtabs.length; a++) {
    blogtabs[a].addEventListener("click", () => {
        tabcontent.querySelector(".active-tab").classList.remove("active-tab");
        blogtabs[a].classList.add("active-tab")
    })
}