var IntroPlay10View = function (model, container) {
  var h2 = $("<p><b>BELANGRIJK: Nadat je 8 minuten hebt gespeeld, ontvang je een melding en wordt de ‘Volgende’-knop onder het spel klikbaar. Na het klikken krijg je enkele vragen over je ervaringen tijdens het spelen. Daarna keer je weer terug bij het spel en speel je nog enkele minuten verder. Je voortgang wordt opgeslagen, dus je kunt na het invullen van de vragen verder waar je gebleven was.</b></p>");
  var h3 = $("<p>Klik nu op onderstaande ‘Volgende’-knop. Na een korte laadtijd zal het spel beginnen.</p>");
  var volgendeButtonCont		= $("<center></center>");
  var volgendeButton    = $( "<button class='btn button btn-default pull-right' style='color:black;' id='timedbutton' role='button' disabled>Volgende &raquo;</button>" );
  var clearfix          = $( '<div class="clearfix">' );
  var buttonCont = $("<div></div>");

  volgendeButtonCont.append(volgendeButton);
  this.volgendeButton       = volgendeButton;
  container.append(h2, h3, buttonCont, clearfix);


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
