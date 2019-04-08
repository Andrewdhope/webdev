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
		$("[id='" + line + "']").next(".entryset").slideUp("slow", function() { // all entryset siblings
			$("[id='" + line + "']").next(".entryset").children(".entry").hide() // all entryset sibling children
		})
	} else {
		title.classList.add("active")
		$("[id='" + line + "'] span:first").html("expand_less")
		$("[id='" + line + "']").next(".entryset").children(".entry").show()
		if ($("[id='" + line + "']").next(".entryset").hasClass("vert")) {
				$("[id='" + line + "']").next(".entryset").children(".entry").css({"display": "block"})
			}
		
		if ($("[id='" + line + "']").next(".entryset").hasClass("horiz")) {
				$("[id='" + line + "']").next(".entryset").children(".entry").css({"display": "inline"})
			}
			
		$("[id='" + line + "']").next(".entryset").slideDown("slow")
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
