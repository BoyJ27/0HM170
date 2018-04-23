var PlayController = function ( model, view ){

  view.volgendeButton.click(function(){
    model.playingDone();
    model.setGame();
  });
  view.stoppen.click(function(){
    model.experimentEnd();
  });
}
