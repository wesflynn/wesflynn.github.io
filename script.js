// this funtion is replacing images on the gallery page when the icons are clicked.
document.addEventListener("DOMContentLoaded", function () {
	var gallery = document.querySelector("div#thumbnails");
	var links = gallery.getElementsByTagName('img');
	for (var i=0;i<links.length;i++) {
		links[i].onclick = function() {
 			var source = this.getAttribute('src');
			var placeholder = document.getElementById('placeholder');
			placeholder.setAttribute('src',source);
			return false;
		}
	}
});
function openNav() {
	// this makes it so if the screen is smaller then 480 the menu
	//will take up the whole screen instead of 250 pixels
	if (window.screen.availWidth < 480){
	document.getElementById("mySidenav").style.width = "100%";
	document.getElementById("push1").style.marginLeft = "100%";
	document.getElementById("push2").style.marginLeft = "100%";
	document.getElementById("push3").style.marginLeft = "100%";}
	else{
	document.getElementById("mySidenav").style.width = "250px";
	document.getElementById("push1").style.marginLeft = "200px";
	document.getElementById("push2").style.marginLeft = "250px";
	document.getElementById("push3").style.marginLeft = "250px";}

}
function closeNav() {
	//closes the nav menu
	document.getElementById("mySidenav").style.width = "0";
	document.getElementById("push1").style.marginLeft = "0";
	document.getElementById("push2").style.marginLeft = "0";
	document.getElementById("push3").style.marginLeft = "0";}	
function email() {
	// this makes the email pop up onclick but unfortunatly i could
	// it to hide again with the same onclick this code is left here
	// just incase i can solve it later.
	// var isVisible = document.getElementById("email").offsetWidth > 0 || document.getElementById("email").offsetHeight > 0;
	// if (isVisible = true){
	// 	document.getElementById("email").style.visibility = 'hidden';
	// }
	// else{
	document.getElementById("email").style.visibility = 'visible';
	// }
}
