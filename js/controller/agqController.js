var AgqController = function(model, view) {

	view.volgendeButton.click(function(){
	 if( $( '#answertable input:checked' ).length < 12 ){
			alert( 'U bent waarschijnlijk een vraag vergeten!' );
		}	else {
			/*
			$("#setQuestions .list-group-item").each(function(place){
				var questionId = $(this).attr('id');
				var val 	   = $(this).find('input:checked').val();
				model.setAgqQuestions ( questionId, val, (place+1) );
			}).promise().done(function(){

			*/
				model.agqQuestionsDone();
			//});
		}
		//model.agqQuestionsDone();
	});
 }
