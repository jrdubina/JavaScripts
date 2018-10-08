//--Navigation moves on scrolls--
// Set nav and features nav variables for window
var prevScrollpos = window.pageYOffset;
var featScrollpos = window.pageYOffset;

// Check if on Features Page to have nav and feat. nave move on scroll
if($('body div').hasClass('features_nav')){
	window.onscroll = function() {
	    var o = window.pageYOffset;
	    var f = window.pageYOffset;
	    if(window.pageYOffset > 100){
		    document.getElementById("navbar").style.top = o < prevScrollpos ? "0" : "-115px", prevScrollpos = o;

		    document.getElementById("features_nav").style.margin = f < featScrollpos ? "100px 0 0 0" : "0", featScrollpos = f
		}
	};
}
// Every other page other than Feature's
else {
	window.onscroll = function() {
	    var o = window.pageYOffset;
	    if(window.pageYOffset > 100){
	    	document.getElementById("navbar").style.top = o < prevScrollpos ? "0" : "-115px", prevScrollpos = o;
	    }
	};
}

// If click a link in the Feature page nav, collapse the nav
var clickNav = function(){
	$('#feat-collapse').click(function(){
		$(this).removeClass("in");
	});
}
// For Features Page, smooth scrolling when a link chicled on the nav
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
	});
});
// Rock and Roll
$(document).ready(function(){
	clickNav();
});
