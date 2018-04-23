var ToosmallController = function ( model, view ){

var width = $( window ).width();
if (width > 768 ){
  model.screensizeOkay();
}

}
