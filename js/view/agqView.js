var AgqView = function (model, container){

	var questionList			= $( "<div class='list-group' id='setQuestions'>" );
	var p 						= $("<p>U heeft net een tijdje MasterMind gespeeld. We vragen u nu een aantal vragen te beantwoorden.</p>");
	var h3						= $("<h3>Houd uw ervaring met het spelen van daarnet in gedachten, en geef voor elke onderstaande uitspraak aan in welke mate u het ermee eens bent.</h3>")
	var volgendeButton	 		= $( "<center><a class='btn button btn-default pull-right' id='extramargin' role='button'>Volgende &raquo;</a></center>" );
	var clearfix				= $( '<div class="clearfix">' );
	var questions;
	var Table 					= $("<table style='width: 100%'></table>");

	//var question1 				= $("<tr><th style='width: 50%'>Ik probeer het spel helemaal onder de knie te krijgen.</th><th style='width: 10%; text-align:center'><input type='radio' name='q1'></th><th style='width: 10%; text-align:center'><input type='radio' name='q1'></th><th style='width: 10%; text-align:center'><input type='radio' name='q1'></th><th style='width: 10%; text-align:center'><input type='radio' name='q1'></th><th style='width: 10%; text-align:center'><input type='radio' name='q1'></th></tr>")
	//var question2 				= $("<tr><th style='width: 50%'>Ik streef ernaar om het spel goed te doen vergeleken met anderen. </th><th style='width: 10%; text-align:center'><input type='radio' name='q2'></th><th style='width: 10%; text-align:center'><input type='radio' name='q2'></th><th style='width: 10%; text-align:center'><input type='radio' name='q2'></th><th style='width: 10%; text-align:center'><input type='radio' name='q2'></th><th style='width: 10%; text-align:center'><input type='radio' name='q2'></th></tr>")


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
			Table.append("<tr><th style='width: 50%'></th><th style='width: 10%; text-align:center'>Helemaal oneens</th><th style='width: 10%; text-align:center'>Oneens</th><th style='width: 10%; text-align:center'>Niet oneens/eens</th><th style='width: 10%; text-align:center'>Eens</th><th style='width: 10%; text-align:center'>Helemaal eens</th></tr>");
		} 
		var row = $("<tr></tr>");
		var textcell = $("<th style='width: 50%'>" + value + "</th>");

		row.append(textcell);

		for(i=0; i < 5; i++) {
			var j = i+1;
			row.append("<th style='width: 10%; text-align: center'><input type='radio' name='quest"+index+"' value='"+ j +"'></th>")	
		}

		Table.append(row);
	});
	
	//Table.append(question1, question2);

	container.append(p, h3, Table, volgendeButton, clearfix );


	

	/***********************************************************
						Private Variables
	***********************************************************/
	/*	var questions = model.getAgq1Questions();
		questionList.empty();

		var legend 					= $( "<div id='legend'><span style='float:left'>Helemaal oneens</span><span>Neutraal</span><span  style='float:right'>Helemaal eens</span>" );

		$.each( questions, function(key, value) {
			var item 			= $( "<div class='list-group-item'>" );
			item.attr( 'id', value.nr );
			var text 			= $( "<p style='margin-top:5px; float:left; width:50%' class='list-group-item-text'>" );
			if( value.nr == 5 ) {
				var q = value.question;
				item 			.append(text);
			var radioContainer  = $( "<div class='radioContainer'>" );
			for( i=0; i < value.scale; i++ ){
				var label = $( '<label class="radio-inline" style="width:15%">' );
					var radio = $( '<input type="radio">' );
						radio.attr( 'value', i+1 );
						radio.attr( 'name', value.nr );
						label.append( radio );
						//label.append( i+1 );
					radioContainer.append( label );
			}

			item.append( radioContainer );
			if( key == 0 || key == 6 || key == 10){
				legend.clone().appendTo( questionList );
				clearfix.clone().appendTo( questionList );
			}
			clearfix.clone().appendTo( item );
			questionList.append( item );

		}
	});*/


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
