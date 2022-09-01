const btn = document.querySelector("#navbar-button");
const btnsvgopen = document.querySelector("#navbar-button-open");
const btnsvgclose = document.querySelector("#navbar-button-close");
const menu = document.querySelector("#mega-menu-full");

const btn1 = document.querySelector("#mega-menu-full-dropdown-button");
const btn1svg = document.querySelector("#mega-menu-full-dropdown-button svg");
const menu1 = document.querySelector("#mega-menu-full-dropdown");


btn.addEventListener("click", () => {
	menu.classList.toggle("hidden");
	if(menu.classList.contains("hidden")){
		if(!menu1.classList.contains("hidden")){
			menu1.classList.add("hidden");
			btn1svg.classList.toggle("-rotate-90");
		}

		btnsvgclose.classList.add("hidden");
		btnsvgopen.classList.remove("hidden");
	}else{
		btnsvgclose.classList.remove("hidden");
		btnsvgopen.classList.add("hidden");
	}
});

btn1.addEventListener("click", () => {
	btn1svg.classList.toggle("-rotate-90");
	menu1.classList.toggle("hidden");
	if((!menu1.classList.contains("hidden")) & menu.classList.contains("hidden")){
		menu.classList.toggle("hidden");
		btnsvgclose.classList.remove("hidden");
		btnsvgopen.classList.add("hidden");
	}
});

