function jBounceUp() {
		$("header").animate({bottom: '90%'});
		// if the class is flagged, just call ajaxLoad
		// else set the attribute flag (addClass), and call animate with ajaxLoad as a callback
}