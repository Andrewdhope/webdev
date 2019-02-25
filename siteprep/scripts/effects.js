// scripts to modify styles and animations

function expandBullet(bullet) {
	// consider getting children instead of by class name
	var header = document.getElementById(bullet);

	var title = header.childNodes[1];
	
	// then I could also put in the proper border effect as well
	if (title.classList.contains("active")) {
		$("#" + bullet + " div.lineset").slideUp("slow", function(){
			$("#" + bullet + " div.line").hide()
		})
		title.classList.remove("active") // change the "-" to "+"
	} else {
		title.classList.add("active")
		$("#" + bullet + " div.line").show()
		$("#" + bullet + " div.lineset").slideDown("slow")
	}

	/* 
	
	// JS method for showing and hiding each of the lines
	// replaced wit jQuery approach in 2/2019
	
	var content = header.getElementsByClassName("line");
	for (i=0; i < content.length; i++) {
		if (content[i].style.display == "block") {
			content[i].style.display = "none";
		} else {
			content[i].style.display = "block";
		}
	} 
	
	*/
}

function expandLine(line) {
	var header = document.getElementById(line);
	var title = header.childNodes[1];
	
	// this approach would look slightly better if the lines had a containing div
	// HTML element ids should not contain spaces ("Partners Healthcare")
	if (title.classList.contains("active")) {
		$("[id='" + line + "'] div.project").slideUp()
		$("[id='" + line + "'] div.entry").slideUp()
		title.classList.remove("active") // change the "-" to "+"
	} else {
		title.classList.add("active")
		$("[id='" + line + "'] div.project").hide().slideDown()
		$("[id='" + line + "'] div.entry").hide().slideDown()
	}
	
	/*
	
	// here is the JS method for showing and hiding each of the lines
	// replaced wit jQuery approach in 2/2019
	
	var content = header.childNodes;
	for (i=0; i < content.length; i++) {
		if (content[i].nodeType == 1 && (content[i].className == "project" || content[i].className == "entry")) {
			if (content[i].style.display  == "block") {
				content[i].style.display = "none";
			} else {
				content[i].style.display = "block";
			}
		}
	}
	
	*/
}

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
