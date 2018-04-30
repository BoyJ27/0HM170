var IntroPlay2Controller = function ( model, view ){

  view.volgendeButton.click(function(){
    model.setIntroPlay();
    model.introPlay2Done();
  });

}
