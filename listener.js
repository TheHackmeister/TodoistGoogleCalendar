chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.method == "load") {
	if(typeof localStorage['leftWidth'] == 'undefined') localStorage['leftWidth'] = "60";
	if(typeof localStorage['calendarLeft'] == 'undefined') localStorage['calendarLeft'] = "true";
	sendResponse({leftWidth: localStorage['leftWidth'], calendarLeft: localStorage['calendarLeft']} );
    } 
    /**else if (request.method == "save") {
	localStorage['leftWidth'] = request.leftWidth;
	localStorage[''] = request.calendarLocation;
    } */
});
