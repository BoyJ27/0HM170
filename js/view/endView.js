var EndView = function (model, container){

  var p1 = $("<p>Uw deelname is succesvol afgerond. U kunt nu uw browser sluiten.</p>");
  var clearfix = $( '<div class="clearfix">' );

  container.append(p1, clearfix);


  model.addObserver( this );

	this.update = function( args ){

		if( args == "experimentEnd" ){
			container.show();
		}
	}

	container.hide();
}
