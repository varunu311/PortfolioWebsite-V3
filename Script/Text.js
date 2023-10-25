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