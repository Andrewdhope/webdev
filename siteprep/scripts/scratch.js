function first() {
	document.getElementById("content").innerHTML = "JS CONTENT";
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