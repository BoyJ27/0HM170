var IntroPlayView = function (model, container) {

	var h1 = $("<p>Spel introductie</p>");
  var volgendeButton    = $( "<center><a class='btn button btn-default pull-right' role='button'>Continue &raquo;</a><center>" );
  var clearfix          = $( '<div class="clearfix">' );

  this.volgendeButton       = volgendeButton;

  container.append(h1, volgendeButton, clearfix);

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
