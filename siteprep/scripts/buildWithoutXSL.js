function ajaxLoad(url, callback, args) { 
	var request = new XMLHttpRequest();
	request.onreadystatechange = function() {
		if (request.readyState == 4 && request.status == 200) {
			var xmlDoc = request.responseXML;
			args.unshift(xmlDoc);
			callback.apply(null,args); // using apply to pass a variable-length array of arguments to the callback function
			}
	}
	request.open("GET", url, true); 
	//xhttp.setRequestHeader("Content-Type", "text/xml");
	request.send();
}

function buildCareer(xmlDoc, sectionVal) {
	var i, j, text;
	text = "" ; // initially null to avoid printing undefined or null
	var section = getElementByAttributeValue(xmlDoc,"section","option",sectionVal)
	var b = section.getElementsByTagName("bullet");
	if (b) { // check validation
		for (i = 0; i < b.length; i++) {
			var title = b[i].getElementsByTagName("title");
				if (title) {
				var t = getNextText(title[0]);
				if (t) { // check validation
					text += "<h2>" + t + "</h2>" ;	
				}
			}
			var lines = b[i].getElementsByTagName("line"); 
			for (j = 0; j < lines.length; j++) {
				var l = getNextText(lines[j]);
				if (l) { // check validation
					text += "<p>" + getNextText(lines[j]) + "</p>" ;
				}
			}
		}
	}
	document.getElementById("content").innerHTML = text;
	return;
}

//returns first element with the specified attribute value
function getElementByAttributeValue(xml,tag,attr,value){
	// xml - check validation
	var elements = xml.getElementsByTagName(tag);
	// elements - check validation
	for (i = 0; i < elements.length; i++) { 
		var e = elements[i].getAttribute(attr) ;
		if (e == value) {return elements[i]}
	}
}

//test by adding an attribute node
function getNextText(node) {
	if (node) { // check validation
		var child = node.firstChild;
		if (!child) { return ;} // check validation
		while (child.nodeType != 3) {
			child = child.nextSibling; 
		}
		return child.nodeValue;
	}
	return ;
}
