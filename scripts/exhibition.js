
// JavaScript for image and text changing animation
const images = [
  "/images/Exhibitions.png",
  "/images/2.jpg",
  "/images/3.jpg",
  "/images/4.png",
  "/images/5.png", // Add path to additional images here
  // Add other image paths in the array like "image2.jpg", "image3.jpg", etc.
];

let currentImageIndex = 0;
const heroImage = document.getElementById("heroImage");

// Function to change the hero image every 5 seconds
setInterval(() => {
  currentImageIndex = (currentImageIndex + 1) % images.length;
  heroImage.src = images[currentImageIndex];
}, 5000);
