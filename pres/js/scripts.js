function trackQuality(feedback){

  //the higher the value over time,
  //the more the page should be tweaked since it's not understandable
  var feedbackValue;
  switch(feedback) {
    case 'no':
      feedbackValue = 2;
      break;
    case 'sortof':
      feedbackValue = 1;
      break;
    default:
      feedbackValue = 0;
  }

  if (_gaq) {
    _gaq.push(['_trackEvent', "Intro to Arduino (beginners)", feedback, returnDocumentName(), feedbackValue, true]);
    var feedbackDiv = document.getElementById('page_feedback');
    feedbackDiv.innerHTML = "Thanks!";
  }else{
    console.log('_gaq is not defined');
  }
}

function returnDocumentName() {
  var fileName = document.location.href;
  var end = (fileName.indexOf("?") == -1) ? fileName.length : fileName.indexOf("?");
  return fileName.substring(fileName.lastIndexOf("/")+1, end);
}

$(document).ready(function(){

  // TABLE OF CONTENTS IS COLLAPSIBLE
  var tocHeight = $('nav .nav-inner').height();
  $('#toc').click(function(){
    var currentHeight = $('nav').height();
    if ( currentHeight >= tocHeight-1 ) {
      $(this).find("i").removeClass("icon-chevron-up").addClass("icon-chevron-down");
      $('nav').animate({height: 30}, 500);
    }else{
      $(this).find("i").removeClass("icon-chevron-down").addClass("icon-chevron-up");
      $('nav').animate({height: tocHeight}, 500);
    }
  });

  // MAKE ALL OUTGOING LINKS OPEN IN NEW TAB
  $('a[href^="http://"]').not('a[href*=gusdecool]').attr('target','_blank');
  $('a[href^="https://"]').not('a[href*=gusdecool]').attr('target','_blank');


  // MAKE ALL IMAGES CENTERED
  $('img').parent('p').addClass("centered");
});