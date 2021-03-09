var parallax = document.querySelectorAll('.parallax');
var prevScrollpos = window.pageYOffset;
var header = document.getElementById("site-header")
window.addEventListener("scroll", function () {
	let offset = window.pageYOffset;
	for (var i = 0; i < parallax.length; i++) {
		parallax[i].style.backgroundPositionY = offset * 0.6 + "px";
	}
	if (offset > 50){
		header.classList.add("active")
	}
	else {
		header.classList.remove("active")
	}
})
