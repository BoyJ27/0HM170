var MastermindModel = function( options ){

  /***********************************************************
               Options
  ***********************************************************/

  // These options should be set from outside the model with
  // the random conditions assigned

  var gamecount = 1;
  var defaults = {

  };
  var options = $.extend(defaults,options);
  var o = options;
  /***********************************************************
            Variable Declarations
  ***********************************************************/

  var currentUserId, value, geslacht, consent, email, satisfactionQuestions, args,
    stepCounter = 0, leeftijd = 0, defaultAGQ1 = [], defaultAGQ2 = []

  defaultAGQ1 = [
    {
      nr: 1,
      question: "De voorgestelde besparingsmaatregelen passen bij mijn voorkeuren.",
      scale: 5
    },
    {
      nr: 2,
      question: "De voorgestelde besparingsmaatregelen zijn relevant.",
      scale: 5
    },
    {
      nr: 3,
      question: "De voorgestelde besparingsmaatregelen zijn aantrekkelijk.",
      scale: 5
    },
    {
      nr: 4,
      question: "Ik vind geen enkele van de voorgestelde besparingsmaatregelen leuk.",
      scale: 5
    },
    {
      nr: 5,
      question: "@ heeft te veel slechte besparingsmaatregelen voorgesteld.",
      scale: 5
    },
    {
      nr: 6,
      question: "@ heeft te veel slechte besparingsmaatregelen voorgesteld.",
      scale: 5
    }
  ];


  defaultAGQ2 = [
    {
      nr: 7,
      question: "De voorgestelde besparingsmaatregelen passen bij mijn voorkeuren.",
      scale: 5
    },
    {
      nr: 8,
      question: "De voorgestelde besparingsmaatregelen zijn relevant.",
      scale: 5
    },
    {
      nr: 9,
      question: "De voorgestelde besparingsmaatregelen zijn aantrekkelijk.",
      scale: 5
    },
    {
      nr: 10,
      question: "Ik vind geen enkele van de voorgestelde besparingsmaatregelen leuk.",
      scale: 5
    },
    {
      nr: 11,
      question: "@ heeft te veel slechte besparingsmaatregelen voorgesteld.",
      scale: 5
    },
    {
      nr: 12,
      question: "@ heeft te veel slechte besparingsmaatregelen voorgesteld.",
      scale: 5
    }
  ];


  /***********************************************************
            Helper Functions
  ***********************************************************/

  /* Array shuffle function
  shuffle = function( array ){
    var currentIndex = array.length,
    temporaryValue, randomIndex;

      // While there remain elements to shuffle...
      while ( 0 !== currentIndex ) {
        // Pick a remaining element...
        randomIndex = Math.floor( Math.random() * currentIndex );
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
      }
      return array;
  }
  */

  /***********************************************************
            Private Functions
  ***********************************************************/

  // Create the user, add it to the database, and assign the
  // experimental condition.

  createUser = function(){
    console.log("Creating user");

    var path = window.location.href;
    var arr = path.split('/');
    var tidstring = arr[arr.length-1];
    var tid = tidstring.replace( /^\D+/g, '');
    console.log("tid is: " + tid);


    $.post( "ajax/insertUser.php",
      {
        tid: tid
      }).done( function( data ) {
        currentUserId = data;
        window.location = "#" + currentUserId; 
        console.log(currentUserId);
      });
  }

  // After the user has filled out everything, update the user data.
  updateUser = function(mail, age){
    var email = mail;
    leeftijd = age;

    $.post( "ajax/insertDemo.php",
      {
        userId: currentUserId,
        conditie: o.condition,
        email: email,
        leeftijd: leeftijd,
        opleiding: opleiding,
        man: geslacht,
        woon: woon,
        inkomen: inkomen,
      }).done(function(){
      });
  }

  trackOpleiding = function ( value ){
    opleiding = value;
  }

  trackGeslacht = function ( value ){
    geslacht = value;
  }

  newAgqQuestions = function(){
    notifyObservers( 'playingDone');
  }

  setAgqQuestions = function(answers) {
    var q1 = answers[0];
    var q2 = answers[1];
    var q3 = answers[2];
    var q4 = answers[3];
    var q5 = answers[4];
    var q6 = answers[5];
    var q7 = answers[6];
    var q8 = answers[7];
    var q9 = answers[8];
    var q10 = answers[9];
    var q11 = answers[10];
    var q12 = answers[11];

    console.log(q1+q2+q3+q4+q5+q6+q7+q8+q9+q10+q11+q12);

    $.post("ajax/insertAgqQuestions.php",
      {
        userId: currentUserId,
        q1: q1,
        q2: q2,
        q3: q3,
        q4: q4,
        q5: q5,
        q6: q6,
        q7: q7,
        q8: q8,
        q9: q9,
        q10: q10, 
        q11: q11,
        q12: q12
      }).done(function(){
      console.log("The question + answer are saved in the DB");
    });
  }

  setDemoQuestions = function(ageval, genderval, experienceMastermindval, experienceGamesval, selfrateval, remarksval, emailval) {
    var age = ageval;
    var gender = genderval;
    var experienceM = experienceMastermindval;
    var experienceG = experienceGamesval;
    var selfrate = selfrateval;
    var remarks = remarksval;
    var email = emailval;

    $.post("ajax/insertDemo.php",
      {
        userId: currentUserId,
        age: age,
        gender: gender,
        experienceM: experienceM,
        selfrate: selfrate,
        experienceG: experienceG,
        remarks: remarks,
        email: email
      }).done(function(){
        console.log("The question + answer are saved in the DB");
      });

  }

  setIntroPlay = function () {
    $.post("ajax/insertIntro.php",
      {
        userId: currentUserId
      }).done(function(){
        console.log("Intro play saved.");
      });
  }

  setGame = function () {
    $.post("ajax/insertGame.php",
      {
        userId: currentUserId
      }).done(function(){
        console.log("Game saved.");
      });
  }

  setPlaythrough = function (playt) {
    var playthrough = playt;

    $.post("ajax/insertPlaythrough.php",
      {
        userId: currentUserId,
        playthrough: playthrough
      }).done(function(){
        console.log("Playthrough saved.");
      });
  }

  setFinalStop = function () {
    $.post("ajax/insertFinalStop.php",
    {
      userId: currentUserId
    }).done(function(){
      console.log("Final stop saved.");
    });
  }

  setConsent = function (value){
    consent = value;
  }

  demographicsCheck = function(){
    var demographCheck;
    if( opleiding == 0 || geslacht == -1){
      demographCheck = 0;
    }else{
      demographCheck = 1;
    }
    return demographCheck;
  }

  consentDone = function(){
    notifyObservers("consentDone");
  }


  introPlayDone = function(){
    notifyObservers("introPlayDone");
  }

  playingDone = function(){
    notifyObservers("playingDone");
  }

  agqQuestionsDone = function() {
      notifyObservers("agqDone");
  }
  demographicsDone = function(){
    notifyObservers( "demographicsDone" );
  }

  experimentEnd = function(){
    notifyObservers( "experimentEnd" );
  }

  screensizeOkay = function(){
    notifyObservers("screensizeOkay")
  }

  /***********************************************************
            Public Functions
  ***********************************************************/
// dit is nodig om ze vanuit een andere js te kunnen aanroepen
  this.o                    = o;

  this.createUser                 = createUser;
  this.updateUser                 = updateUser;

  this.newAgqQuestions            = newAgqQuestions;
  this.setAgqQuestions            = setAgqQuestions;
  this.setDemoQuestions           = setDemoQuestions;
  this.setIntroPlay               = setIntroPlay;
  this.setGame                    = setGame;
  this.setPlaythrough             = setPlaythrough;
  this.setFinalStop               = setFinalStop;
  this.gamecount                  = gamecount;

  this.trackGeslacht = trackGeslacht;
  this.trackOpleiding = trackOpleiding;
  this.screensizeOkay = screensizeOkay;

  this.setConsent           = setConsent;
  this.demographicsCheck    = demographicsCheck;
  this.consentDone          = consentDone;
  this.playingDone          = playingDone;
  this.agqQuestionsDone     = agqQuestionsDone;
  this.demographicsDone     = demographicsDone;
  this.introPlayDone        = introPlayDone;
  this.experimentEnd        = experimentEnd;

  /***********************************************************
            Observable Pattern
  ***********************************************************/

  var listeners = [];

  this.addObserver = function(listener){
    listeners.push(listener);
  }

  notifyObservers = function( args ){
    for ( var i = 0; i < listeners.length; i++ ){
          listeners[i].update(args);
      }
  }

  this.notifyObservers      = notifyObservers;


}
