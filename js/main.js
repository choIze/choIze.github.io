// alert($); /*to check if jquery is loading - need to pop up a warning with jquery in it */ 


function askQuestions(){

	var firstName = prompt('What is your first Name');
	var lastName = prompt('What is your last Name');

	var fullName = firstName + ' ' + lastName;

	$('h2').text('Hello ' + fullName);

	/* var userAge = prompt('How old are you?');
	 userAge = parseInt(userAge); // changing the value from a string (text) to a value (number)

	 if (userAge >= 18) {
	 		console.log('User is an adult.');
	 } else if (userAge >= 13) {
	 	console.log('User is a teenager.');
	 } else {
	 	console.log('User is a child');

	 }

	*/


	/*If the users first name is 'General' and the last name is NOT 'Assembly', 
	then greet the general! */


	if(firstName.toLowerCase() == 'general' && lastName.toLowerCase() !=='Assembly'){ //toLowerCase is for case insensivity (not needed)
		console.log('Hi General')
	}

	var faveColor = prompt('What is your favourite color?').toLowerCase();

	if(faveColor == 'red' ||
		faveColor == 'blue' ||
		faveColor == 'yellow' ||
		faveColor == 'green'){
		$('h2').css('color', faveColor);
	} 

}



	// this is a line comment (comments by CMD+ /)

	// When the page loads funtion means -> DO THIS STUFF !  No bracket crossing e.g. ({)} FAULT | what do the bracktes mean (sources of different data) {the stuff that happen}
	$(function() {

		$('img').on('click', askQuestions); // run the function ask Questions, when you click on an image

		// Hide the sections to start with a sleak design
		$('h3').next().hide();


		// When the user clcks an h3 heading
		$('h3').on('click', function() {

		

			// show or hide the next element
			$(this).next().slideToggle(500);   /* next means it chooses the next action after h3 - with only (hide) it just hides and you cannot bring it back . Toogle command automatically brings hide and show as if funtion | slideToggle makes it nicely looking ATTENTION: capital T!! */

		});

	});


