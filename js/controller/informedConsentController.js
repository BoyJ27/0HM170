var InformedConsentController = function(model, view){

	view.startButton.click(function(){
		model.createUser();
		model.consentDone();
	});
}
