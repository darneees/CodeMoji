// modal documnetation

document.addEventListener("DOMContentLoaded", function () {
    const open = document.getElementById("openModal");
    const modal = document.getElementById("modalContent");

    open.addEventListener("click", function () {
        modal.classList.toggle("active");
    });
});

// button to top

let myButton = document.getElementById("scrollTop");
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        myButton.style.display = "flex";
    } else {
        myButton.style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}