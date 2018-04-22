var DebriefView = function (model, container){

  var p1 = $("<p>U heeft alle vragen beantwoord. Hoewel we aan gaven dat u nu terug naar het spel zou gaan, kunt u vanaf nu beslissen om uw deelname te beëindigen. U doet dit door op de knop ‘Voltooi mijn deelname’ te klikken. Echter, als u het spel nog wilt spelen, kunt u ook klikken op ‘Speel het spel’. Op elk moment tijdens het spelen kunt u klikken op de knop ‘Voltooi mijn deelname’ om te eindigen. </p>")
  var p2 = $("<p>Als u uw emailadres heeft ingevuld, doet u automatisch mee aan de loterij voor een €10,- cadeaukaart van Bol.com. Als u geselecteerd wordt, ontvangt u een email van ons binnen een maand met bijgevoegd een digitale versie van de cadeaukaart. Bedankt voor uw deelname.</p>")
  container.append(p1, p2);


  model.addObserver( this );

	this.update = function( args ){

		if( args == "demographicsDone" ){
			container.show();
		}
	}

	container.hide();
}
