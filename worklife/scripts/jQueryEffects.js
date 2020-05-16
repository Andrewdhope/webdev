// this file contains functions that rely primarily on jQuery effects

// jBounceUp
// creates a bounce effect the first time a user clicks on the header
// when the page loads, the header is centered vertically
// when either link option is clicked, the header slides to the top of the screen,
//  and the appropriate menu options load
function jBounceUp() {

	/* paddingTop effects are needed to seamlessly switch the header element from absoute to static position */
	/* without proper padding, the header will have a little hitch at the end of its animation */
	/* paddingTop here should equal (height of the header element)+2*(body's top margin)+2*(desired padding after animation) */
	/* building variables to convert existing css variables into JS so we can get this padding value dynamically... */
	
	/* sadly, the css variables are not well supported by IE so there is a workaround to hardcode paddingTop */
	
	var styles = window.getComputedStyle(document.documentElement); // get all styles
	var headerpaddingtop = styles.getPropertyValue('--header-padding-top'); // convert css variable to js
	var headerpaddingbottom = styles.getPropertyValue('--header-padding-bottom'); // convert css variable to js
	var totalpaddingint = parseInt(headerpaddingtop) + 2*parseInt(headerpaddingbottom) // controls how much the header dips before rising
	var totalpaddingvh = totalpaddingint+"vh"; // convert to string and append vh
	var animatePadding = {paddingTop: totalpaddingvh}; // make a jQuery PlainObject for the animate function

	// if the header is already up, just load the menu
	if (document.getElementsByTagName("header")[0].classList.contains("up")) {
		ajaxLoad(xmlpath,buildMenu,'xml/loadMenu.xsl',['#']);
	} else {
	
		$("header").addClass("up");
		
		// *sigh* IE workaround
		if (window.ActiveXObject !== undefined)
		{
			$("header").animate({paddingTop: "44vh"}, "slow"); // need to hardcode the paddingTop value for IE
			// ...one problem with hardcoding is you can't really trace why its set that way
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