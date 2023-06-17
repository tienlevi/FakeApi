const body = document.querySelector("body");
const header = document.querySelector("header");
const menu = document.querySelector(".menu");
const menubar = document.querySelector(".menu-bar");
const menubarIcon = document.querySelector(".menu-bar-icon i");
const closeIcon = document.querySelector(".close-icon");
const menuLi = document.querySelectorAll(".li-a-main");
const subLi = document.querySelectorAll(".sub-menu");
const openForm = document.querySelector(".user-icon");
const closeForm = document.querySelector(".close-form");
const SignUp = document.querySelector(".form");
const bgForm = document.querySelector(".bg-form")
const username = document.querySelector("#username");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirm-password");
const errorAccount = document.querySelector(".error-login");
const errorEmail = document.querySelector(".error-email");
const errorPass = document.querySelector(".error-pass");
const errorConfirmPass = document.querySelector(".error-confirm-pass");
const submitform = document.querySelector(".submit-form");
const successForm = document.querySelector(".success-form")
const studiotab = document.querySelector(".studio-tab");
const studio = document.querySelectorAll(".studio");
const games = document.querySelector(".games")
const gameStudio = document.querySelectorAll(".game-studio");



var prevScroll = window.pageYOffset;

function onScroll() {
    let currentScroll = window.pageYOffset;
    if (prevScroll > currentScroll) {
        header.style.top = "0px";
        menu.style.top = "0px";
    } else {
        header.style.top = "-40px";
        menu.style.top = "-45px";
    }
    prevScroll = currentScroll;
}

window.addEventListener("scroll", onScroll);

menubarIcon.addEventListener("click", () => {
    menubar.classList.add("active-menu-bar");
    window.removeEventListener("scroll", onScroll);
    header.style.top = "0px";
    menu.style.top = "0px";
})

closeIcon.addEventListener("click", () => {
    menubar.classList.remove("active-menu-bar");
    window.addEventListener("scroll", onScroll);
})

for (let i = 0; i < menuLi.length; i++) {
    menuLi[i].addEventListener("click", (e) => {
        e.preventDefault();
        menuLi[i].classList.toggle("toggle-menu-li-a");
        subLi[i].classList.toggle("toggle-sub-li-a");
    })
}

window.onresize = function () {
    if (innerWidth > 1000) {
        menubar.classList.remove("active-menu-bar");
        window.addEventListener("scroll", onScroll);
    }
}

openForm.addEventListener("click", () => {
    SignUp.classList.add("active-form");
    bgForm.classList.add("body-bg-form");
})

closeForm.addEventListener("click", () => {
    SignUp.classList.remove("active-form");
    bgForm.classList.remove("body-bg-form");
})

function validEmail(emailCheck) {
    var emailRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailRegex.test(emailCheck);
}

submitform.addEventListener("click", (e) => {
    e.preventDefault();
    if (username.value == "") {
        errorAccount.innerHTML = "Please enter username";
        return false;
    } else {
        errorAccount.innerHTML = "";
    }
    if (username.value.length <= 7) {
        errorAccount.innerHTML = "Username must be than 7 letters";
        return false;
    } else {
        errorAccount.innerHTML = "";
    }
    if (email.value == "") {
        errorEmail.innerHTML = "Please enter email";
        return false;
    } else {
        errorEmail.innerHTML = "";
    }
    if ((!validEmail(email.value))) {
        errorEmail.innerHTML = "This is not an email";
        return false;
    } else {
        errorEmail.innerHTML = "";
    }
    if (password.value == "") {
        errorPass.innerHTML = "Please enter password";
        return false;
    } else {
        errorAccount.innerHTML = "";
    }
    if (password.value.length <= 6) {
        errorPass.innerHTML = "Password must be than 6 letters"
        return false;
    } else {
        errorPass.innerHTML = "";
    }
    if (confirmPassword.value == "") {
        errorConfirmPass.innerHTML = "Please enter confirm password";
        return false;
    } else {
        errorConfirmPass.innerHTML = "";
    }
    if (confirmPassword.value != password.value) {
        errorConfirmPass.innerHTML = "You have writed wrong pass";
        return false;
    } else {
        errorConfirmPass.innerHTML = "";
    }
    successForm.innerHTML = "Sign up success";
    console.log(`Username: ${username.value}`);
    console.log(`Email: ${email.value}`);
    console.log(`Password: ${password.value}`);
    return true;
})


for (let i = 0; i < studio.length; i++) {
    studio[i].addEventListener("click", () => {
        studiotab.querySelector(".active-border-studio-tab").classList.remove("active-border-studio-tab");
        studio[i].classList.add("active-border-studio-tab");
        games.querySelector(".active-game-studio").classList.remove("active-game-studio");
        gameStudio[i].classList.add("active-game-studio");
    })
}




// document.addEventListener("keydown", (e) => {
//     if (e.ctrlKey || e.keyCode == 123) {
//         e.stopPropagation();
//         e.preventDefault();
//     }
// });
// document.addEventListener('contextmenu', event => event.preventDefault());