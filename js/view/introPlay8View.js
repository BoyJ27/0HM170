var IntroPlay8View = function (model, container) {
  var h2 = $("<p>Je kan een potje overslaan door op ‘Spel Overslaan’ te klikken. Je krijgt daarna de mogelijkheid om een nieuw potje te starten. </p>");
  var volgendeButtonCont		= $("<center></center>");
  var volgendeButton    = $( "<a class='btn button btn-default pull-right' role='button'>Volgende &raquo;</a>" );
  var clearfix          = $( '<div class="clearfix">' );

  volgendeButtonCont.append(volgendeButton);
  this.volgendeButton       = volgendeButton;

  var instruction1Cont = $('<div></div>');
  var instruction1 = $('<center><img id="instruction8" style="max-width:600px; margin-bottom:15px;" src="img/Instruction8.jpg"/><center>');

  instruction1Cont.append(instruction1);

  container.append(h2, instruction1Cont, volgendeButtonCont, clearfix);


  model.addObserver( this );
  this.update = function(args){
    if ( args == "introPlay7Done"){
        //The container is visible, the elements within it might be hidden
        container.show();
      }

    if ( args == "introPlay8Done" ){
      container.hide();
    }
  }
  container.hide();


}
