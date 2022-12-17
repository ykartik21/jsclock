function displayTime() {
  var time = new Date();
  var hour = time.getHours();
  //   var hour = 13;
  var minutes = time.getMinutes();
  var seconds = time.getSeconds();
  const getSession = document.getElementById("session");
  const getHour = document.getElementById("hours");
  const getMinutes = document.getElementById("minutes");
  const getSeconds = document.getElementById("seconds");

  //Setting AM and PM
  if (hour >= 12 && hour <= 24) {
    getSession.innerHTML = "PM";
  }

  //
  let nHour;
  if (hour > 12 && hour <= 24) {
    nHour = hour - 12;
    // hour = `${hour - 12}`;
    if (nHour < 10) {
      nHour = `0${nHour}`;
    }
  }

  getHour.innerHTML = nHour;
  getMinutes.innerHTML = minutes;
  getSeconds.innerHTML = seconds;
}

setInterval(displayTime, 10);
