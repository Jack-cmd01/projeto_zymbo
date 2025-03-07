// Função Carrossel

let slideIndex = 1;
showSlides(slideIndex);

function mudarSlide(n) {
  showSlides(slideIndex += n);
}

function slide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("slidesImg");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" ativo", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " ativo";
}    


// Função de +Ver Tudo

document.querySelector(".verTudo").addEventListener("click", function() {
  let ocultos = document.querySelectorAll(".cartoes2.oculto");
  let botao = this;

  let visivel = Array.from(ocultos).some(card => card.style.display === "block");

  ocultos.forEach(card => {
      card.style.display = visivel ? "none" : "block";
  });

  botao.textContent = visivel ? "+ Ver tudo" : "- Ver menos";
});