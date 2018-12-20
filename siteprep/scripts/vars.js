var xmlpath, xslpath ;

function setPath(setting) {
	if (setting == "work") {
		xmlpath = "xml/career.xml"
		xslpath = "xml/transform.xsl"
	}
	
	if (setting == "life") {
		xmlpath = "xml/life.xml"
		xslpath = "xml/transform.xsl"
	}
}