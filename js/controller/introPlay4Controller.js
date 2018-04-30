var IntroPlay4Controller = function ( model, view ){

  view.volgendeButton.click(function(){
    model.setIntroPlay();
    model.introPlay4Done();
  });

}
