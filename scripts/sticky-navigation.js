/* sticky-navigation.js. Sticky Navigation Bar. Credit to w3schools. Taken from https://www.w3schools.com/howto/howto_js_navbar_sticky.asp
Code pasted by student cand. 102
Logo behaviour (line 10,20,21,25,26) by student cand. 122 */

// When the user scrolls the page, execute myFunction 
window.onscroll = function() {myFunction()};

// Get the navbar and logo
var navbar = document.getElementById("navbar");
var logo = document.getElementsByClassName("logo")[0];

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
// Also add the logoSticky class to the logo when this happens, so that the logo appears in the navbar
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
	logo.classList.add ("logoSticky");
	logo.classList.remove ("logoHidden");
	
  } else {
    navbar.classList.remove("sticky");
	logo.classList.remove ("logoSticky");
	logo.classList.add ("logoHidden");
  }
}