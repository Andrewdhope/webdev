// this file contains functions that rely primarily on jQuery effects

// jBounceUp
// creates a bounce effect the first time a user clicks on the header
// when the page loads, the header is centered vertically
// when either link option is clicked, the header slides to the top of the screen,
//  and the appropriate menu options load
function jBounceUp() {
	
	/* these css variables aren't as necessary after refactoring, but they're useful in theory */	
	/* all they do now is dip the padding down during the initial animation */
	/* could simplify this, but they also serve a purpose as a useful code sample for future reference */
	/* sadly, the css 'custom properties' are not well supported by IE so there is a workaround to hardcode paddingTop */
	
	let styles = window.getComputedStyle(document.documentElement); // get all styles
	let headerpaddingtop = styles.getPropertyValue('--header-padding-top'); // convert css variable to js
	let headerpaddingbottom = styles.getPropertyValue('--header-padding-bottom'); // convert css variable to js
	let totalpaddingint = parseInt(headerpaddingtop) + 2*parseInt(headerpaddingbottom) // controls how much the header dips before rising
	let totalpaddingvh = totalpaddingint+"vh"; // convert to string and append vh
	let animatePadding = {paddingTop: totalpaddingvh}; // make a jQuery PlainObject for the animate function

	// if the header is already up, just load the menu
	if (document.getElementsByTagName("header")[0].classList.contains("up")) {
		ajaxLoad(xmlpath,buildMenu,'xml/loadMenu.xsl',['#']);
	} else {
	
		$("header").addClass("up");
		
		// *sigh* IE workaround
		if (window.ActiveXObject !== undefined)
		{
			$("header").animate({paddingTop: "44vh"}, "slow"); // need to hardcode the paddingTop value for IE (from totalpaddingvint) 
	
		}
		else // better browsers
		{
			$("header").animate(animatePadding, "slow"); // use the PlainObject constructed above
		}
		
		$("header").animate({paddingTop: '0vh'}, "slow", function() {
		ajaxLoad(xmlpath,buildMenu,'xml/loadMenu.xsl',['#']) // takes a few seconds, async
			$("#wrapper").animate({width: '100%'}, "slow") 
			$("footer p").slideDown("100") 
			$(".centered").animate({paddingRight: '0vw'}, "slow", function() {
				$("header").removeClass("down").css({width: '100%'}) // .down class deprecated
			});
		});	
	}
}