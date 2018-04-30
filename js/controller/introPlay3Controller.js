var IntroPlay3Controller = function ( model, view ){

  view.volgendeButton.click(function(){
    model.setIntroPlay();
    model.introPlay3Done();
  });

}
