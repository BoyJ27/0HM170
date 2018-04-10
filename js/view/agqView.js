var AgqView = function (model, container){

	/***********************************************************
					  Variable Declarations
	***********************************************************/

	var questionList		= $( "<div class='list-group' id='setQuestions'>" );
	var h1 = $("<p>AGQ Vragen</p>");
	var volgendeButton	 		= $( "<center><a class='btn button btn-default pull-right' id='extramargin' role='button'>Volgende &raquo;</a></center>" );
	var clearfix				= $( '<div class="clearfix">' );
	var questions;

	container.append(h1, questionList, volgendeButton, clearfix );

	/***********************************************************
						Private Variables
	***********************************************************/
		var questions = model.getAgq1Questions();
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
	});


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
