function jBounceUp() {
		$("header").addClass("up")
			.animate({padding-top: '20px', slow})
			.animate({bottom: '90%'}, "slow", function() {
				$("header").removeClass("down")
				ajaxLoad(xmlpath,buildMenu,'xml/loadMenu.xsl',['#'])
			});
			
		// if the class is flagged, just call ajaxLoad
		// else set the attribute flag (addClass), and call animate with ajaxLoad as a callback
}