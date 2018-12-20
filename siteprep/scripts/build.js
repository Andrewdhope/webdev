function ajaxLoad(path, callback, stylesheetPath, args) { 
	var request, xmlDoc ;
	request = new XMLHttpRequest();
	request.onreadystatechange = function() {
		if (request.readyState == 4 && request.status == 200) {
			xmlDoc = request.responseXML;
			// check if args exist first
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

// debugging function
function ajaxReturn(path) { 
	// caution - ajax sync requests are being deprecated
	var request, xmlDoc ;
	request = new XMLHttpRequest();
	request.open("GET", path, false); // executes synchronously
	request.send();
	xmlDoc = request.responseXML;
	return xmlDoc;
}

function getStylesheet(stylesheetPath, callback, args) {
	// call ajaxLoad again to get an xsl doc and unshift it into the args parameter
	ajaxLoad(stylesheetPath, callback, null, args); 
	return;
}

function buildMenu(xslDoc, xmlDoc) {
	var xsltProcessor, resultDocument, content ;
	xsltProcessor = new XSLTProcessor();
	xsltProcessor.importStylesheet(xslDoc); 
	resultDocument = xsltProcessor.transformToFragment(xmlDoc, document);
	content = document.getElementById("menu");
	content.innerHTML = ""; // 'clear and append'
 	content.appendChild(resultDocument); 
	return;
}

function buildCareer(xslDoc, xmlDoc, sectionVal) {
	// null check on the stylesheet
	var xsltProcessor, resultDocument, content ;
	xsltProcessor = new XSLTProcessor();
	xsltProcessor.importStylesheet(xslDoc); 
	xsltProcessor.setParameter(null,"sectionVal",sectionVal); 
	resultDocument = xsltProcessor.transformToFragment(xmlDoc, document);
	content = document.getElementById("content");
	content.innerHTML = ""; // 'clear and append'
 	content.appendChild(resultDocument); 
	return;
}

function expandBullet(bullet) {
		// consider getting children instead of by class name
		var header = document.getElementById(bullet);
		header.classList.toggle("active");
		var content = header.getElementsByClassName("line");
		if (content[0].style.display === "block") {
			content[0].style.display = "none";
		} else {
			content[0].style.display = "block";
		}
	}