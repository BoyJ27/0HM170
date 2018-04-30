var IntroPlay5Controller = function ( model, view ){

  view.volgendeButton.click(function(){
    model.setIntroPlay();
    model.introPlay5Done();
  });

}
