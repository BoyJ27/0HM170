var AgqController = function(model, view) {

	view.volgendeButton.click(function(){
	 if( $( '#answertable input:checked' ).length < 20 ){
			alert( 'Je bent waarschijnlijk een vraag vergeten!' );
		} else {
			var answers = [];
							
			$("#answertable .item-row").each(function(item){
				var questionId = $(this).attr('id');
				var val 	   = $(this).find('input:checked').val();
				console.log("For question " + questionId + ", the value is: " + val);
				answers[questionId] = val;
			}).promise().done(function(){
				console.log(answers);
				model.setAgqQuestions (answers);
				console.log("Done");				
			});

			model.agqQuestionsDone();
		}
	});
 }
