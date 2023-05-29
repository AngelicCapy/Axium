
// Header become black when scrolling

window.addEventListener("scroll", () => {
	if(window.scrollY == 0){
		document.querySelector("header").style.background = "transparent";
	}
	else{
		document.querySelector("header").style.background = "#333333";
	}
})

//hamburger
var a = 0
document.querySelector("#nav").addEventListener("click", () => {
	if(a == 0){
		document.querySelector("#Hamburger").style.display = "flex";
		document.querySelector("#nav").classList = "fa-solid fa-xmark phone"
		document.querySelector("header").style.background = "#333333";
		a = 1;
	}
	else{
		document.querySelector("#Hamburger").style.display = "none";
		document.querySelector("#nav").classList = "fa-solid fa-bars phone"
		if(window.scrollY == 0){
			document.querySelector("header").style.background = "transparent";
		}
		a = 0;
	}
	
})

var index = 0; 
var locations = [ // Modifier ici pour ajouter le nom
	"Image Serveur 1", 
	"Image Serveur 2", 
	"Image Serveur 3"

]

var slides = document.getElementsByClassName("slides"); 
var nextArrow = document.getElementById("next");

var previousArrow = document.getElementById("previous");

var place = document.getElementById("place");


createDots(); 
showSlides(index); 

function createDots() {
	for (i=0; i<slides.length; i++) {
	var dot = document.createElement("span");

	}
}

function showSlides(x) {
	if (x > slides.length-1) {
		index = 0; 
	}
	if (x < 0) {
		index = slides.length-1; 
	}
	for (i=0; i < slides.length; i++) {
		slides[i].style.display = "none"; 

	}
	
	slides[index].style.display = "block";
	place.innerHTML = locations[index]; 
}

nextArrow.onclick = function() {
	index += 1; 
	showSlides(index); 
} 

previousArrow.onclick = function() {
	index -= 1; 
	showSlides(index); 
} 


function tournerinfinie(){
	index+=1;
	showSlides(index);
}

setInterval(tournerinfinie, 5000);