//window.onload = setup;

function setup(options = {leftWidth: "60", calendarLeft: "true"} ) {
	var calendarLeft = options['calendarLeft'];
	var leftWidth = options['leftWidth'];

	var container = document.createElement('div');
	container.className = "resizeableContainer";
	var rightDiv = document.createElement('div');
	rightDiv.className = "rightDiv";
	var leftDiv = document.createElement('div');
	leftDiv.className = "leftDiv";

	var body = document.getElementsByTagName('body')[0];
	var cal = document.getElementById('calmaster');  

	var iFrame = document.createElement('iframe'); 
	iFrame.id = 'todoExtraIFrame'; 
	iFrame.src = 'https://todoist.com'; 

	if(calendarLeft == "true") {	
		rightDiv.appendChild(iFrame);
		leftDiv.appendChild(cal);
	} else {
		rightDiv.appendChild(cal);
		leftDiv.appendChild(iFrame);
	}
	container.appendChild(leftDiv);
	container.appendChild(rightDiv);
	body.appendChild(container);

	$(leftDiv).width(leftWidth + "%");
	$(leftDiv).resizable({handles: "e, w"});
}

chrome.runtime.sendMessage({method: "load"}, setup);
