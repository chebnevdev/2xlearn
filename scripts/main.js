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
		case "recall":
			headerContent = "Recall";
			bodyContent = `
				<p>Recalling material from your brain rather than re-reading the book might 
				greatly boost your learning speed.</p>
				<p>Not only it gives you more understanding of the subject you learn but it also
				helps you find weak points that you can not compose into complete picture.</p>
`;
			footerContent = "It might feel really hard in the beginning but don't give up!";
			break;
		case "sleep":
			headerContent = "Sleep";
			bodyContent = `
				<p>This point is super-important for learning and can not be overemphasized.</p>
				<p>There are plenty crucial processes happening in one's brain in sleep. One of them is
				washing away toxins that has appeared in the process of daily brain activity. Another 
				important point is that while we sleep strong neuron connections become even more stronger
				and weak connections can disappear completely.</p>
				<p>Exercising on a subject right before going to sleep can greatly increase your 
				understanding thanks to these processes.</p>
`;
			footerContent = "If you exercise before the bed you could even have a dream about it!";
			break;
		case "mempal":
			headerContent = "The Memory Palace";
			bodyContent = `
				<p>This technique helps you remember lots of items using space and images. Here are the steps:</p>
				<ul>
					<li>Think of some place that you know well (or you can create it in your imagination)</li>
					<li>Create images of items you want to remember</li>
					<li>One by one, place those images in different locations of the place</li>
				</ul>
				<p>After using this technique for some time you will notice that it takes less and less time
				for you to place items in that palace.</p>
				<p>And as many great practices, this one not only helps you to remember but also gains you more
				understanding of the subject.</p>
`;
			footerContent = "Spatial memory is a very powerful memory mechanism";
			break;
		case "anmet":
			headerContent = "Analogies & Metaphors";
			bodyContent = `
				<p>Remember first time you have heard about some really complex concept that
				seems very easy for you know. There is a way we can make process of understanding new 
				concepts faster.</p>
				<p>Try to use analogies and metaphors to compare new concepts with some processes that you 
				are already familiar with. For example, thinking about focused mode as of an octupus makes sense: 
				it can grab little number of things with its tentacles and can not spread them really far - just like
				our brain when we are concentrated.</p>
`;
			footerContent = "The more unusual associations you use, the better the result";
			break;
		case "frog":
			headerContent = "Eat your frogs first";
			bodyContent = `
				<p>I JUST DON'T WANT TO DO IT! Sounds familiar?</p>
				<p>We all have some activities we don't want to have. What can we do with them?</p>
				<p>Just do them. Sounds pretty easy. Make them first thing you do after waking up. After
				you start working on it you will be pleased by the way it's not only not that tedious but
				also you may find it interesting or even funny.</p>
`;
			footerContent = "One pomodoro from the very morning will be enough";
			break;
		case "exercise":
			headerContent = "Do physical activities";
			bodyContent = `
				<p>Our brain is not the only important part for learning.</p>
				<p>Doing physical exercises makes blood circulation work better and it greatly influence the brain
				activity. At the same time while doing sports you have a perfect opportunity to think about the
				problem in diffuse mode.</p>
				<p>Countless researches show that sports boost learning. Do not ignore it.</p>
`;
			footerContent = "Become smarter and healthier at the same time!";
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