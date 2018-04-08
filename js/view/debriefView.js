var DebriefView = function (model, container){

  var p1 = $("<p>You just answered all the questions. Although we indicated you would return to the game, you can from now complete your participation. You can do so by clicking on the ‘Complete my participation’ button. However, if you still want to continue the game, you can click on ‘Play the game’. At any time, you can still click on ‘Complete my participation’ to finish up. We thank you for your time and participation. </p>")
  var p2 = $("<p>If you entered your email address, you will automatically enter the lottery for a gift card. If you are selected, you will receive an email from us within a month containing a digital version of the gift card. Thanks again for your participation. </p>")
  container.append(p1, p2);


  model.addObserver( this );

	this.update = function( args ){

		if( args == "demographicsDone" ){
			container.show();
		}
	}

	container.hide();
}
