// this file contains functions that rely primarily on jQuery effects

// jBounceUp
// creates a bounce effect the first time a user clicks on the header
// when the page loads, the header is centered vertically
// when either link option is clicked, the header slides to the top of the screen,
//  and the appropriate menu options load
function jBounceUp() {
	// if the header is already up, just load the menu
	if (document.getElementsByTagName("header")[0].classList.contains("up")) {
		ajaxLoad(xmlpath,buildMenu,'xml/loadMenu.xsl',['#']);
	} else {
		$("header").addClass("up")
			
			/* paddingTop effects are needed to seamlessly switch the header element from absoute to static position. */
			/* padding here should equal (height of the header element)+2*(body's top margin)+2*(desired padding after animation) */
			/* TODO: see if I can calculate the 87.2px value dynamically */
			.animate({paddingTop: '87.2px'}, "slow")
			
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