// Alert Button Function
function showAlert() {
    alert("Paris is one of the most beautiful cities in the world!");
}

// Debounce Function
function debounce(func, delay) {
    let timeout;
    return function(...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, args), delay);
    };
}

// Image Slider
let images = ["images/eiffel_tower.jpg", "images/louvre_museum.jpg", "images/notre_dame.jpg", "images/montmartre.jpg", "images/seine_river.jpg"];
let currentIndex = 0;

function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    document.getElementById("sliderImage").src = images[currentIndex];
}

function prevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    document.getElementById("sliderImage").src = images[currentIndex];
}

// Automatic Image Cycling
setInterval(nextImage, 3000); // Change image every 3 seconds

// Optimize Button Clicks
document.getElementById("exploreBtn").addEventListener("click", debounce(function() {
    window.location.href = "destination.html";
}, 300)); // 300ms debounce delay
