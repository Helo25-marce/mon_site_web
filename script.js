// Menu burger
function toggleMenu() {
    const menu = document.getElementById("navMenu");
    menu.classList.toggle("open");
}

// Carrousel automatique
let currentIndex = 0;
function showNextImage() {
    const images = document.querySelectorAll('.carousel-img');
    images[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + 1) % images.length;
    images[currentIndex].classList.add('active');
}
setInterval(showNextImage, 1500);

// Scroll event
function handleScroll() {
    console.log("Défilement détecté !");
}