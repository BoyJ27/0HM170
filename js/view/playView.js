var PlayView = function (model, container){
	var textCont = $("<div></div>");
	var gameCont = $("<div></div>");
	var buttonCont = $("<div></div>");
	var h1 = $("<p>U kunt nu MasterMind spelen. Na 8 minuten wordt de 'Volgende'-knop klikbaar. Na de klik krijgt u een korte tussentijdse enquete te zien, waarna u weer verder kunt gaan met spelen.</p>");
	var h2 = $("<p>U kunt uw deelname afronden door op 'Beëindig Experiment' te klikken.</p>")
	var volgendeButtonCont		= $("<center></center>");
  var volgendeButton    = $( "<button class='btn button btn-default pull-right' style='color:black;' id='timedbutton' role='button' disabled>Volgende &raquo;</button>" );
	var stoppenCont		= $("<center></center>");
	var stoppen = $( "<a class='btn button btn-default pull-right' id='stoppen' role='button'>Experiment Beëindigen</a>" )
  var clearfix          = $( '<div class="clearfix">' );

 	this.volgendeButton       = volgendeButton;
 	this.stoppen      = stoppen;
	stoppenCont.append(stoppen);
	volgendeButtonCont.append(volgendeButton);
	container.append(textCont, gameCont, buttonCont);

  model.addObserver( this );

	this.update = function( args ){

		if( args == "introPlayDone"){
      container.show();
			if (model.gamecount == 1){
			setTimeout(function(){ $('#timedbutton').prop("disabled", false);; }, 3000);
			textCont.append(h1);
			buttonCont.append(volgendeButtonCont);

		} else if (model.gamecount == 2) {
			textCont.empty();
			buttonCont.empty();
			textCont.append(h2);
			buttonCont.append(stoppenCont);
		}

	}

		if( args == "playingDone" || args == 'experimentEnd'){
			container.hide();
		}
	}

	container.hide();
}
