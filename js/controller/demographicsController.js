var DemographicsController = function( model, view ){

	view.volgendeButton.click(function(){
		var age = $("#leeftijd").val();
		var gender = $( '#gender').val();
		var experienceMastermind =  $( '#experienceMastermind').val();
		var experienceGames =  $( '#experienceGames').val();		
		var selfrate = $( '#selfrate').val();
		var remarks = $( '#remarks').val();
		var email = $('#emailInput').val();
		
		console.log("Leeftijd : " + age);
		console.log("Gender : " + gender);
		console.log("Experience MasterMind : " + experienceMastermind);
		console.log("Experience Games : " + experienceGames);
		console.log("Self rate : " + selfrate);
		console.log("Remarks : " + remarks);
		console.log("Email : " + email);

		if( gender != 0  && experienceMastermind != 0 && experienceGames != 0 && selfrate != 0 && age.length != 0) {
			model.setDemoQuestions(age, gender, experienceMastermind, experienceGames, selfrate, remarks, email);
			model.demographicsDone();
		} else {
			alert( "You've probably missed one question!" );
		}
	});

}
