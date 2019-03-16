// this file contains functions that rely primarily on jQuery effects

// jBounceUp
// creates a bounce effect the first time a user clicks on the header
// when the page loads, the header is centered vertically
// when either link option is clicked, the header slides to the top of the screen,
//  and the appropriate menu options load
function jBounceUp() {
	/* paddingTop effects are needed to seamlessly switch the header element from absoute to static position. */
	/* padding here should equal (height of the header element)+2*(body's top margin)+2*(desired padding after animation) */
	/* get this padding value dynamically... */
	
	var styles = window.getComputedStyle(document.documentElement); // get all styles
	var headerheight = styles.getPropertyValue('--header-height'); // convert css variable to js
	var bodymargintop = styles.getPropertyValue('--body-margin-top'); // convert css variable to js
	var totalpaddingint = parseInt(headerheight) + parseInt(bodymargintop) + 20; // convert to integers and add 20
	var totalpaddingpx = totalpaddingint+"px"; // convert to string and append px
	var animatePadding = {'paddingTop': totalpaddingpx}; // make a jQuery PlainObject for the animate function


	// if the header is already up, just load the menu
	if (document.getElementsByTagName("header")[0].classList.contains("up")) {
		ajaxLoad(xmlpath,buildMenu,'xml/loadMenu.xsl',['#']);
	} else {
			
		$("header").addClass("up")
			
			.animate(animatePadding, "slow")
			
			.animate({bottom: '100%'}, "slow", function() {
				
				/* paddingTop effects are needed to seamlessly switch the header element from absoute to static position. */
				/* without proper padding, the header will have a little hitch at the end of its animation */
				/* paddingBottom added just to give the next divs some breathing room. */
				$("header").removeClass("down").css({"paddingTop": "10px", "paddingBottom": "10px"})
				
				$("footer p").slideDown("100") /* also deploy the footer */
			});	
				
			ajaxLoad(xmlpath,buildMenu,'xml/loadMenu.xsl',['#']) // this will start before the header animation completes (but it takes a few)
	}
}