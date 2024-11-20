const toggleTheme = document.querySelector('#theme-toggle');
toggleTheme.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});


const track = document.querySelector('.carousel-track');
const prevButton = document.querySelector('.nav-button.prev');
const nextButton = document.querySelector('.nav-button.next');
const items = Array.from(track.children);
let currentIndex = 0;

function updateCarousel() {
  const offset = -currentIndex * 100; // Menggeser layar sesuai index
  track.style.transform = `translateX(${offset}%)`;
}

prevButton.addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
    updateCarousel();
  }
});

nextButton.addEventListener('click', () => {
  if (currentIndex < items.length - 1) {
    currentIndex++;
    updateCarousel();
  }
});

// Inisialisasi posisi awal
updateCarousel();