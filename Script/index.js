//Scrolling Effect
let currentSection = 0;
const sections = document.querySelectorAll(".section-container");
const sectionContainer = document.querySelector(".section-container");
window.addEventListener("wheel", function(e) {
    if (e.deltaY > 0 && currentSection < sections.length - 1) {
        currentSection++;
    } else if (e.deltaY < 0 && currentSection > 0) {
        currentSection--;
    }
    sectionContainer.style.transform = `translateY(-${currentSection * 100}vh)`;
});

  const swup = new Swup();

 