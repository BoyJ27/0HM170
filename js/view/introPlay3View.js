var IntroPlay3View = function (model, container) {

  var h2 = $("<p>In de bovenste grijze balk zie je van links naar rechts; jouw gebruikersnaam, het level waar je op dit moment in zit en jouw huidige score. Het aantal punten dat je voor een juist antwoord krijgt, hangt af van het level (moeilijkheid) en het aantal beurten dat je nodig had om de code te kraken. Als je een code niet raadt, krijg je alsnog punten voor de kralen die wél op de juiste plek staan.</p>");
  var volgendeButtonCont		= $("<center></center>");
  var volgendeButton    = $( "<a class='btn button btn-default pull-right' role='button'>Volgende &raquo;</a>" );
  var clearfix          = $( '<div class="clearfix">' );

  volgendeButtonCont.append(volgendeButton);
  this.volgendeButton       = volgendeButton;

  var instruction1Cont = $('<div></div>');
  var instruction1 = $('<center><img id="instruction1" style="max-width:600px; margin-bottom:15px;" src="img/Instruction2.jpg"/><center>');

  instruction1Cont.append(instruction1);

  container.append(h2, instruction1Cont, volgendeButtonCont, clearfix);


  model.addObserver( this );
  this.update = function(args){
    if ( args == "introPlay2Done"){
        //The container is visible, the elements within it might be hidden
        container.show();
      }

    if ( args == "introPlay3Done" ){
      container.hide();
    }
  }
  container.hide();


}
