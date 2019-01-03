// scripts to modify styles and animations

function expandBullet(bullet) {
		// consider getting children instead of by class name
		var header = document.getElementById(bullet);
		var title = header.childNodes[1];
		title.classList.toggle("active");
		var content = header.getElementsByClassName("line");
		for (i=0; i < content.length; i++) {
			if (content[i].style.display == "block") {
				content[i].style.display = "none";
			} else {
				content[i].style.display = "block";
			}
		}
	}

function expandLine(line) {
	var header = document.getElementById(line);
	var title = header.childNodes[1];
	title.classList.toggle("active");
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