const images = ["image1.jpg", "image2.jpg", "image3.jpg"]; // Add your image file names
let currentIndex = 0;
let intervalId = null;
const galleryImage = document.getElementById("gallery-image");
const playButton = document.getElementById("play-button");
const stopButton = document.getElementById("stop-button");
const prevButton = document.getElementById("prev-button");
const nextButton = document.getElementById("next-button");

function showImage(index) {
    galleryImage.src = images[index];
}

function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
}

function prevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex);
}

function startSlideshow() {
    intervalId = setInterval(nextImage, 500);
}

function stopSlideshow() {
    clearInterval(intervalId);
}

playButton.addEventListener("click", startSlideshow);
stopButton.addEventListener("click", stopSlideshow);
prevButton.addEventListener("click", prevImage);
nextButton.addEventListener("click", nextImage);

// Start slideshow on mouseover
galleryImage.addEventListener("mouseover", startSlideshow);

// Stop slideshow on mouseout
galleryImage.addEventListener("mouseout", stopSlideshow);

// Initialize with the first image
showImage(currentIndex);
