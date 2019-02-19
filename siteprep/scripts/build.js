function ajaxLoad(path, callback, stylesheetPath, args) { 
	var request, xmlDoc ;
	request = new XMLHttpRequest();
	request.onreadystatechange = function() {
		if (request.readyState == 4 && request.status == 200) {
			xmlDoc = request.responseXML;
			args.unshift(xmlDoc);
			if (stylesheetPath) {
				getStylesheet(stylesheetPath, callback, args); 
			}
			else {
				callback.apply(null,args); // using apply to pass an array of arguments to the callback function
			}
		}
	}
	request.open("GET", path, true); 
	request.send();
}	

function getStylesheet(stylesheetPath, callback, args) {
	// call ajaxLoad again to get an xsl doc and unshift it into the args parameter
	ajaxLoad(stylesheetPath, callback, null, args); 
	return;
}

function buildMenu(xslDoc, xmlDoc) {
	var xsltProcessor, resultDocument, content, menu ;
	xsltProcessor = new XSLTProcessor();
	xsltProcessor.importStylesheet(xslDoc); 
	resultDocument = xsltProcessor.transformToFragment(xmlDoc, document);
	
	// content = document.getElementById("content");
	// content.innerHTML = ""; // clear content whenever menu is reloaded
	$("#content").slideUp(400, function() {
		$("#content").html("");
		$("#menu").slideUp(400, function() {
			$("#menu").html("");
			$("#menu").append(resultDocument).slideDown();
			}); // 'slide up, clear, and append'
		}
	); // clear content whenever menu is reloaded
	
	// menu = document.getElementById("menu");
	// menu.innerHTML = ""; // 'clear and append'
	
 	// menu.appendChild(resultDocument); 
	
	return;
}

function buildCareer(xslDoc, xmlDoc, sectionVal) {
	// null check on the stylesheet
	var xsltProcessor, resultDocument, content ;
	xsltProcessor = new XSLTProcessor();
	xsltProcessor.importStylesheet(xslDoc); 
	xsltProcessor.setParameter(null,"sectionVal",sectionVal); 
	resultDocument = xsltProcessor.transformToFragment(xmlDoc, document);
	
	// content = document.getElementById("content");
	// content.innerHTML = ""; // 'clear and append'
	$("#content").slideUp(400, function() {
		$("#content").html("");
		$("#content").append(resultDocument).slideDown();
		}
	); // 'slide up, clear, and append'
 	
	// content.appendChild(resultDocument); 
	
	return;
}
