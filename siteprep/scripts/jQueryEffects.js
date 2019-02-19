function jBounceUp() {
	if (document.getElementsByTagName("header")[0].classList.contains("up")) {
		ajaxLoad(xmlpath,buildMenu,'xml/loadMenu.xsl',['#']);
	} else {
		$("header").addClass("up")
			
			/* padding here should equal (height of the header element)+2*(body's top margin)+2*(desired padding after animation) */
			.animate({paddingTop: '55.2px'}, "slow")
			
			.animate({bottom: '100%'}, "slow", function() {
				
				/* paddingTop effects are needed to seamlessly switch the header element from absoute to static position. */
				$("header").removeClass("down").css({"paddingTop": "10px", "paddingBottom": "10px"}) 
			});	
				
			ajaxLoad(xmlpath,buildMenu,'xml/loadMenu.xsl',['#']) // this will start before the header animation completes (but it takes a few)
				
	}
}