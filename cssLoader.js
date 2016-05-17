function loadCSS(path){
	var link = document.createElement('link');
	link.href =  chrome.extension.getURL(path);
	link.rel = 'stylesheet';
	document.documentElement.insertBefore(link, null);
}

loadCSS("main.css");
loadCSS("jQuery/jquery-ui.structure.css");
loadCSS("jQuery/jquery-ui.theme.css");
