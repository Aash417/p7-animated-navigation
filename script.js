const menuBars = document.querySelector("#menu-bars");
const overlay = document.querySelector("#overlay");
const nav1 = document.querySelector("#nav1");
const nav2 = document.querySelector("#nav2");
const nav3 = document.querySelector("#nav3");
const nav4 = document.querySelector("#nav4");
const nav5 = document.querySelector("#nav5");

function toggleNav() {
	// toggle : menu bars
	menuBars.classList.toggle("change");

	// toggle : menu active
	overlay.classList.toggle("overlay-active");

	if (overlay.classList.contains("overlay-active")) {
		console.log("contains");
		// Animate In
		overlay.classList.remove("overlay-slide-left");
		overlay.classList.add("overlay-slide-right");
	} else {
		// Animate Out
		console.log("not");
		overlay.classList.remove("overlay-slide-right");
		overlay.classList.add("overlay-slide-left");
	}
}

// Event Listener
menuBars.addEventListener("click", toggleNav);
nav1.addEventListener("click", toggleNav);
nav2.addEventListener("click", toggleNav);
nav3.addEventListener("click", toggleNav);
nav4.addEventListener("click", toggleNav);
nav5.addEventListener("click", toggleNav);
