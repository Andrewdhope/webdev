function jBounceUp() {
		$("header")..addClass("up")
			.css("padding-top","20px")
			.animate({bottom: '90%'}, "slow", "ajaxLoad(xmlpath,buildMenu,'xml/loadMenu.xsl',['#'])")
			.css("transform": "none", "position": "static", "right": "0%");
		// if the class is flagged, just call ajaxLoad
		// else set the attribute flag (addClass), and call animate with ajaxLoad as a callback
		
}