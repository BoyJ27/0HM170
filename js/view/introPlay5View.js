var IntroPlay5View = function (model, container) {
  var h2 = $("<p>Een wit pinnetje vertelt je dat een kraal de juiste kleur heeft. Een rood pinnetje vertelt je dat een kraal de juiste kleur heeft én op de goede plek staat. In dit geval zijn alle kleuren juist, maar staat er slechts één op de juiste plek. Je weet alleen niet welke; de pinnetjes staan niet per se in dezelfde volgorde als de kraaltjes.</p>");
  var volgendeButtonCont		= $("<center></center>");
  var volgendeButton    = $( "<a class='btn button btn-default pull-right' role='button'>Volgende &raquo;</a>" );
  var clearfix          = $( '<div class="clearfix">' );

  volgendeButtonCont.append(volgendeButton);
  this.volgendeButton       = volgendeButton;

  var instruction1Cont = $('<div></div>');
  var instruction1 = $('<center><img id="instruction5" style="max-width:600px; margin-bottom:15px;" src="img/Instruction5.jpg"/><center>');

  instruction1Cont.append(instruction1);

  container.append(h2, instruction1Cont, volgendeButtonCont, clearfix);


  model.addObserver( this );
  this.update = function(args){
    if ( args == "introPlay4Done"){
        //The container is visible, the elements within it might be hidden
        container.show();
      }

    if ( args == "introPlay5Done" ){
      container.hide();
    }
  }
  container.hide();


}
