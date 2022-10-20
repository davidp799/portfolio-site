let myStory = document.getElementById('storySubmit');
let myWindow;

function delay(n){
	return new Promise(function(resolve){
		setTimeout(resolve,n*1000);
	});
}
async function openSearch(terms){
	for (let i=0; i<terms.length; i++) {
		myWindow = window.open("https://www.google.com/search?tbm=isch&as_q=" + terms[i] + "&tbs=isz:lt,islt:4mp,sur:fmc", 
		"_blank", "toolbar=no,scrollbars=no,resizable=no,top=700,left=700,width=700,height=700");
		await delay(3);
		myWindow.close();
	}
}

myStory.onclick = function() {
	// set variables for page
	const theSubtext = document.getElementById("tell-it-subtext");

	// get input values
	let noun1 = document.getElementById('noun1').value;
	let noun2 = document.getElementById('noun2').value;
	let adjective1 = document.getElementById('adjective1').value;
	let verb1 = document.getElementById('verb1').value;
	let adjective2 = document.getElementById('adjective2').value;
	let place = document.getElementById('place').value;
	// add to array
	const terms = [noun1, noun2, adjective1, verb1, adjective2, place];
	
	// set story title
	theSubtext.textContent = ("A Story home " + noun1 + ", and " + noun2 + ", " 
			+ adjective1 + " " + verb1 + " in " + adjective2 + " " + place + "!");
	// set images to terms
	openSearch(terms);
	
	return false;
}
