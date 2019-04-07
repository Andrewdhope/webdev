// scripts to modify styles and animations


// expandBullet
// change the icon and slide the content up/down
function expandBullet(bullet) {
	// consider getting children instead of by class name
	var header = document.getElementById(bullet);
	var title = header.childNodes[1]; // h2
	
	// change the icon and slide the content up/down
	if (title.classList.contains("active")) {
		title.classList.remove("active")
		$("#" + bullet + " span:first").html("expand_more")
		$("#" + bullet + " .lineset").slideUp("slow", function(){
			$("#" + bullet + " .line").hide()
		})		
	
	} else {
		if (!title.classList.contains("empty")) // don't offer to expand an empty div 
		{
			title.classList.add("active")
			$("#" + bullet + " span:first").html("expand_less")	
			$("#" + bullet + " .line").show()
			if ($("#" + bullet + " .lineset").hasClass("vert")) {
				$("#" + bullet + " .line").css({"display": "block"})
			}
			if ($("#" + bullet + " .lineset").hasClass("horiz")) {
				$("#" + bullet + " .line").css({"display": "inline"})
			}
			$("#" + bullet + " .lineset").slideDown("slow")
		}
	}
}


// expandLine
// change the icon and slide the content up/down
function expandLine(line) {
	var header = document.getElementById(line);
	var title = header.childNodes[1]; // h3
	
	if (title.classList.contains("active")) {
		title.classList.remove("active")
		$("[id='" + line + "'] span:first").html("expand_more")
		$("[id='" + line + "'] .entryset").slideUp("slow", function() {
			$("[id='" + line + "'] .entry").hide()
		})
	} else {
		title.classList.add("active")
		$("[id='" + line + "'] span:first").html("expand_less")
		$("[id='" + line + "'] .entry").show() 
		if ($("[id='" + line + "'] .entryset").hasClass("vert")) {
				$("[id='" + line + "'] .entry").css({"display": "block"})
			}
			
		// workaround
		// my xsl doc can create the entryset as a div or a span
		// a div works better for the vertical orientation
		// this workaround converts the div to a span for the horizontal orientation
		if ($("[id='" + line + "'] div.entryset").hasClass("horiz")) {	
				// create a span, move entries into it, and remove the div
				$("[id='" + line + "']").append("<span class='entryset horiz'>")
				$("[id='" + line + "'] span.entryset").append($("[id='" + line + "'] div.entryset .entry"))
				$("[id='" + line + "'] div.entryset").remove()
		}
		
		// execute the normal animation once the entryset is converted to a span
		// TODO: something about the inline display causes a significant hitch (arenas)
		if ($("[id='" + line + "'] span.entryset").hasClass("horiz")) {
				$("[id='" + line + "'] .entry").css({"display": "inline"})
			}
			
		$("[id='" + line + "'] .entryset").slideDown("slow")
	}
}
	

// selectedMenu
// on-menu-click, style the selected menu option, and unstyle all other menu options
function selectedMenu(option) {
	var menulist = document.getElementsByClassName("menulist");
	for (i = 0; i < menulist.length; i++) {
		menulist[i].childNodes[0].style.fontWeight = "normal";
		menulist[i].childNodes[0].className = "unselected"; // classList.toggle?
		if (menulist[i].childNodes[0].childNodes[0].nodeValue == option) {
			menulist[i].childNodes[0].style.fontWeight = "bold";
			menulist[i].childNodes[0].className = "selected";
		}
	}
}
