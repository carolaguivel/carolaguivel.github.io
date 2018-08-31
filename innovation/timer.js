document.getElementById('timersmall').innerHTML =
  00 + ":" + 31;
startTimer();

function startTimer() {
  var presentTime = document.getElementById('timersmall').innerHTML;
  var timeArray = presentTime.split(/[:]+/);
  var m = timeArray[0];
  var s = checkSecond((timeArray[1] - 1));
  if(s==59){m=m-1}

  if ( m < 0){
      s = "00";
      m = "0";
      // in here the page closes
      // if the minute is less than 0 than the site closes

      location.replace("end.html");
  }


  document.getElementById('timersmall').innerHTML =
    m + ":" + s;
  setTimeout(startTimer, 1000);
}

function checkSecond(sec) {
  if (sec < 10 && sec >= 0) {sec = "0" + sec};
  if (sec < 0) {sec = "59"};
  return sec;
}