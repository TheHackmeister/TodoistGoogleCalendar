//window.onload = setup;

function setup(options = {leftWidth: "60", calendarLeft: "true"} ) {
	debugger;
	//await sleep(2000);
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

		// Why the first loop through doesn't catch everything I don't know. Doing it twice takes care of things.
		for(let element of body.childNodes)
		{
			leftDiv.appendChild(element);
		}
		for(let element of body.childNodes)
		{
			leftDiv.appendChild(element);
		}

	} else {
		rightDiv.appendChild(cal);
		for(let element of body.childNodes)
		{
			leftDiv.appendChild(element);
		}
		for(let element of body.childNodes)
		{
			leftDiv.appendChild(element);
		}
	}
	container.appendChild(leftDiv);
	container.appendChild(rightDiv);
	body.appendChild(container);

	$(leftDiv).width(leftWidth + "%");
	$(leftDiv).resizable({handles: "e, w"});
}

chrome.runtime.sendMessage({method: "load"}, setup);
