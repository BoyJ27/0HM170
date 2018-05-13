var PlayView = function (model, container){
	var textCont = $("<div></div>");
	var buttonCont = $("<div></div>");
	var h1 = $("<p>Je gaat nu MasterMind spelen. Na 8 minuten wordt de 'Volgende'-knop klikbaar. Na de klik krijg je een korte tussentijdse enquete te zien, waarna je weer verder kunt gaan met spelen.</p>");
	var h2 = $("<p>Je kunt je deelname afronden door op 'Experiment Beëindigen' te klikken.</p>")
	var volgendeButtonCont		= $("<center></center>");
  	var volgendeButton    = $( "<button class='btn button btn-default pull-right' style='color:black;' id='timedbutton2' role='button' disabled>Volgende &raquo;</button>" );
	var stoppenCont		= $("<center></center>");
	var stoppen = $( "<a class='btn button btn-default pull-right' id='stoppen' role='button'>Experiment Beëindigen</a>" )
	var clearfix = $( '<div class="clearfix">' );
	var game = $('<div id="gameContainer" style="width: 960px; height: 600px; margin: auto!important"></div> <div class="footer"> <div class="webgl-logo"></div> <div class="fullscreen" onclick="gameInstance.SetFullscreen(1)"></div> </div>');

 	this.volgendeButton       = volgendeButton;
 	this.stoppen      = stoppen;
	stoppenCont.append(stoppen);
	volgendeButtonCont.append(volgendeButton);
	container.append(textCont, game, buttonCont);
	

	model.addObserver( this );

	var gameInstance = UnityLoader.instantiate("gameContainer", "Build/Build.json", {onProgress: UnityProgress});
	setTimeout(function() {gameInstance.SendMessage('Main Camera', 'disableCamera');}, 3000); 
	 
	
	this.update = function( args ){
		setTimeout(function() {gameInstance.SendMessage('Main Camera', 'disableCamera');}, 100); 		

		if( args == "introPlay10Done"){
			console.log("Camera on");
			setTimeout(function() {gameInstance.SendMessage('Main Camera', 'enableCamera');}, 100); 

			container.show();
			if (model.gamecount == 1){
				setTimeout(function(){ $('#timedbutton2').prop("disabled", false); alert("Je kunt nu door naar de vragen door onder het spel op 'volgende' te klikken."); }, 3000);
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
