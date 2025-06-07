document.addEventListener("DOMContentLoaded", () => {
  const slides = ["slide1", "slide2", "slide3"];
  let currentSlide = 0;

  function nextSlide() {
    document.getElementById(slides[currentSlide]).checked = false;
    currentSlide = (currentSlide + 1) % slides.length;
    document.getElementById(slides[currentSlide]).checked = true;
  }

  setInterval(nextSlide, 5000);

  const saudacaoElement = document.querySelector(".saudacao h2");
  let userName = localStorage.getItem("userName");

  if (!userName) {
    userName = "Pedro";
    localStorage.setItem("userName", userName);
  }

  saudacaoElement.textContent = `Bem vindo ${userName}!`;
});