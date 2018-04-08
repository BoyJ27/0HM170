var PlayView = function (model, container){

	var h1 = $("<p>Spel-view</p>");
  var volgendeButton    = $( "<center><a class='btn button btn-default pull-right' role='button'>Continue &raquo;</a><center>" );
  var clearfix          = $( '<div class="clearfix">' );

  this.volgendeButton       = volgendeButton;

  container.append(h1, volgendeButton, clearfix);

  model.addObserver( this );

	this.update = function( args ){

		if( args == "introPlayDone" ){
      container.show();

		}

		if( args == "playingDone"){
			container.hide();
		}
	}

	container.hide();
}
