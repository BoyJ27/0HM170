var DebriefView = function (model, container){

  var p1 = $("<p>Je hebt alle vragen beantwoord. Hoewel we aangaven dat je nu terug naar het spel zou gaan, kun je vanaf nu beslissen om je deelname te beëindigen. Je doet dit door op de knop ‘Experiment Beëindigen’ te klikken. Echter, als je het spel nog wilt spelen, kunt je ook klikken op ‘Doorspelen’. Op elk moment tijdens het spelen kun je klikken op de knop ‘Experiment Beëindigen’ om je deelname alsnog te voltooien. </p>")
  var p2 = $("<p>Als je een emailadres hebt ingevuld, doe je automatisch mee aan de loterij voor een cadeaukaart van Bol.com t.w.v. €10,-. Als je geselecteerd wordt, ontvang je binnen zes weken van ons een email met bijgevoegd een digitale versie van de cadeaukaart. Bedankt voor je deelname!</p>");

  var buttons = $("<center></center>");
  var doorspelen = $( "<a class='btn button btn-default pull-right' id='doorspelen' role='button'>Doorspelen</a>" );
  var stoppen = $( "<a class='btn button btn-default pull-right' id='stoppen' role='button'>Experiment Beëindigen</a>" );
  var clearfix = $( '<div class="clearfix">' );

  buttons.append(doorspelen, stoppen);
  container.append(p1, p2, buttons, clearfix);


  model.addObserver( this );
  this.doorspelen = doorspelen;
  this.stoppen = stoppen;
	this.update = function( args ){

		if( args == "demographicsDone" ){
			container.show();
		}
    if( args == 'introPlayDone' || args == 'experimentEnd' ){
			container.hide();
		}
	}

	container.hide();
}
