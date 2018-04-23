$(function(){

	var mastermindModel 			= new MastermindModel();

	var headerView 						= new HeaderView( mastermindModel, $( "#boxHeader" ) );
	var headerController 				= new HeaderController( mastermindModel, informedConsentView );

	var informedConsentView 			= new InformedConsentView( mastermindModel, $( "#informedConsent" ) );
	var informedConsentController 		= new InformedConsentController( mastermindModel, informedConsentView );

	var introPlayView				= new IntroPlayView( mastermindModel, $( "#introducePlay" ) );
	var introPlayController		= new IntroPlayController( mastermindModel, introPlayView );

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
