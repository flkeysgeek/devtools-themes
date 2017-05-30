/*--------------------------------------------------------------------------------------------------
The chrome.devtools.* API modules are available only to this page

CREDITS:
    colors*.png https://besserwerker.com/
    https://www.iconfinder.com/icons/683988/alphabet_color_google_media_network_social_icon#size=128
--------------------------------------------------------------------------------------------------*/
chrome.devtools.panels.create(
    "Colors",
    "colors-16.png",
    "colors.html",
    function cb(panel) {
        panel.onShown.addListener(function(win){ win.focus(); });
    }
);
/*--------------------------------------------------------------------------------------------------
Dreamweaver LINT global references and defined variables not used here {
--------------------------------------------------------------------------------------------------*/
/*global 
    chrome
*/
var e;			//global used for try/catch
//. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .}
(function() {[	//global variables and functions defined but not used

e]});
