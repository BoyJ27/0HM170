var IntroPlayView = function (model, container) {

  var h1 = $("<p>Spel introductie</p>");
  var volgendeButtonCont		= $("<center></center>");
  var volgendeButton    = $( "<a class='btn button btn-default pull-right' role='button'>Volgende &raquo;</a>" );
  var clearfix          = $( '<div class="clearfix">' );

  volgendeButtonCont.append(volgendeButton);

  this.volgendeButton       = volgendeButton;

  container.append(h1, volgendeButtonCont, clearfix);

  model.addObserver( this );
  this.update = function(args){
    //if( args == "userCreated"){
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
