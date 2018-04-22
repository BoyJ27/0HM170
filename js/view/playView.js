var PlayView = function (model, container){

	var h1 = $("<p>Spel-view</p>");
	var volgendeButtonCont		= $("<center></center>");
  var volgendeButton    = $( "<a class='btn button btn-default pull-right' role='button'>Volgende &raquo;</a>" );
  var clearfix          = $( '<div class="clearfix">' );

  volgendeButtonCont.append(volgendeButton);

  this.volgendeButton       = volgendeButton;

  container.append(h1, volgendeButtonCont, clearfix);

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
