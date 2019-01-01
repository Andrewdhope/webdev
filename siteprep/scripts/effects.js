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
	var items = menulist.childNodes;
	for (i = 0; i < items.length; i++) {
		items[i].className = "unselected";
		if (items[i].nodeValue == option) {
			items[i].className = "selected";
		}
	}
}