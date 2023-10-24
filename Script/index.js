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


//Animated Text
 var spanText = function spanText(text) {
	var string = text.innerText;
	var spaned = '';
	for (var i = 0; i < string.length; i++) {
	  if (string.substring(i, i + 1) === ' ') spaned += string.substring(i, i + 1);
	  else spaned += '<span>' + string.substring(i, i + 1) + '</span>';
	}
	text.innerHTML = spaned;
  }
  let headline = document.querySelector("h1");
  spanText(headline);
  let animations = document.querySelectorAll('h1');
  animations.forEach(animation => {
	let letters = animation.querySelectorAll('span');
	letters.forEach((letter, i) => {
	  letter.style.animationDelay = (i * 0.1) + 's';
	})
  });
 