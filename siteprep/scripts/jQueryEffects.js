function jBounceUp() {
		$("header").addClass("up")
			.animate({paddingTop: '54.2px'}, "slow") /* padding here is [2*(height of the header element)+2*(body's top margin)] */
			.animate({bottom: '100%'}, "slow", function() {
				$("header").removeClass("down").css({paddingTop: '10px'}) /* paddingTop effects needed to seamlessly switch the header element from absoute to static position. */
				ajaxLoad(xmlpath,buildMenu,'xml/loadMenu.xsl',['#'])
			});
			
		// if the class is flagged, just call ajaxLoad
}