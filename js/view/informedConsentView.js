var InformedConsentView = function(model, container){

	var p = $("<p>Welkom bij deze studie over online gaming. Tijdens het experiment speel je MasterMind en beantwoord je een aantal vragen op deze site. Dit duurt ongeveer 15 minuten. Deelname heeft geen risico’s. Tijdens je deelname kun je op elk moment en om elke reden stoppen door de browser te sluiten. Als je deelneemt, kun je meedoen in een loterij voor een Bol.com cadeaukaart t.w.v. €10,-. Één van elke 10 participanten ontvangt een cadeaukaart binnen 6 weken na deelname.</p>");
	var p2 = $("<p><b>Neem alsjeblieft maar één keer deel aan dit onderzoek.</b> Door meerdere keren deel te nemen vergroot je je winkans niet en help je ons ook niet verder in ons onderzoek.</p>");
	var p3 = $("<p>In deze studie doen we onderzoek naar hoe MasterMind gespeeld wordt. Daarvoor slaan we tijdens het experiment game acties en antwoorden op de vragen op. Alle informatie wordt alleen gebruikt voor onderzoek en wordt anoniem en confidentieel bewaard.*</p>");
	var p4 = $("<p>Als je met bovenstaande instemt, klik dan op ‘Start mijn deelname’. Het duurt even voordat de knop klikbaar wordt, omdat het spel alvast klaar gezet wordt. </p>");
	var startButtonCont 	= $("<center></center>");
	var startButton	 		= $("<a id='timedbutton3' class='button btn-default btn-lg' role='button' style='margin-left:auto;font-size: 18px; padding-left:2%; padding-right:2%; display:inline-block;'>Start mijn deelname</button>");
	var p5							= $("<p></p> <p></p>");
	var p6 							= $("</br><p>* Al het onderzoek dat uitgevoerd wordt aan de Human-Technology Interaction Group volgt de Beroepscode van het NIP (Nederlands Instituut voor Psychologen). Je kunt nog binnen 24 uur na deelname verzoeken om al je data te verwijderen.</p>");
  	var p7							= $("<p>Dit onderzoek wordt uitgevoerd door Ileen Smits, Boy Janissen en Jochem Bek. Als je vragen of opmerkingen hebt over het experiment of over het onderzoek, contacteer dan Jochem Bek via j.g.bek@student.tue.nl. Dit onderzoek wordt onder toezicht van Eelco Braad en Els Kersten-van Dijk uitgevoerd. Als u klachten over het experiment heeft, contacteer dan Eelco Braad via e.braad@tue.nl. </p>")
	var clearfix				= $("<div class='clearfix'>");

	startButtonCont.append(startButton);
	container.append( p, p2, p4, p5, startButtonCont, p6, p7, clearfix);
	/***********************************************************
						Public Variables
	***********************************************************/
	this.container 		= container;
	this.startButton 	= startButton;

	/***********************************************************
							 Update
	***********************************************************/

	model.addObserver( this );
	this.update = function( args ){
		if(args == "screensizeOkay"){
			container.show();
			setTimeout(function(){ $('#timedbutton3').css('color', 'rgb(31, 29, 29)'); }, 15000);			
		}
		if ( args == "consentDone" ){
			container.hide();
		}
	}

 container.hide();
}
