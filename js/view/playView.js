var PlayView = function (model, container){
	var textCont = $("<div></div>");
	var gameCont = $("<div id='gameCont' style='width: 600px;'></div>");
	var buttonCont = $("<div></div>");
	var h1 = $("<p>Je gaat nu MasterMind spelen. Na 8 minuten wordt de 'Volgende'-knop klikbaar. Na de klik krijg je een korte tussentijdse enquete te zien, waarna je weer verder kunt gaan met spelen.</p>");
	var h2 = $("<p>Je kan je deelname afronden door op 'Beëindig Experiment' te klikken.</p>")
	var volgendeButtonCont		= $("<center></center>");
  var volgendeButton    = $( "<button class='btn button btn-default pull-right' style='color:black;' id='timedbutton2' role='button' disabled>Volgende &raquo;</button>" );
	var stoppenCont		= $("<center></center>");
	var stoppen = $( "<a class='btn button btn-default pull-right' id='stoppen' role='button'>Experiment Beëindigen</a>" )
  var clearfix = $( '<div class="clearfix">' );
	var game = $('<html lang="en-us"><head><meta charset="utf-8"><meta http-equiv="Content-Type" content="text/html; charset=utf-8"><title>Unity WebGL Player | MasteryMind</title><link rel="shortcut icon" href="TemplateData/favicon.ico"><link rel="stylesheet" href="TemplateData/style.css"><script src="TemplateData/UnityProgress.js"></script><script src="Build/UnityLoader.js"></script><script> var gameInstance = UnityLoader.instantiate("gameContainer", "Build/game.json", {onProgress: UnityProgress}); </script></head><body><div class="webgl-content"><div id="gameContainer" style="width: 600px; height: 375px"></div></div></body></html>');

 	this.volgendeButton       = volgendeButton;
 	this.stoppen      = stoppen;
	stoppenCont.append(stoppen);
	volgendeButtonCont.append(volgendeButton);
	gameCont.append(game);
	container.append(textCont, gameCont, buttonCont);
  model.addObserver( this );

	this.update = function( args ){

		if( args == "introPlay10Done"){
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
			container.hide();
		}
	}

	container.hide();
}
