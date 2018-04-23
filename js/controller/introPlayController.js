var IntroPlayController = function ( model, view ){

  view.volgendeButton.click(function(){
    model.setIntroPlay();
    model.introPlayDone();
  });

}
