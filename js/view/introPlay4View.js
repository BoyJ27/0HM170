var IntroPlay4View = function (model, container) {
  var h2 = $("<p>Door op de zwarte kraaltjes aan de linkerkant te klikken, kun je ze van kleur laten veranderen. Om een code te proberen, druk je op het driehoekje naast de zojuist ingevoerde code. </p>");
  var volgendeButtonCont		= $("<center></center>");
  var volgendeButton    = $( "<a class='btn button btn-default pull-right' role='button'>Volgende &raquo;</a>" );
  var clearfix          = $( '<div class="clearfix">' );

  volgendeButtonCont.append(volgendeButton);
  this.volgendeButton       = volgendeButton;

  var instruction1Cont = $('<div></div>');
  var instruction1 = $('<center><img id="instruction4" style="max-width:600px; margin-bottom:15px;" src="img/Instruction4.jpg"/><center>');

  instruction1Cont.append(instruction1);

  container.append(h2, instruction1Cont, volgendeButtonCont, clearfix);


  model.addObserver( this );
  this.update = function(args){
    if ( args == "introPlay3Done"){
        //The container is visible, the elements within it might be hidden
        container.show();
      }

    if ( args == "introPlay4Done" ){
      container.hide();
    }
  }
  container.hide();


}
