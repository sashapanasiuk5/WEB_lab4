

let hamburgerButton = document.querySelector(".hamburger-button");
let menu = document.querySelector(".menu-content");

hamburgerButton.addEventListener("click", function (e) {

	let buttonClasses = hamburgerButton.classList;
	let menuClasses = menu.classList;
	if(buttonClasses.contains('pressed')){
		buttonClasses.remove('pressed');
		buttonClasses.add('unpressed');

		menuClasses.add('closed');
		menuClasses.remove('opened');
	}else{
		buttonClasses.add('pressed');
		menuClasses.add('opened');

		buttonClasses.remove('unpressed');
		menuClasses.remove('closed');
	}
	
})