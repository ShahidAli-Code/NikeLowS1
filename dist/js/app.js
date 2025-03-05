const mainImage = document.querySelector('#main-image');
const images = document.querySelectorAll(".clickable-image");


images.forEach(image => {
    image.addEventListener('click', function() {
        // Change main image
        mainImage.src = this.src;

        // Find the currently active image and remove the border
        const activeImage = document.querySelector(".border-active");
        if (activeImage) activeImage.classList.remove("border-active");

        // Add border to the clicked image
        this.classList.add("border-active");
    });
});


document.addEventListener("scroll", function () {
    const image = document.getElementById("heroImage");
    const video = document.getElementById("heroVideo");
    const scrollPosition = window.scrollY;

    if (scrollPosition > 100) { // Change when user scrolls down
        image.style.opacity = "0"; // Hide image
        video.style.opacity = "1"; // Show video
        video.play(); // Start playing video
    }
});

const date = document.querySelector("#date");
const currentYear = new Date().getFullYear();
date.textContent = currentYear;

const scroll = new LocomotiveScroll({
    el: getElement("#main"),
    smooth: true,
  });

