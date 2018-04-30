var IntroPlay10View = function (model, container) {

  var volgendeButtonCont		= $("<center></center>");
  var volgendeButton    = $( "<button class='btn button btn-default pull-right' style='color:black;' id='timedbutton' role='button' disabled>Volgende &raquo;</button>" );
  var clearfix          = $( '<div class="clearfix">' );
  var buttonCont = $("<div></div>");

  volgendeButtonCont.append(volgendeButton);
  this.volgendeButton       = volgendeButton;

  var instruction1Cont = $('<div></div>');
  var instruction1 = $('<center><img id="instruction10" style="max-width:600px; margin-bottom:15px;" src="img/Instruction10.jpg"/><center>');

  instruction1Cont.append(instruction1);
  container.append(instruction1Cont, buttonCont, clearfix);


  model.addObserver( this );
  this.update = function(args){
    if ( args == "introPlay9Done"){
        //The container is visible, the elements within it might be hidden
        container.show();
        setTimeout(function(){ $('#timedbutton').prop("disabled", false);; }, 3000);
        buttonCont.append(volgendeButtonCont);

      }

    if ( args == "introPlay10Done" ){
      container.hide();
    }
  }
  container.hide();


}
