var IntroPlay6View = function (model, container) {
  var h2 = $("<p>Kom je er niet uit? Dan kun je de hulp inschakelen van de computer. Als je een hint vraagt dan rekent de computer de meest logische volgende zet uit. Als je spiekt, dan krijg je willekeurig één juiste kraal te zien. Als je besluit te ‘spieken’ of een ‘hint’ te gebruiken, dan krijg je minder punten voor een goed antwoord.</p>");
  var volgendeButtonCont		= $("<center></center>");
  var volgendeButton    = $( "<a class='btn button btn-default pull-right' role='button'>Volgende &raquo;</a>" );
  var clearfix          = $( '<div class="clearfix">' );

  volgendeButtonCont.append(volgendeButton);
  this.volgendeButton       = volgendeButton;

  var instruction1Cont = $('<div></div>');
  var instruction1 = $('<center><img id="instruction6" style="max-width:600px; margin-bottom:15px;" src="img/Instruction6.jpg"/><center>');

  instruction1Cont.append(instruction1);

  container.append(h2, instruction1Cont, volgendeButtonCont, clearfix);


  model.addObserver( this );
  this.update = function(args){
    if ( args == "introPlay5Done"){
        //The container is visible, the elements within it might be hidden
        container.show();
      }

    if ( args == "introPlay6Done" ){
      container.hide();
    }
  }
  container.hide();


}
