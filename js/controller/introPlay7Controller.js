var IntroPlay7Controller = function ( model, view ){

  view.volgendeButton.click(function(){
    model.setIntroPlay();
    model.introPlay7Done();
  });

}
