
// ajaxLoad
// standard ajax call using the XMLHttpRequest object
// this function is used to retrieve both xml documents and xsl stylesheets
//  by calling the ajaxLoad function a second time when a stylesheet is needed
function ajaxLoad(path, callback, stylesheetPath, args) { 
	var request, xmlDoc ;
	request = new XMLHttpRequest();
	request.onreadystatechange = function() {
		if (request.readyState == 4 && request.status == 200) {
			xmlDoc = request.responseXML;
			args.unshift(xmlDoc); // the xml document will be the first argument, unless it is unshifted by an xsl stylesheet
			if (stylesheetPath) {
				// this passes the execution to getStylesheet, 
				//  which will call ajaxLoad, unshift the stylesheet,
				// 	and execute the callback (by hitting the else below)
				getStylesheet(stylesheetPath, callback, args); 
			}
			else {
				// called if no stylesheet is defined (or if the stylesheet is already unshifted)
				callback.apply(null,args); // using apply to pass an array of arguments to the callback function
			}
		}
	}
	request.open("GET", path, true); 
	request.send();
}	

// getStylesheet
// call ajaxLoad again to get an xsl doc and unshift it into the args parameter
// the xsl stylesheet path takes the place of the xml document in this call, with the stylesheet parameter null 
// (the original xml document is passed in to this function within the args parameter)
function getStylesheet(stylesheetPath, callback, args) {
	ajaxLoad(stylesheetPath, callback, null, args); 
	return;
}

// buildMenu
// as a callback function, this takes an xsl stylesheet in the first parameter, 
//  and the xml document as the second
function buildMenu(xslDoc, xmlDoc) {
	var xsltProcessor, resultDocument, content, menu ;
	xsltProcessor = new XSLTProcessor();
	xsltProcessor.importStylesheet(xslDoc); 
	resultDocument = xsltProcessor.transformToFragment(xmlDoc, document);
	
	// 'slide up, clear, and append'
	
	// \slide the content side up before re-loading the navigation menu
	$("#content").slideUp("slow", function() {
		$("#content").html(""); // clear content
		$("#menu").slideUp("slow", function() {
			// start showing the border after one of the menu options is first clicked
			if (!document.getElementById("menu").classList.contains("border")) {
				$("#menu").addClass("border")
			}
			$("#menu").html(""); // clear menu
			$("#menu").append(resultDocument).slideDown(); // append
			}); 
		}
	);
	
	// -- javascript replaced by jQuery -- // 
	// content = document.getElementById("content");
	// content.innerHTML = ""; // clear content whenever menu is reloaded
	// menu = document.getElementById("menu");
	// menu.innerHTML = ""; // 'clear and append'
 	// menu.appendChild(resultDocument); 
	
	return;
}

// buildContent // TODO: rename
// as a callback function, this takes an xsl stylesheet in the first parameter, 
//  and the xml document as the second
function buildCareer(xslDoc, xmlDoc, sectionVal) {
	// null check on the stylesheet
	var xsltProcessor, resultDocument, content ;
	xsltProcessor = new XSLTProcessor();
	xsltProcessor.importStylesheet(xslDoc); 
	xsltProcessor.setParameter(null,"sectionVal",sectionVal); 
	resultDocument = xsltProcessor.transformToFragment(xmlDoc, document);
	
	// 'slide up, clear, and append'
	$("#content").slideUp("slow", function() {
		// start showing the border after one of the menu options is first clicked
		if (!document.getElementById("content").classList.contains("border")) {
			$("#content").addClass("border")
		}
		$("#content").html("");
		$("#content").append(resultDocument).slideDown();
		}
	); 
 	
	// -- javascript replaced by jQuery -- // 
	// content = document.getElementById("content");
	// content.innerHTML = ""; // 'clear and append'
	// content.appendChild(resultDocument); 
	
	return;
}
