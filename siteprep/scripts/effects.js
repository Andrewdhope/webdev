// scripts to modify styles and animations

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

function selectedMenu(option) {
	var menulist = document.getElementsByClassName("menulist");
	for (i = 0; i < menulist.length; i++) {
		menulist[i].childNodes[0].className = "unselected";
		if (menulist[i].childNodes[0].childNodes[0].nodeValue == option) {
			menulist[i].childNodes[0].className = "selected";
		}
	}
}