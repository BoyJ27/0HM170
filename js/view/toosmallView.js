var ToosmallView = function (model, container){

  var p1 = $("<p>Je schermformaat is te klein om aan dit onderzoek mee te kunnen doen. Bezoek deze URL alsjeblieft via de webbrowser van je laptop/pc.</p>");
  var clearfix = $( '<div class="clearfix">' );

  container.append(p1, clearfix);


  model.addObserver( this );

  this.update = function( args ){

    if( args == "screensizeOkay" ){
      container.hide();
    }
  }

}
