var PlayView = function (model, container){
	var script1 = $('<script src="TemplateData/UnityProgress.js" id="script1"></script>');
	var script2 = $('<script src="Build/UnityLoader.js" id="script2"></script>');

	var textCont = $("<div></div>");
	var buttonCont = $("<div></div>");
	var h1 = $("<p>Je gaat nu MasterMind spelen. Na 8 minuten wordt de 'Volgende'-knop klikbaar. Na de klik krijg je een korte tussentijdse enquete te zien, waarna je weer verder kunt gaan met spelen.</p>");
	var h2 = $("<p>Je kan je deelname afronden door op 'Beëindig Experiment' te klikken.</p>")
	var volgendeButtonCont		= $("<center></center>");
  	var volgendeButton    = $( "<button class='btn button btn-default pull-right' style='color:black;' id='timedbutton2' role='button' disabled>Volgende &raquo;</button>" );
	var stoppenCont		= $("<center></center>");
	var stoppen = $( "<a class='btn button btn-default pull-right' id='stoppen' role='button'>Experiment Beëindigen</a>" )
	var clearfix = $( '<div class="clearfix">' );

 	this.volgendeButton       = volgendeButton;
 	this.stoppen      = stoppen;
	stoppenCont.append(stoppen);
	volgendeButtonCont.append(volgendeButton);
	

	model.addObserver( this );


	this.update = function( args ){

		if( args == "introPlay10Done"){
			$('head').append(script1, script2);
			var game = $('<div id="gameContainer" style="width: 960px; height: 600px; margin: auto!important"></div> <div class="footer"> <div class="webgl-logo"></div> <div class="fullscreen" onclick="gameInstance.SetFullscreen(1)"></div> </div>');
			container.append(textCont, game, buttonCont);

			var gameInstance = UnityLoader.instantiate("gameContainer", "Build/Documents.json", {onProgress: UnityProgress});			

      		container.show();
			if (model.gamecount == 1){
			setTimeout(function(){ $('#timedbutton2').prop("disabled", false);; }, 3000);
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
			container.remove($('#gameContainer'));
			$('head').remove($('#script1'), $('#script2'));
			container.hide();
		}
	}

	container.hide();
}
