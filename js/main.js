// Full Screen Navigathion
let toggler = document.querySelector(".toggle");
let nav = document.querySelector("header ul");
let close = document.querySelector(".close");
let link = document.querySelectorAll("header ul a");
toggler.onclick = function () {
    nav.classList.add("open");
};
close.onclick = function () {
    nav.classList.remove("open");
};
document.onkeyup = function (e) {
    if (e.key === "Escape") {
        nav.classList.remove("open");
    };
};
for (let i = 0; i <= link.length; i++) {
    link[i].addEventListener("click", function () {
        nav.classList.remove("open");
    });
};