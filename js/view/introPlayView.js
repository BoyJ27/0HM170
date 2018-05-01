var IntroPlayView = function (model, container) {

  var h1 = $("<p><b>Lees onderstaande instructies aandachtig door. Klik op telkens 'Volgende' om door te gaan. Let op: Als je eenmaal op 'Volgende' hebt geklikt, kun je niet meer terugbladeren door deze instructies.</b></p>");
  var h2 = $("<p>Bij aanvang van het spel zie je onderstaand openingsscherm. Vul een gebruikersnaam in en druk op volgende. NB: Je bent uiteraard vrij om een schuilnaam te kiezen. </p>");
  var volgendeButtonCont		= $("<center></center>");
  var volgendeButton    = $( "<a class='btn button btn-default pull-right' role='button'>Volgende &raquo;</a>" );
  var clearfix          = $( '<div class="clearfix">' );

  volgendeButtonCont.append(volgendeButton);
  this.volgendeButton       = volgendeButton;

  var instruction1Cont = $('<div></div>');
  var instruction1 = $('<center><img id="instruction1" style="max-width:600px; margin-bottom:15px;" src="img/Instruction1.jpg"/><center>');

  instruction1Cont.append(instruction1);
  container.append(h1, h2, instruction1Cont, volgendeButtonCont, clearfix);


  model.addObserver( this );
  this.update = function(args){
    if ( args == "consentDone"){
        //The container is visible, the elements within it might be hidden
        container.show();
        setTimeout(function(){ $('#timedbutton').prop("disabled", false);; }, 3000);
      }

    if ( args == "introPlayDone" ){
      container.hide();
    }
  }
  container.hide();


}
