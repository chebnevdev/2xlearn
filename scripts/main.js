var modal = document.getElementById("myModal");
var techHeader = document.getElementById("technique-header");
var techBody = document.getElementById("technique-body");
var techFooter = document.getElementById("technique-footer");

function getInfo(technique) {
	let headerContent;
	let bodyContent;
	let footerContent;
	
	switch (technique) {
		case "pomodoro":
			headerContent = "The Pomodoro Technique";
			bodyContent = `
				<p>This technique helps you focus on the problem by these simple steps:</p>
				<ul>
					<li>Disable notifications or any other sources of distraction</li>
					<li>Set up a timer for 25 minutes</li>
					<li>Start working on the problem</li>
				</ul>
				<p>After completing the pomodoro take a break for 5 minutes, reward yourself somehow 
				(for example, check mail or surf the web a bit) and then go to the next pomodoro.</p>
`;
			footerContent = "Rewarding yourself is very important for this technique to strengthen!";
			break;
		case "mempfal":
			headerContent = "The Memory Palace";
			bodyContent = "";
			footerContent = "Don't forget to reward yourself afterwards!";
			break;
		default:
			headerContent = "What's that?";
			bodyContent = "<h4>Whoa?</h4>";
			footerContent = "I donno know...";
			break;
	}
	techHeader.textContent = headerContent;
	techBody.innerHTML = bodyContent;
	techFooter.textContent = footerContent;
	// When the user clicks the button, open the modal 
	modal.style.display = "block";
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}