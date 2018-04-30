var EndView = function (model, container){

  var p1 = $("<p>Je deelname is succesvol afgerond. Je kunt nu je browser sluiten.</p>");
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
