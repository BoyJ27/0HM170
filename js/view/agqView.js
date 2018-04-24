var AgqView = function (model, container){

	var questionList			= $( "<div class='list-group' id='setQuestions'>" );
	var p 						= $("<p>U heeft net een tijdje MasterMind gespeeld. We vragen u nu een aantal vragen te beantwoorden.</p>");
	var h3						= $("<h5><b>Houd uw ervaring met het spelen van daarnet in gedachten, en geef voor elke onderstaande uitspraak aan in welke mate u het ermee eens bent.</h5></p>")
	var volgendeButtonCont		= $("<center></center>");
	var volgendeButton	 		= $( "<a class='btn button btn-default pull-right' id='extramargin' role='button'>Volgende &raquo;</a>" );
	var clearfix				= $( '<div class="clearfix">' );
	var questions;
	var TableCont				= $("<div style='margin-top: 20px; margin-bottom: 20px; background-color: white; border-style: solid; border-color: lightgrey; border-width: 1px;'></div>");
	var Table 					= $("<table id='answertable' style='width: 100%'></table>");

	var questions = [
		'Ik probeer het spel helemaal onder de knie te krijgen.',
		'Ik ben volledig bezig met het spel.',
		'Ik streef ernaar om het spel goed te doen vergeleken met anderen.',
		'Mijn doel is om zoveel mogelijk te leren in dit spel.',
		'Ik vind dat ik goed ben in het spel.',
		'Ik probeer goed te presteren relatief aan andere spelers.',
		'Ik probeer te voorkomen dat ik minder leer dan ik zou kunnen in het spel.',
		'Ik heb het gevoel dat ik van alles kan ontdekken in het spel.',		
		'Ik behaal snel het doel van het spel.',		
		'Mijn doel is om te voorkomen dat ik slecht speel vergeleken met anderen.',		
		'Ik streef ernaar om het spel zo volledig mogelijk te begrijpen.',
		'Ik vind het spel uitdagend.',		
		'Mijn doel is om beter te spelen dan anderen.',
		'Mijn doel is om te voorkomen dat ik minder leer dan mogelijk in het spel.',		
		'Ik concentreer me erg tijdens het spelen.',		
		'Ik streef ernaar om te voorkomen dat ik slechter presteer dan andere spelers.',		
		'Ik voel tijdsdruk tijdens het spelen.',
		'Ik streef ernaar om een onvolledig begrip van het spel te voorkomen.',
		'Ik doe veel moeite in het spel.',
		'Ik probeer te voorkomen dat ik het slechter doe dan andere spelers.'		
	]

	questionList.empty();

	$.each(questions, function(index, value) {
		if(index == 0 | index == 5 | index == 10 | index == 15) {
			Table.append("<tr><th style='width: 50%'></th><th style='width: 10%; text-align:center; padding-top: 10px; padding-bottom: 10px'>Helemaal oneens</th><th style='width: 10%; text-align:center; padding-top: 10px; padding-bottom: 10px'>Oneens</th><th style='width: 10%; text-align:center; padding-top: 10px; padding-bottom: 10px'>Niet oneens/eens</th><th style='width: 10%; text-align:center; padding-top: 10px; padding-bottom: 10px'>Eens</th><th style='width: 10%; text-align:center; padding-top: 10px; padding-bottom: 10px'>Helemaal eens</th></tr>");
		} 
		var row;
		if(index%2 == 0) {
			row = $("<tr class='item-row' id='" + index + "' style='background-color:#FAFAFA'></tr>");
		} else {
			row = $("<tr class='item-row' id='" + index + "'></tr>");
		}
		var textcell = $("<th style='width: 50%; padding-left: 20px; font-weight: normal'><p>" + value + "</p></th>");

		row.append(textcell);

		for(i=0; i < 5; i++) {
			var j = i+1;
			row.append("<th style='width: 10%; text-align: center'><p><input type='radio' name='quest"+index+"' value='"+ j +"'></p></th>")	
		}

		Table.append(row);
	});
	
	TableCont.append(Table);

	volgendeButtonCont.append(volgendeButton);

	container.append(p, h3, TableCont, volgendeButtonCont, clearfix );


	/***********************************************************
						Public Variables
	***********************************************************/

	this.volgendeButton 		= volgendeButton;

	/***********************************************************
							 Update
	***********************************************************/

	model.addObserver( this );

	this.update = function( args ){

		if( args == 'playingDone' ){
			container.show();
		}

		if( args == 'agqDone' ){
			container.hide();
		}
	}

	container.hide();
}
