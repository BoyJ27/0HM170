var PlayController = function ( model, view ){

  view.volgendeButton.click(function(){
    model.playingDone();
  });
  view.stoppen.click(function(){
    model.experimentEnd();
  });
}
