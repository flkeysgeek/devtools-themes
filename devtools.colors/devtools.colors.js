chrome.devtools.panels.create(
    "Colors",
    "badge.png",
    "colors-24.html",
    function cb(panel) {
        panel.onShown.addListener(function(win){ win.focus(); });
    }
);
//colors.png https://besserwerker.com/
//https://www.iconfinder.com/icons/683988/alphabet_color_google_media_network_social_icon#size=128