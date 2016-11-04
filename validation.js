// Veethacheng Thao
var results;
function validate1(){
  var userInput = document.getElementById("problem1A").value;
  if (userInput == "8") {
    document.getElementById("greyResult").innerHTML="* " + "You are correct!";
    var points = 0;
    points++;
  }
  else if (userInput >= 0 ) {
    document.getElementById("greyResult").innerHTML="* " + "Incorrect!";
    points = 0;
  }
  else {
    document.getElementById("greyResult").innerHTML="* " + "Numbers are only acceptable.";
    points = 0;
  }
  setCookie("pointsAdd1", Number(points));
}

function validate2(){
  var userInput = document.getElementById("problem1B").value;
  if (userInput == "10") {
    document.getElementById("whiteResult").innerHTML="* " + "You are correct!";
    var points = 0;
    points++;
  }
  else if (userInput >= 0 ) {
    document.getElementById("whiteResult").innerHTML="* " + "Incorrect!";
    points = 0;
  }
  else {
    document.getElementById("whiteResult").innerHTML="* " + "Numbers are only acceptable.";
    points = 0;
  }
  setCookie("pointsAdd2", Number(points));
}

function validate3(){
  var userInput = document.getElementById("problem2A").value;
  userInput = userInput.toLowerCase();
  if (userInput == "blue") {
    document.getElementById("blueResult").innerHTML="* " + "You are correct!";
    var points = 0;
    points++;
  }
  else if (userInput >= 0 ) {
    document.getElementById("blueResult").innerHTML="* " + "Number are not acceptable.";
    points = 0;
  }
  else {
    document.getElementById("blueResult").innerHTML="* " + "Incorrect!";
    points = 0;
  }
  setCookie("pointsAdd3", Number(points));
}

function validate4(){
  var userInput = document.getElementById("problem2B").value;
  userInput = userInput.toLowerCase();
  if (userInput == "green") {
    document.getElementById("greenResult").innerHTML="* " + "You are correct!";
    var points = 0;
    points++;
  }
  else if (userInput >= 0 ) {
    document.getElementById("greenResult").innerHTML="* " + "Number are not acceptable.";
    points = 0;
  }
  else {
    document.getElementById("greenResult").innerHTML="* " + "Incorrect!";
    points = 0;
  }
  setCookie("pointsAdd4", Number(points));
}

function validate5(){
  var userInput = document.getElementById("problem3A").value;
  userInput = userInput.toLowerCase();
  if (userInput == "brown") {
    document.getElementById("brownResult").innerHTML="* " + "You are correct!";
    var points = 0;
    points++;
  }
  else if (userInput >= 0 ) {
    document.getElementById("brownResult").innerHTML="* " + "Number are not acceptable.";
    points = 0;
  }
  else {
    document.getElementById("brownResult").innerHTML="* " + "Incorrect!";
    points = 0;
  }
  setCookie("pointsAdd5", Number(points));
}

function validate6(){
  var userInput = document.getElementById("problem3B").value;
  userInput = userInput.toLowerCase();
  if (userInput == "purple") {
    document.getElementById("purpleResult").innerHTML="* " + "You are correct!";
    var points = 0;
    points++;
  }
  else if (userInput >= 0 ) {
    document.getElementById("purpleResult").innerHTML="* " + "Number are not acceptable.";
    points = 0;
  }
  else {
    document.getElementById("purpleResult").innerHTML="* " + "Incorrect!";
    points = 0;
  }
  setCookie("pointsAdd6", Number(points));
}

function result() {
  var resultsAdded;
  resultsAdded = Number(getCookie("pointsAdd1")) + Number(getCookie("pointsAdd2")) + Number(getCookie("pointsAdd3")) + Number(getCookie("pointsAdd4")) + Number(getCookie("pointsAdd5")) + Number(getCookie("pointsAdd6"));
  var resultCorrect = Number(resultsAdded) / 6;
  var resultInPercent = resultCorrect * 100;
  document.getElementById("result").innerHTML = Number(resultInPercent.toFixed(2)) + " %";
}

//courtesy of w3schools, from: http://www.w3schools.com/js/js_cookies.asp
function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

//courtesy of w3schools, from: http://www.w3schools.com/js/js_cookies.asp
function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}
