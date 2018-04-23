var DebriefController = function ( model, view ){

  view.doorspelen.click(function(){
        model.gamecount = model.gamecount + 1;
        model.introPlayDone();
        model.setPlaythrough("1");        
    });

    view.stoppen.click(function(){
          model.experimentEnd();
          model.setPlaythrough("0");
      });
}
