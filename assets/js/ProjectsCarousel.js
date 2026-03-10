// Variáveis globais para que o onclick do HTML funcione
let currentIndex = 0;

function updateCarousel() {
    const track = $('#carousel-track');
    const slides = $('#carousel-track .slide');
    
    if (slides.length === 0) return; // Segurança caso não encontre

    const offset = -currentIndex * 100;
    track.css('transform', `translateX(${offset}%)`);
}

function next() {
    const totalSlides = $('.slide').length;
    if (currentIndex < totalSlides - 1) {
        currentIndex++;
    } else {
        currentIndex = 0;
    }
    updateCarousel();
}

function prev() {
    const totalSlides = $('.slide').length;
    if (currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex = totalSlides - 1;
    }
    updateCarousel();
}

// Garante que o carrossel comece na posição correta ao carregar
$(document).ready(function() {
    console.log("Slides encontrados:", $('.slide').length);
    updateCarousel();
});