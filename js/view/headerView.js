var HeaderView = function ( model, container ){

	/***********************************************************
					  Variable Declarations
	***********************************************************/
	//var h2 						= $( "<h2>Welkom!</h2>" );
	var h2						= $( "<h2>Welkom!</h2>");
	var p 						= $( "<p></p>" );
	var vrienden 				= [];
	var counter = 1;
	var recom = 1;
	var currentadvisor = model.o.currentadvisor;

	container.append( h2);

	/***********************************************************
						Private Variables
	***********************************************************/

	/***********************************************************
						Public Variables
	***********************************************************/

	/***********************************************************
							 Update
	***********************************************************/

	model.addObserver( this );
	this.update = function( args ){

		if( args == "consentDone" ){
			h2.html( "Introductie Mastermind");
		}

		if( args == "introPlay10Done" ){
			h2.html( "Mastermind Spelen");
		}

		if( args == "playingDone" ){
			h2.html( "Reflectie");
		}

		if( args == "agqDone" ){
			h2.html( "Demografische vragen");
		}

		if( args == "demographicsDone"){
				h2.html( "Doorspelen?");
			}


		if( args == "experimentEnd"){
			h2.html( "Hartelijk Dank!");
		}

/*
		if( args == "closeness2Ready"){
			h2.html( "Beoordeling vriend 3/8 - " + vrienden[2].name);
		}

		if( args == "closeness3Ready"){
			h2.html( "Beoordeling vriend 4/8 - " + vrienden[3].name);
		}

		if( args == "closeness4Ready"){
			h2.html( "Beoordeling kennis 5/8 - " + vrienden[4].name);
		}

		if( args == "closeness5Ready"){
			h2.html( "Beoordeling kennis 6/8 - " + vrienden[5].name);
		}

		if( args == "closeness6Ready"){
			h2.html( "Beoordeling kennis 7/8 - " + vrienden[6].name);
		}

		if( args == "closeness7Ready"){
			h2.html( "Beoordeling kennis 8/8 - " + vrienden[7].name);
		}

		if( args == "closenessQuestionsDone"){
			h2.html( "Afsluitende vragen" );
			p.html( "Vul hieronder alstublieft de afsluitende vragen in en klik daarna op 'verzenden'." );
		}
*/
	}

}
