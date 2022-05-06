var myStory = document.getElementById('storySubmit');

myStory.onclick = function() {

	// set variables for page
	const theHeader = document.getElementById("tell-it-header");
	const theSubtext = document.getElementById("tell-it-subtext");
	const theTitle = document.getElementById("tell-it-title");

	// get input values
	let noun1 = document.getElementById('noun1').value;
	let noun1Plural = document.getElementById('noun1Plural').value;
	let noun2 = document.getElementById('noun2').value;
	let place = document.getElementById('place').value;
	let adjective = document.getElementById('adjective').value;
	let noun3 = document.getElementById('noun3').value;

	// set images to terms
	var image1 = document.getElementById("image1");
	image1.setAttribute("src", "images/icons/tomato.png")

	// set story title
	//theTitle.textContent = ("A Story About " + noun1 + ", " + noun2 + ", and " + noun3 + " at " + place + "!");
	theTitle.textContent = image1.getAttribute("src");
}

