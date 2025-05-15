function mostrarMensagem() {
  alert("Essas atividades promovem sustentabilidade, cidadania e valorização do campo!");
}

// Carrossel simples
const carouselImages = document.querySelector('.carousel-images');
const images = carouselImages.querySelectorAll('img');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

let currentIndex = 0;

function showImage(index) {
  images.forEach((img, i) => {
    img.classList.toggle('active', i === index);
  });
  // Move o container para o índice atual
  carouselImages.style.transform = `translateX(-${index * 100}%)`;
}

prevBtn.addEventListener('click', () => {
  currentIndex = (currentIndex === 0) ? images.length - 1 : currentIndex - 1;
  showImage(currentIndex);
});

nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1;
  showImage(currentIndex);
});

// Inicializa o carrossel
showImage(currentIndex);
