
window.onload = function() {

    var mainImg = document.getElementById("image1");

      mainImg.onclick = function() {
        var mySrc = mainImg.getAttribute("src");
        if(mySrc === "images/SampleREACH.jpg") {
          mainImg.setAttribute ("src","images/schoolOTHS.jpg");
        } else {
          mainImg.setAttribute ("src","images/SampleREACH.jpg");
        }
    }

}

function readFile () {
  // var xhttp = new XMLHttpRequest();
  // xhttp.onreadystatechange = function() {
  //   if (this.readyState == 4 && this.status == 200) {
  //     document.getElementById("testF").innerHTML =
  //     this.responseText;
  //   }
  // };
  // xhttp.open("GET", "test1.txt", true);
  // xhttp.send();
    var client = new XMLHttpRequest();
    client.open('GET', 'test1.txt');
    client.onreadystatechange = function() {
      document.getElementById("testF").innerHTML = client.responseText;
    }
    client.send();
}

function getQFromFile (fileName) {
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", fileName, false);
    rawFile.onreadystatechange = function () {
        if(rawFile.readyState === 4) {
            if(rawFile.status === 200 || rawFile.status == 0) {
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
  if (ans === "answer") {
    document.getElementById("message").innerHTML = "Correct!";
  } else {
    document.getElementById("message").innerHTML = "Incorrect!";
  }
}
