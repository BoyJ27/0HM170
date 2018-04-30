$(function(){

	var mastermindModel 			= new MastermindModel();

	var headerView 						= new HeaderView( mastermindModel, $( "#boxHeader" ) );
	var headerController 				= new HeaderController( mastermindModel, informedConsentView );

	var informedConsentView 			= new InformedConsentView( mastermindModel, $( "#informedConsent" ) );
	var informedConsentController 		= new InformedConsentController( mastermindModel, informedConsentView );

	var introPlayView				= new IntroPlayView( mastermindModel, $( "#introducePlay" ) );
	var introPlayController		= new IntroPlayController( mastermindModel, introPlayView );

	var introPlay2View				= new IntroPlay2View( mastermindModel, $( "#introduce2Play" ) );
	var introPlay2Controller		= new IntroPlay2Controller( mastermindModel, introPlay2View );

	var introPlay3View				= new IntroPlay3View( mastermindModel, $( "#introduce3Play" ) );
	var introPlay3Controller		= new IntroPlay3Controller( mastermindModel, introPlay3View );

	var introPlay4View				= new IntroPlay4View( mastermindModel, $( "#introduce4Play" ) );
	var introPlay4Controller		= new IntroPlay4Controller( mastermindModel, introPlay4View );

	var introPlay5View				= new IntroPlay5View( mastermindModel, $( "#introduce5Play" ) );
	var introPlay5Controller		= new IntroPlay5Controller( mastermindModel, introPlay5View );

	var introPlay6View				= new IntroPlay6View( mastermindModel, $( "#introduce6Play" ) );
	var introPlay6Controller		= new IntroPlay6Controller( mastermindModel, introPlay6View );

	var introPlay7View				= new IntroPlay7View( mastermindModel, $( "#introduce7Play" ) );
	var introPlay7Controller		= new IntroPlay7Controller( mastermindModel, introPlay7View );

	var introPlay8View				= new IntroPlay8View( mastermindModel, $( "#introduce8Play" ) );
	var introPlay8Controller		= new IntroPlay8Controller( mastermindModel, introPlay8View );

	var introPlay9View				= new IntroPlay9View( mastermindModel, $( "#introduce9Play" ) );
	var introPlay9Controller		= new IntroPlay9Controller( mastermindModel, introPlay9View );

	var introPlay10View				= new IntroPlay10View( mastermindModel, $( "#introduce10Play" ) );
	var introPlay10Controller		= new IntroPlay10Controller( mastermindModel, introPlay10View );

	var playView				= new PlayView( mastermindModel, $( "#playGame" ) );
	var playController		= new PlayController( mastermindModel, playView );

	var agqView		= new AgqView( mastermindModel, $( "#agqQuestions" ) );
	var agqController = new AgqController ( mastermindModel, agqView );

	var demographicsView				= new DemographicsView( mastermindModel, $( "#demographics" ) );
	var demographicsController 			= new DemographicsController( mastermindModel, demographicsView );

	var debriefView  = new DebriefView( mastermindModel, $("#debriefView"));
	var debriefController = new DebriefController (mastermindModel, debriefView);

	var endView  = new EndView( mastermindModel, $("#endView"));
	var endController = new EndController (mastermindModel, endView);

	var toosmallView  = new ToosmallView( mastermindModel, $("#toosmallView"));
	var toosmallController = new ToosmallController (mastermindModel, toosmallView);
})
