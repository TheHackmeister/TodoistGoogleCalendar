window.onload = addTodoist;


function addTodoist() {
	document.getElementById('calmaster').style.width='60%';  
	var iDiv = document.createElement('iframe'); 
	iDiv.id = 'todoExtraIFrame'; 
	iDiv.src = 'https://todoist.com'; 
	iDiv.style.backgroundColor = 'blue'; 
	iDiv.style.height='100%'; 
	iDiv.style.width='40%'; 
	iDiv.style.position='absolute'; 
	iDiv.style.right = '0px';  
	iDiv.style.top = '0px'; 
	iDiv.frameBorder ='0'; 
	iDiv.style.borderLeftWidth = '1px'; 
	iDiv.style.zIndex='100';
	document.getElementById('rhstogglecell').style.zIndex='95'; 
	document.getElementsByTagName('body')[0].appendChild(iDiv); 
}
