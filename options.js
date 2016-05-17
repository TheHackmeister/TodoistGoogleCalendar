// Saves options to chrome.storage
function save_options() {
	localStorage['leftWidth'] = document.getElementById('leftWidth').value;

	var calendarLeft = document.getElementById('calendarLeft').checked;
	if(calendarLeft == true) 
		localStorage['calendarLeft'] = "true";
	else
		localStorage['calendarLeft'] = "false";

	var status = document.getElementById('status');
	status.textContent = 'Options saved.';
	setTimeout(function() {
		status.textContent = '';
	}, 750);
}

// Restores select box and checkbox state using the preferences
function restore_options(options) {
    document.getElementById('leftWidth').value = options.leftWidth;

    if(options.calendarLeft == "true") 
	    document.getElementById('calendarLeft').checked = true;
    else
	    document.getElementById('calendarLeft').checked = false;
}

document.addEventListener('DOMContentLoaded', function() {
	chrome.runtime.sendMessage({method: "load"}, restore_options);
});

document.addEventListener('click', save_options);
