var addToPage = function (loc) {
	var s = document.createElement("script");
	s.src = chrome.extension.getURL(loc);
	(document.head||document.documentElement).appendChild(s);
}


addToPage("Javascript\\todoist.js");
