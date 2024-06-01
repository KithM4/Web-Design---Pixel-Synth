const header = document.querySelector("header");

window.addEventListener ("scroll", function() {
	header.classList.toggle ("sticky", window.scrollY > 0);
});


window.onscroll = () => {
	menu.classList.remove('bx-x');
	navlist.classList.remove('active');
};

const sr = ScrollReveal ({
	distance: '45px',
	duration: 2700,
	reset: true
})

sr.reveal('.home-text',{delay:350, origin:'left'})
sr.reveal('.home-img',{delay:350, origin:'right'})

sr.reveal('.sub-service,.about,.portfolio,.service,.cta,.contact',{delay:200, origin:'bottom'})



// JavaScript for toggling the menu
const menuIcon = document.getElementById("menu-icon");
const navList = document.querySelector(".navlist");

menuIcon.addEventListener("click", () => {
    console.log("Menu icon clicked."); // Log a message to the console
    navList.classList.toggle("active");
    console.log("Nav list toggled."); // Log another message
});











