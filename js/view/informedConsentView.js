var InformedConsentView = function(model, container){

	var p = $("<p>Welkom bij deze studie over online gaming. Tijdens het experiment speelt u MasterMind en beantwoordt u een aantal vragen op deze site. Dit duurt ongeveer 15 minuten. Deelname heeft geen risico’s. Tijdens uw deelname kunt u op elk moment om elke reden stoppen door de browser te sluiten. Als u deelneemt, kunt u meedoen in een loterij voor een €10,- Bol.com cadeaukaart. Één in elke 10 participanten ontvangt een cadeaukaart binnen 6 weken na deelname.</p>");
	var p2 = $("<p><b>Neem alstublieft maar één keer deel aan dit onderzoek.</b> Door meerdere keren deel te nemen vergroot u uw winkans niet en helpt u ons ook niet verder in ons onderzoek.</p>");
	var p3 = $("<p>In deze studie doen we onderzoek naar hoe MasterMind gespeeld wordt. Daarvoor slaan we tijdens het experiment game acties en antwoorden op de vragen op. Alle informatie wordt alleen gebruikt voor onderzoek en wordt anoniem en confidentieel bewaard.*</p>");
	var p4 = $("<p>Als u met bovenstaande instemt, klik dan op ‘Start mijn deelname’.</p>");
	var startButtonCont 	= $("<center></center>");
	var startButton	 		= $("<a class='button btn-default btn-lg' role='button' style='margin-left:auto;font-size: 18px; padding-left:2%; padding-right:2%; ; display:inline-block;'>Start mijn deelname</a>");
	var p5							= $("<p></p> <p></p>");
	var p6 							= $("</br><p>* Al het onderzoek dat uitgevoerd wordt aan de Human-Technology Interaction Group volgt de Beroepscode van het NIP (Nederlands Instituut voor Psychologen). U kunt nog binnen 24 uur na deelname verzoeken om uw data te verwijderen.</p>");
  	var p7							= $("<p>Dit onderzoek wordt uitgevoerd door Ileen Smits, Boy Janissen en Jochem Bek. Als u vragen of opmerkingen heeft over het experiment of over het onderzoek, contacteer dan Jochem Bek via j.g.bek@student.tue.nl. Dit onderzoek wordt onder toezicht van Eelco Braad en Els Kersten-van Dijk uitgevoerd. Als u klachten over het experiment heeft, contacteer dan Eelco Braad via e.braad@tue.nl. </p>")
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
		}
		/*if( args == "manCheckDone" ){
			console.log("Close informed consent, proceed to Filter Measures");
			container.hide();
		}*/
	}
 container.hide();
}
