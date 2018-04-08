var InformedConsentView = function(model, container){

	var p = $("<p>Welcome to this study on online gaming. During this experiment, you will play MasterMind and answer some questions - both on this website. This will take approximately 15 minutes. Participating does not involve any risks. During your participation, you can stop at any time for any reason by closing your browser. By participating, you can enter a lottery for a €10,- Bol.com or Amazon.com gift card. One in every 10 participants will receive a gift card within 6 weeks after participation. Please only participate once. Completing the experiment more than once does not provide you with a better chance of winning a gift card. It also does not help us in our research.</p>")
	var p2 = $("<p>With this study, we aim to investigate how MasterMind is played. For this purpose, we store game actions and answers to our questions. All information is solely used for research purposes and is kept anonymous and confidential.*</p>")
	var p4 = $("<p>If you agree to participate, please click on ‘Start my participation’.</p>")
	var startButton	 		= $("<center><a class='button btn-default btn-lg' role='button' style='margin-left:auto;font-size: 18px; padding-left:2%; padding-right:2%; ; display:inline-block;'>Start My Participation</a></center></br>");
	var p5							= $("<p></p> <p></p>");
	var p6 							= $("<p>* All research conducted at the Human-Technology Interaction Groups adheres to the Code of Ethics of the NIP (Nederlands Instituut voor Psychologen - Dutch Institute for Psychologists). You can ask us to remove your data within 24 hours after participating.</p>");
  var p7							= $("<p>This research is conducted by Ileen Smits, Boy Janissen and Jochem Bek. In case you have questions or comments on this experiment or on our research, please contact Jochem Bek at j.g.bek@student.tue.nl. This study is supervised by Eelco Braad and Els Kersten-van Dijk. In case you have complaints about this experiment, please contact Eelco Braad at e.braad@tue.nl.</p>")
	var clearfix				= $("<div class='clearfix'>");

	container.append( p, p2, p4, p5, startButton, p6, p7, clearfix);
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
		if( args == "consentDone" ){
			console.log("Close informed consent, proceed to Intro Play");
			container.hide();
		}
		/*if( args == "manCheckDone" ){
			console.log("Close informed consent, proceed to Filter Measures");
			container.hide();
		}*/
	}

}
