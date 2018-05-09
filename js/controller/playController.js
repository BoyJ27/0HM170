var PlayController = function ( model, view ){

  view.volgendeButton.click(function(){
    console.log("We here");
    model.playingDone();
    model.setGame();
  });
  view.stoppen.click(function(){
    model.setFinalStop();
    model.experimentEnd();
  });
}
