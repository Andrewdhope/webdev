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
		var header = document.getElementById(bullet);
		header.classList.toggle("active");
		var content = header.firstElementChild.nextElementSibling;
		if (content.style.display === "block") {
			content.style.display = "none";
		} else {
			content.style.display = "block";
		}
	}