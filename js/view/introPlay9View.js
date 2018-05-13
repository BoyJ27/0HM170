var IntroPlay9View = function (model, container) {
  var h2 = $("<p>Nadat het spel is afgelopen (je hebt gewonnen, al je beurten gebruikt of het spel overgeslagen), kun je de moeilijkheidsgraad van het volgende potje kiezen. Er zijn in totaal 8 verschillende levels die oplopen in moeilijkheidsgraad.</p>");
  var volgendeButtonCont		= $("<center></center>");
  var volgendeButton    = $( "<a class='btn button btn-default pull-right' role='button'>Volgende &raquo;</a>" );
  var clearfix          = $( '<div class="clearfix">' );

  volgendeButtonCont.append(volgendeButton);
  this.volgendeButton       = volgendeButton;

  var instruction1Cont = $('<div></div>');
  var instruction1 = $('<center><img id="instruction9" style="max-width:600px; margin-bottom:15px;" src="img/Instruction9.jpg"/><center>');

  instruction1Cont.append(instruction1);

  container.append(h2,  instruction1Cont, volgendeButtonCont, clearfix);


  model.addObserver( this );
  this.update = function(args){
    if ( args == "introPlay8Done"){
        //The container is visible, the elements within it might be hidden
        container.show();
      }

    if ( args == "introPlay9Done" ){
      container.hide();
    }
  }
  container.hide();


}
