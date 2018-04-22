var AgqView = function (model, container){

	var questionList			= $( "<div class='list-group' id='setQuestions'>" );
	var p 						= $("<p>U heeft net een tijdje MasterMind gespeeld. We vragen u nu een aantal vragen te beantwoorden.</p>");
	var h3						= $("<h3>Houd uw ervaring met het spelen van daarnet in gedachten, en geef voor elke onderstaande uitspraak aan in welke mate u het ermee eens bent.</h3>")
	var volgendeButton	 		= $( "<center><a class='btn button btn-default pull-right' id='extramargin' role='button'>Volgende &raquo;</a></center>" );
	var clearfix				= $( '<div class="clearfix">' );
	var questions;
	var TableCont				= $("<div style='margin-top: 30px; margin-bottom: 20px; background-color: white; border-style: solid; border-color: lightgrey; border-width: 1px;'></div>");
	var Table 					= $("<table id='answertable' style='width: 100%'></table>");

	var questions = [
		'Ik probeer het spel helemaal onder de knie te krijgen.',
		'Ik streef ernaar om het spel goed te doen vergeleken met anderen.',
		'Mijn doel is om zoveel mogelijk te leren in dit spel.',
		'Ik probeer goed te presteren relatief aan andere spelers.',
		'Ik probeer te voorkomen dat ik het slechter doe dan andere spelers.',
		'Mijn doel is om te voorkomen dat ik slecht presteer in het spel vergeleken met anderen.',
		'Ik streef ernaar om het spel zo volledig mogelijk te begrijpen.',
		'Mijn doel is om beter te spelen dan anderen.',
		'Mijn doel is om te voorkomen dat ik minder leer dan mogelijk in het spel.',
		'Ik streef ernaar om te voorkomen dat ik slechter presteer dan andere spelers.',
		'Ik streef ernaar om een onvolledig begrip van het spel te voorkomen.',
		'Ik probeer te voorkomen dat ik het slechter doe dan andere spelers.'
	]

	questionList.empty();

	$.each(questions, function(index, value) {
		if(index == 0 | index == 6) {
			Table.append("<tr><th style='width: 50%'></th><th style='width: 10%; text-align:center; padding-top: 10px; padding-bottom: 10px'>Helemaal oneens</th><th style='width: 10%; text-align:center; padding-top: 10px; padding-bottom: 10px'>Oneens</th><th style='width: 10%; text-align:center; padding-top: 10px; padding-bottom: 10px'>Niet oneens/eens</th><th style='width: 10%; text-align:center; padding-top: 10px; padding-bottom: 10px'>Eens</th><th style='width: 10%; text-align:center; padding-top: 10px; padding-bottom: 10px'>Helemaal eens</th></tr>");
		} 
		var row;
		if(index%2 == 0) {
			row = $("<tr style='background-color:#FAFAFA'></tr>");
		} else {
			row = $("<tr></tr>");
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

	container.append(p, h3, TableCont, volgendeButton, clearfix );


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
