var DemographicsView = function( model, container ){



	/***********************************************************
					  Variable Declarations
	***********************************************************/
	var introduction = $("<p>Please also fill in the following questions about yourself. Note that your information will remain anonymous. We will only use it for research purposes.</p>")
	var form				= $( "<form role='form'>" );

  var geslachttext     = $('<div style="font-size: 12px; font-weight:bold;  width: 100%"><p class="marginbottom">Please indicate your gender.</p> ');
	var geslachtinput 			= $ ("<div style='font-weight:bold; font-size: 12px; margin-bottom: 15px; width: 100%'><select name='gender' id='gender' style='width:250px'><option value='0'>---------------</option><option value='1'>Female</option><option value='2'>Male</option><option value='3'>Neither</option>");

	var leeftijdinput			= $( '<div style="font-weight:bold; font-size: 12px; margin-bottom: 15px; width: 100%" class="input-group"><input style="font-weight: normal; width: 250px" type="text" pattern="\d*" id="leeftijd" placeholder="Fill in your age.">');
	var leeftijdtext     = $('<div style="font-size: 12px; font-weight:bold;  width: 100%"><p class="marginbottom">Please indicate your age.</p> ');

	var experiencetext = $('<div style="font-size: 12px; font-weight:bold;  width: 100%"><p class="marginbottom">Have you ever played Mastermind before?</p> ');
	var experienceinput 	= $ ("<div style='font-weight:bold; font-size: 12px; margin-bottom: 15px; width: 100%'><select name='experience' id='experience' style='width:250px'><option value='0'>---------------</option><option value='1'>Yes</option><option value='2'>No</option><option value='3'>I don't remember</option>");

  var selfratetext = $('<div style="font-size: 12px; font-weight:bold;  width: 100%"><p class="marginbottom">How would you rate yourself as a Mastermind Player?</p> ');
	var selfrateinput = $ ("<div style='font-weight:bold; font-size: 12px; margin-bottom: 15px; width: 100%'><select name='selfrate' id='selfrate' style='width:250px'><option value='0'>---------------</option><option value='1'>Absolute Beginner</option><option value='2'>Novice</option><option value='3'>Intermediate</option><option value='4'>Advanced</option><option value='5'>Expert</option>");

	var gamefreqtext = $('<div style="font-size: 12px; font-weight:bold;  width: 100%"><p class="marginbottom">How often do you usually play digital games? This includes video games.</p> ');
	var gamefreqinput = $ ("<div style='font-weight:bold; font-size: 12px; margin-bottom: 15px; width: 100%'><select name='experience' id='experience' style='width:250px'><option value='0'>---------------</option><option value='1'>Less than once a month</option><option value='2'>Once a month</option><option value='3'>Once every 2 to 3 weeks</option><option value='4'>Once a week</option><option valu='5'>A few times a week</option><option value='6'>Daily</option>");

	var remarksinput = $( '<div style="font-weight:bold; font-size: 12px; margin-bottom: 15px; width: 100%" class="input-group"><textarea style="font-weight: normal; width:500px"  type="text" id="remarks" placeholder="Remarks">');
	var remarkstext = $('<div style="font-size: 12px; font-weight:bold;  width: 100%"><p class="marginbottom">Do you have any remarks regarding your experiences with the game?</p> ');

	var emailtext = $ ('<div style="font-size: 12px; font-weight:bold; width: 100%"><p class="marginbottom"}>Please leave your e-mailaddress below in case you would like to participate in the raffle for one of the gift cards (optional):</p> ');
	var emailInput = $('<div style="font-size: 12px; font-weight:bold; margin-bottom: 12px; width: 100%" class="input-group"><input type="email" style="font-weight: normal; width: 250px" type="text" pattern="\d*" id="emailInput" placeholder="Fill in your e-mailaddress.">');

	var volgendeButton	 	= $( "<center><a class='btn button btn-default pull-right' id='extramargin' role='button'>Continue &raquo;</a></center>" );
	var clearfix			= $('<div class="clearfix">' );

	var value2, value3, value4, value5;

	//form.append( emailContainer);

	container.append(introduction, geslachttext, geslachtinput, leeftijdtext, leeftijdinput, experiencetext, experienceinput, selfratetext, selfrateinput, gamefreqtext, gamefreqinput, remarkstext, remarksinput, emailtext, emailInput, volgendeButton, clearfix );



	$( "#opleiding").selectmenu({

		create: function(event, ui){
			value2 = parseInt($(this).val());
			model.trackOpleiding(value2);
		},

		change: function(event, ui){
			value2 = parseInt($(this).val());
			model.trackOpleiding(value2);
		}
	});

	$( "#geslacht").selectmenu({
		create: function(event, ui){
			value3 = parseInt($(this).val());
			model.trackGeslacht(value3);
		},

		change: function(event, ui){
			value3 = parseInt($(this).val());
			model.trackGeslacht(value3);
		}
	});

	/***********************************************************
						Private Variables
	***********************************************************/

	/***********************************************************
						Public Variables
	***********************************************************/

	this.volgendeButton 		= volgendeButton;
	this.form 							= form;
	this.emailInput					= emailInput;

	/***********************************************************
							 Update
	***********************************************************/

	model.addObserver( this );

	this.update = function( args ){

		if( args == "agqDone" ){
			container.show();
		}

		if( args == "demographicsDone"){
			container.hide();
		}
	}

	container.hide();
}
