var IntroPlay4View = function (model, container) {

  var volgendeButtonCont		= $("<center></center>");
  var volgendeButton    = $( "<a class='btn button btn-default pull-right' role='button'>Volgende &raquo;</a>" );
  var clearfix          = $( '<div class="clearfix">' );

  volgendeButtonCont.append(volgendeButton);
  this.volgendeButton       = volgendeButton;

  var instruction1Cont = $('<div></div>');
  var instruction1 = $('<center><img id="instruction4" style="max-width:600px; margin-bottom:15px;" src="img/Instruction4.jpg"/><center>');

  instruction1Cont.append(instruction1);

  container.append( instruction1Cont, volgendeButtonCont, clearfix);


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
