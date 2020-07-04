var css = document.querySelector('h3');
var color1 = document.getElementById('color1');
var color2 = document.getElementById('color2');
var body = document.getElementById('gradient');
var inputs = document.querySelector('input');
var randBtn = document.querySelector('button');
var minBrightness = document.getElementById('brightness');

function setGradient() {
	body.style.background = 
		'linear-gradient' + '(' + 
		'to right' + ', ' + 
		color1.value + ', ' + 
		color2.value + ')';
		// Put the CSS code on screen for current background
		css.textContent = body.style.background + ';' ;
}

/**
 * creates random hex colors with a minimum brightness
 * source: https://stackoverflow.com/questions/1152024/best-way-to-generate-a-random-color-in-javascript/1152508
 */
function createRandomColor(brightness){ 
	brightness = parseInt(brightness); // make sure brightness is an integer
	function randomChannel(brightness){
		var r = 255-brightness;
		var n = 0|((Math.random() * r) + brightness);
		var s = n.toString(16);
		return (s.length==1) ? '0'+s : s ; // if one digit padd with 0
	}
	return '#' + randomChannel(brightness) + randomChannel(brightness) + randomChannel(brightness);
} 

function randomizeColors() {
	color1.value = createRandomColor(minBrightness.value);
	color2.value = createRandomColor(minBrightness.value);
	setGradient();
}

// Initially set Gradient
setGradient(); 
// Add event listeners to set gradient when user changes color or clicks RANDOM
color1.addEventListener('input', setGradient);
color2.addEventListener('input', setGradient);
randBtn.addEventListener('click', randomizeColors);
