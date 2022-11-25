//BURGER MENU

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".main-menu");

hamburger.addEventListener("click", () => {
	hamburger.classList.toggle("active");
	navMenu.classList.toggle("active");
})

document.querySelectorAll("nav-link").forEach(n => n.addEventListener("click", () => {
	hamburger.classList.remove("active");
	navMenu.classList.remove("active");
}))

//DARK MODE

let darkMode = localStorage.getItem("darkMode");
const darkModeToggle = document.querySelector("#dm-toggle");



const enableDarkMode = () => {
	document.body.classList.add("dark-mode");
	localStorage.setItem("darkMode", "enabled");
};

const disableDarkMode = () => {
	document.body.classList.remove("dark-mode");
	localStorage.setItem("darkMode", null);
}



darkModeToggle.addEventListener("click",() => {
	darkMode = localStorage.getItem("darkMode");
	if (darkMode !== "enabled") {
		enableDarkMode();
	} else {
		disableDarkMode();
	}
});


//CAROUSEL 

const track = document.querySelector('.projects-list');
const slides = Array.from(track.children);
const nextButton = document.querySelector('.right-button');
const backButton = document.querySelector('.left-button');
const dotsMenu = document.querySelector('.carousel-tracker');
const indivDots = Array.from(dotsMenu.children);



const slideWidth = slides[0].getBoundingClientRect().width;

//arrange slides next to each other
const setPosition = (slide, index) => {
	slide.style.left = slideWidth * (index * 2) + 'px';
}

slides.forEach(setPosition);

const moveToSlide = (track, currentSlide, targetSlide) => {
	track.style.transform = 'translateX(-' + targetSlide.style.left + ')';
	currentSlide.classList.remove('current');
	targetSlide.classList.add('current');
}

//Click left arrow = move slides left
backButton.addEventListener('click', e => {
	const currentSlide = track.querySelector('.current');
	const prevSlide = currentSlide.previousElementSibling;

	moveToSlide(track, currentSlide, prevSlide);
})


//Click right arrow = move slides right
nextButton.addEventListener('click', e => {
	const currentSlide = track.querySelector('.current');
	const nextSlide = currentSlide.nextElementSibling;
	// const amountMoving = nextSlide.style.left;
	// //move to the next slide
	// track.style.transform = 'translateX(-' + amountMoving + ')';
	// currentSlide.classList.remove('current');
	// nextSlide.classList.add('current');

	moveToSlide(track, currentSlide, nextSlide);
})


//Click indicators = go to selected slide
dotsMenu.addEventListener('click', e => {
	const targetDots = e.target.closest('button');


	if(!targetDots) return;

	const currentSlide = track.querySelector('.current');
	const currentDot = dotsMenu.querySelector('.current');
	const targetIndex = indivDots.findIndex(dot => dot === targetDots)
	const targetSlide = slides[targetIndex];

	moveToSlide(track, currentSlide, targetSlide)
})