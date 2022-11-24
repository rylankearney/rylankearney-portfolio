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
