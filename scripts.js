/* Javascript for transitions */

//code for transitions 1 of 2
function changeBG(el,clr){
	var elem = document.getElementById(el);
	elem.style.transition = "background 1.0s linear 0s";
	elem.style.background = clr;
}

//code for transitions 2 of 2
function fadeOut(el){
	var elem = document.getElementById(el);
	elem.style.transition = "opacity 0.5s linear 0s";
	elem.style.opacity = 0;
}
function fadeIn(el){
	var elem = document.getElementById(el);
	elem.style.transition = "opacity 0.5s linear 0s";
	elem.style.opacity = 1;
}


