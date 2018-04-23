var DebriefView = function (model, container){

  var p1 = $("<p>U heeft alle vragen beantwoord. Hoewel we aan gaven dat u nu terug naar het spel zou gaan, kunt u vanaf nu beslissen om uw deelname te beëindigen. U doet dit door op de knop ‘Experiment Beëindigen’ te klikken. Echter, als u het spel nog wilt spelen, kunt u ook klikken op ‘Doorspelen’. Op elk moment tijdens het spelen kunt u klikken op de knop ‘Experiment Beëindigen’ om uw deelname te voltooien. </p>")
  var p2 = $("<p>Als u uw emailadres heeft ingevuld, doet u automatisch mee aan de loterij voor een €10,- cadeaukaart van Bol.com. Als u geselecteerd wordt, ontvangt u een email van ons binnen een maand met bijgevoegd een digitale versie van de cadeaukaart. Bedankt voor uw deelname.</p>")

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
