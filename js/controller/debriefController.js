var DebriefController = function ( model, view ){

  view.doorspelen.click(function(){
        model.gamecount = model.gamecount + 1;
        model.introPlayDone();
    });

    view.stoppen.click(function(){
          model.experimentEnd();
      });
}
