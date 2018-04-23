var ToosmallView = function (model, container){

  var p1 = $("<p>Uw schermformaat is te klein om aan dit onderzoek mee te kunnen doen. Bezoek deze URL alstublieft via de webbrowser van uw laptop/pc.</p>");
  var clearfix = $( '<div class="clearfix">' );

  container.append(p1, clearfix);


  model.addObserver( this );

  this.update = function( args ){

    if( args == "screensizeOkay" ){
      container.hide();
    }
  }

}
