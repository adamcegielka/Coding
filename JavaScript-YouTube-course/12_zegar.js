// Zegar 1

let clock1 = document.getElementById("clock1");

setTime();
setInterval(setTime, 1000);

function setTime() {
    let time = new Date();
    clock1.innerHTML = "Time: " + time.getHours() + ":" + time.getMinutes() + ":" + time.getSeconds();
}


// Zegar 2

showdate();
setInterval(showdate, 1000);

function showdate() {
    var today = new Date();
  
    var day = today.getDate();
    var month = today.getMonth() + 1;
    var year = today.getFullYear();
  
    var hour = today.getHours();
    if (hour < 10) hour = "0" + hour;
    var minute = today.getMinutes();
    if (minute < 10) minute = "0" + minute;
    var second = today.getSeconds();
    if (second < 10) second = "0" + second;
  
    document.getElementById("clock2").innerHTML =
      "Today is: " +
      day +
      "/" +
      month +
      "/" +
      year +
      " | " +
      hour +
      ":" +
      minute +
      ":" +
      second;
}