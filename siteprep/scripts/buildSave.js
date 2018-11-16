function ajaxLoad(url, callback, args) { 
	var request = new XMLHttpRequest();
	request.onreadystatechange = function() {
		if (request.readyState == 4 && request.status == 200) {
			var xmlDoc = request.responseXML;
			args.unshift(xmlDoc);
			callback.apply(null,args); // using apply to pass an array of arguments to the callback function
			}
	}
	request.open("GET", url, true); 
	request.send();
}	

function ajaxReturn(url) { 
	var request = new XMLHttpRequest();
	// request.onreadystatechange = function() {
	//	if (request.readyState == 4 && request.status == 200) {
	//		var xmlDoc = request.responseXML;
	//		}
	//}
	request.open("GET", url, false); // shouldn't execute synchronously 
	request.send();
	var xmlDoc = request.responseXML;
	return xmlDoc;
}

function buildCareer(xmlDoc, stylesheetUrl, sectionVal) {
	var xslDoc = ajaxReturn(stylesheetUrl); // null check on the stylesheet
	xsltProcessor = new XSLTProcessor();
	xsltProcessor.importStylesheet(xslDoc); 
	xsltProcessor.setParameter(null,"sectionVal",sectionVal); 
	resultDocument = xsltProcessor.transformToFragment(xmlDoc, document);
	var content = document.getElementById("content");
	// get the first text node properly
	content.replaceChild(resultDocument, content.firstChild); 
	return;
}