function jBounceUp() {
		$("header").addClass("up")
			//.animate({paddingTop: '20px'}, "slow")
			.animate({bottom: '100%'}, "slow", function() {
				$("header").removeClass("down")
				ajaxLoad(xmlpath,buildMenu,'xml/loadMenu.xsl',['#'])
			});
			
		// if the class is flagged, just call ajaxLoad
		// little hitch at the top, but looking sweet overall
}