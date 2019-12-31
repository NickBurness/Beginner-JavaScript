// Function that controls navigation buttons
// works
function openPane(event) {
    let activePane = document.querySelectorAll(".active");

    activePane.forEach(function (tab) {
        tab.className = tab.className.replace("active", "");
    });

    // activate and display pane
    event.target.parentElement.className += " active";
    document.getElementById(event.target.href.split("#")[1]).className += " active";
}

const element = document.getElementById("button-tab");

element.addEventListener("click", openPane, false);

// Image Slideshow Function
// works
let slideIndex = 1;
showImage(slideIndex);

function plusDivs(n) {
    showImage(slideIndex += n);
}

function showImage(n) {
    let i;
    const images = document.getElementsByClassName("mySlides");
    if (n > images.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = images.length
    };
    for (i = 0; i < images.length; i++) {
        images[i].style.display = "none";
    }
    images[slideIndex - 1].style.display = "block";
}