var IntroPlayView = function (model, container) {

  var h1 = $("<p>Lees onderstaande instructies aandachtig door. Let op: Als u eenmaal aan het spel bent begonnen, kunt u niet meer terug naar deze instructies.</p>");
  var volgendeButtonCont		= $("<center></center>");
  var volgendeButton    = $( "<a class='btn button btn-default pull-right' role='button'>Volgende &raquo;</a>" );
  var clearfix          = $( '<div class="clearfix">' );

  volgendeButtonCont.append(volgendeButton);

  this.volgendeButton       = volgendeButton;

  var sliderCont = $('<div></div>')
  var slider = $('<div><div class="my-slider"><ul><li>My slide</li><li>Another slide</li><li>My last slide</li></ul></div></div>');


  container.append(h1, slider, volgendeButtonCont, clearfix);

  $('.my-slider').unslider();

  model.addObserver( this );
  this.update = function(args){
    if ( args == "consentDone"){
        //The container is visible, the elements within it might be hidden
        container.show();
      }

    if ( args == "introPlayDone" ){
      container.hide();
    }
  }
  container.hide();


}
