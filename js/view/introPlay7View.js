var IntroPlay7View = function (model, container) {
  var h2 = $("<p>Tijdens het spel kun je het scorebord bekijken. Je ziet dan de topscores van spelers die je voorgingen.</p>");
  var volgendeButtonCont		= $("<center></center>");
  var volgendeButton    = $( "<a class='btn button btn-default pull-right' role='button'>Volgende &raquo;</a>" );
  var clearfix          = $( '<div class="clearfix">' );

  volgendeButtonCont.append(volgendeButton);
  this.volgendeButton       = volgendeButton;

  var instruction1Cont = $('<div></div>');
  var instruction1 = $('<center><img id="instruction7" style="max-width:600px; margin-bottom:15px;" src="img/Instruction7.jpg"/><center>');

  instruction1Cont.append(instruction1);

  container.append(h2, instruction1Cont, volgendeButtonCont, clearfix);


  model.addObserver( this );
  this.update = function(args){
    if ( args == "introPlay6Done"){
        //The container is visible, the elements within it might be hidden
        container.show();
      }

    if ( args == "introPlay7Done" ){
      container.hide();
    }
  }
  container.hide();


}
