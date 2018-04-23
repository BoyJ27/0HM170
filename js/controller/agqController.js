var AgqController = function(model, view) {

	view.volgendeButton.click(function(){
	 if( $( '#answertable input:checked' ).length < 12 ){
			alert( 'U bent waarschijnlijk een vraag vergeten!' );
		} else {
				
			$("#answertable .item-row").each(function(item){
				var questionId = $(this).attr('id');
				var val 	   = $(this).find('input:checked').val();
				console.log("For question " + questionId + ", the value is: " + val);
				model.setAgqQuestions ( questionId, val);
			}).promise().done(function(){
				console.log("Done");				
			});

			model.agqQuestionsDone();
		}
	});
 }
