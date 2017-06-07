var defaultColor = "blue";
/*--------------------------------------------------------------------------------------------------
--------------------------------------------------------------------------------------------------*/
function setup()
{
//    document.getElementById("saveBtn").addEventListener("click", saveOptions, false);
//    document.getElementById("eraseBtn").addEventListener("click", eraseOptions, false);
//    loadOptions();
}
function loadOptions() {
	var favColor = localStorage.favColor;

	// valid colors are red, blue, green and yellow
	if (favColor === undefined 
    || (favColor != "red" && favColor != "blue" 
    && favColor != "green" && favColor != "yellow")) 
		favColor = defaultColor;

	var select = document.getElementById("color");
	for (var i = 0; i < select.children.length; i++) {
		var child = select.children[i];
			if (child.value == favColor) {
			child.selected = "true";
			break;
		}
	}
}

function saveOptions() {
	var select = document.getElementById("color");
	var color = select.children[select.selectedIndex].value;
	localStorage.favColor = color;
}

function eraseOptions() {
	localStorage.removeItem("favColor");
	location.reload();
}
window.addEventListener('load', setup, false);
/*--------------------------------------------------------------------------------------------------
Dreamweaver LINT global references and defined variables not used here {
--------------------------------------------------------------------------------------------------*/
/*global 
    localStorage, 
    chrome 
*/
var e;			//global used for try/catch
//. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .}
(function() {[	//global variables and functions defined but not used
    loadOptions, saveOptions, eraseOptions,
    chrome, setup,
e]});
