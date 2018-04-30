var DebriefController = function ( model, view ){

  view.doorspelen.click(function(){
        model.gamecount = model.gamecount + 1;
        model.introPlay10Done();
        model.setPlaythrough("1");
    });

    view.stoppen.click(function(){
          model.experimentEnd();
          model.setPlaythrough("0");
      });
}
