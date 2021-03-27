var xmlpath, xslpath ;

function vhViewport() {
	/* workaround to prevent footer links from appearing under the browser controls on iOS */
	/* https://css-tricks.com/the-trick-to-viewport-units-on-mobile/ */ 
	/* called with body onload */
	let vh = window.innerHeight * 0.01; 
	document.documentElement.style.setProperty('--vh', `${vh}px`);
	window.addEventListener('resize', () => {
		let vh = window.innerHeitght * 0.01; 
		document.documentElement.style.setProperty('--vh', `${vh}px`);
	});
}

function setPath(setting) {
	if (setting == "work") {
		xmlpath = "xml/career.xml"
		xslpath = "xml/transform.xsl"
	}
	
	if (setting == "life") {
		xmlpath = "xml/leisure.xml"
		xslpath = "xml/transform.xsl"
	}
}