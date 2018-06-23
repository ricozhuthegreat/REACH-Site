
function getQFromFile(fileName) {
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", fileName, false);
    rawFile.onreadystatechange = function () {
        if(rawFile.readyState == 4) {
            if(rawFile.status == 200 || rawFile.status == 0) {
                var allText = rawFile.responseText;
                console.log(allText);
            } else {
                console.log(rawFile.status);
            }
        }
    }
    rawFile.send(null);
}

function check () {
  var ans = document.quiz.user.value;
  document.getElementById("answer").style.visibility = "visible";
  if (ans == "answer") {
    document.getElementById("message").innerHTML = "Correct!";
  } else {
    document.getElementById("message").innerHTML = "Incorrect!";
  }
}

function test () {
      window.alert("Test Successful");
}
