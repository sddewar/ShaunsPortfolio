$(document).ready(function(){

	var tag;
	var x=-1;
	// Select all links with hashes
	$('a[href*="#"]')
	  // Remove links that don't actually link to anything
	  .not('[href="#"]')
	  .not('[href="#0"]')
	  .click(function(event) {
		// On-page links
		if (
		  location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
		  && 
		  location.hostname == this.hostname
		) {
		  // Figure out element to scroll to
			var target = $(this.hash);
			tag = this.hash;
			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
			// Does a scroll target exist?
			if (target.length) {
			// Only prevent default if animation is actually gonna happen
				event.preventDefault();
//				alert(this.hash);
				if (tag == '#graphics') {
					$('#industry').hide(); // resolve issue with graphics not being removed due to video on graphics screen
				}
				if (tag == '#graphics') {
					$('#user').hide(); // resolve issue with graphics not being removed due to video on graphics screen
				}
				$(this.hash).show();
				$('html, body').animate({
				  scrollTop: target.offset().top
				}, 1000, function() {
				  // Callback after animation
				  // Must change focus!
					var $target = $(target);
					newPage(tag);
					closeNav();
					$target.focus();
					if ($target.is(":focus")) { // Checking if the target was focused
						return false;
					} else {
						$target.attr('tabindex',x); // Adding tabindex for elements not focusable
						$target.focus(); // Set focus again
						x=x-1;
					};
				});
			}
		}
	 });
});
  function newPage(id){
	if (id != '#home'){
		$('#home').hide();
	}
	if (id != '#projects'){
		$('#projects').hide();
	}
	if (id != '#graphics'){
		$('#graphics').hide();
	}
	if (id != '#sound'){
		$('#sound').hide();
	}
	if (id != '#qualifications'){
		$('#qualifications').hide();
	}
	if (id != '#industry'){
		$('#industry').hide();
	}
	if (id != '#about'){
		$('#about').hide();
	}
	if (id != '#contact'){
		$('#contact').hide();
	}
	if (id != '#user'){
		$('#user').hide();
	}
	
	if (id == '#qualifications' || id == '#industry' || id == '#about' || id == '#user'){
		// show scroll bars so all of the details can be seen
		$('body').attr('style','overflow: visible');
		$('html').attr('style','overflow: visible');
		
	} else {
		// hide scroll bars
		$('body').attr('style','overflow: hidden');
		$('html').attr('style','overflow: hidden');

		
	}	
}

function openNav() {
	document.getElementById("mainmenu").style.width = "250px";
}

function closeNav() {
	document.getElementById("mainmenu").style.width = "0";
}
