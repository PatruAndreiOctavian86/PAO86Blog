let currentIndex = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.slides img');
    if (index >= slides.length) currentIndex = 0;
    if (index < 0) currentIndex = slides.length - 1;
    slides.forEach((slide, i) => {
        slide.style.display = i === currentIndex ? 'block' : 'none';
    });
}

function nextSlide() {
    showSlide(++currentIndex);
}

function prevSlide() {
    showSlide(--currentIndex);
}

document.addEventListener("DOMContentLoaded", () => showSlide(currentIndex));
