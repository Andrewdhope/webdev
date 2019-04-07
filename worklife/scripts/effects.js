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
		$("#" + bullet + " div.lineset").slideUp("slow", function(){
			$("#" + bullet + " span.line").hide()
		})		
	
	} else {
		if (!title.classList.contains("empty")) // don't offer to expand an empty div 
		{
			title.classList.add("active")
			$("#" + bullet + " span:first").html("expand_less")	
			$("#" + bullet + " span.line").show()
			if ($("#" + bullet + " div.lineset").hasClass("vert")) {
				$("#" + bullet + " span.line").css({"display": "block"})
			}
			if ($("#" + bullet + " div.lineset").hasClass("horiz")) {
				$("#" + bullet + " span.line").css({"display": "inline"})
			}
			$("#" + bullet + " div.lineset").slideDown("slow")
		}
	}
}


// expandLine
// change the icon and slide the content up/down
function expandLine(line) {
	var header = document.getElementById(line);
	var title = header.childNodes[0]; // h3
	
	// this approach would look slightly better if the lines had a containing div
	if (title.classList.contains("active")) {
		title.classList.remove("active")
		$("[id='" + line + "'] span:first").html("expand_more")
		$("[id='" + line + "'] .entryset").slideUp("slow", function() {
			$("[id='" + line + "'] span.entry").hide()
		})
	} else {
		title.classList.add("active")
		$("[id='" + line + "'] span:first").html("expand_less")
		$("[id='" + line + "'] span.entry").show()
		if ($("[id='" + line + "'] .entryset").hasClass("vert")) {
				$("[id='" + line + "'] span.entry").css({"display": "block"})
			}
		if ($("[id='" + line + "'] .entryset").hasClass("horiz")) {
				$("[id='" + line + "'] span.entry").css({"display": "inline"})
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
