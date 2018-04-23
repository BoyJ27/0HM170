var DemographicsView = function( model, container ){



	/***********************************************************
					  Variable Declarations
	***********************************************************/
	var introduction = $("<p>Vul alstublieft ook de volgende vragen over uzelf in. We slaan alle informatie anoniem en confidentieel op. Het kan niet terug getraceerd worden naar u. We gebruiken de informatie alleen voor onderzoeksdoeleinden.</p>")
	var form				= $( "<form role='form'>" );

  	var geslachttext     = $('<div style="font-size: 12px; font-weight:bold;  width: 100%"><p class="marginbottom">Geef alstublieft uw geslacht aan.*</p> ');
	var geslachtinput 			= $ ("<div style='font-weight:bold; font-size: 12px; margin-bottom: 15px; width: 100%'><select name='gender' id='gender' style='width:250px'><option value='0'>---------------</option><option value='1'>Vrouw</option><option value='2'>Man</option><option value='3'>Anders</option>");

	var leeftijdinput			= $( '<div style="font-weight:bold; font-size: 12px; margin-bottom: 15px; width: 100%" class="input-group"><input style="font-weight: normal; width: 250px" type="text" pattern="\d*" id="leeftijd" placeholder="Vul uw leeftijd in.*">');
	var leeftijdtext     = $('<div style="font-size: 12px; font-weight:bold;  width: 100%"><p class="marginbottom">Wat is uw huidige leeftijd?.</p> ');

	var experiencetext = $('<div style="font-size: 12px; font-weight:bold;  width: 100%"><p class="marginbottom">Heeft u al eens eerder Mastermind gespeeld (fysiek dan wel digitaal)?*</p> ');
	var experienceinput 	= $ ("<div style='font-weight:bold; font-size: 12px; margin-bottom: 15px; width: 100%'><select name='experience' id='experienceMastermind' style='width:250px'><option value='0'>---------------</option><option value='1'>Ja</option><option value='2'>Nee</option><option value='3'>Weet ik niet meer</option>");

  	var selfratetext = $('<div style="font-size: 12px; font-weight:bold;  width: 100%"><p class="marginbottom">Hoe zou u uzelf beoordelen als Mastermind speler?*</p> ');
	var selfrateinput = $ ("<div style='font-weight:bold; font-size: 12px; margin-bottom: 15px; width: 100%'><select name='selfrate' id='selfrate' style='width:250px'><option value='0'>---------------</option><option value='1'>Absolute Beginneling</option><option value='2'>Beginner</option><option value='3'>Gemiddeld</option><option value='4'>Gevorderd</option><option value='5'>Expert</option>");

	var gamefreqtext = $('<div style="font-size: 12px; font-weight:bold;  width: 100%"><p class="marginbottom">How vaak speelt u normaal gesproken digitale games? Dit slaat ook op online en video games.*</p> ');
	var gamefreqinput = $ ("<div style='font-weight:bold; font-size: 12px; margin-bottom: 15px; width: 100%'><select name='experience' id='experienceGames' style='width:250px'><option value='0'>---------------</option><option value='1'>Minder dan eens per maand</option><option value='2'>Eens per maand</option><option value='3'>Eens per 2 tot 3 weken</option><option value='4'>Eens per week</option><option valu='5'>Meerdere keren per week</option><option value='6'>Dagelijks</option>");

	var remarksinput = $( '<div style="font-weight:bold; font-size: 12px; margin-bottom: 15px; width: 100%" class="input-group"><textarea style="font-weight: normal; width:500px"  type="text" id="remarks" placeholder="Opmerkingen">');
	var remarkstext = $('<div style="font-size: 12px; font-weight:bold;  width: 100%"><p class="marginbottom">Heeft u opmerkingen over het spelen MasterMind en/of het beantwoorden van vragen tijdens dit experiment? (optioneel)</p> ');

	var emailtext = $ ('<div style="font-size: 12px; font-weight:bold; width: 100%"><p class="marginbottom"}>Laat hier alstublieft uw e-mailadres achter als u mee wilt doen aan de loting voor een van de cadeaubonnen: (optioneel)</p> ');
	var emailInput = $('<div style="font-size: 12px; font-weight:bold; margin-bottom: 12px; width: 100%" class="input-group"><input type="email" style="font-weight: normal; width: 250px" type="text" pattern="\d*" id="emailInput" placeholder="Vul uw e-mailadres in.">');

	var volgendeButtonCont		= $("<center></center>");
	var volgendeButton	 	= $( "<a class='btn button btn-default pull-right' id='extramargin' role='button'>Volgende &raquo;</a>" );
	var clearfix			= $('<div class="clearfix">' );

	var value2, value3, value4, value5;

	//form.append( emailContainer);

	volgendeButtonCont.append(volgendeButton);

	container.append(introduction, geslachttext, geslachtinput, leeftijdtext, leeftijdinput, experiencetext, experienceinput, selfratetext, selfrateinput, gamefreqtext, gamefreqinput, remarkstext, remarksinput, emailtext, emailInput, volgendeButtonCont, clearfix );



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
