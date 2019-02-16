function jBounceUp() {
		$("header").addClass("up")
			.animate({bottom: '90%'}, "slow", function() {
				ajaxLoad(xmlpath,buildMenu,'xml/loadMenu.xsl',['#'])
				$("header").removeClass("down")
			});
			
		// if the class is flagged, just call ajaxLoad
		// else set the attribute flag (addClass), and call animate with ajaxLoad as a callback
		
}