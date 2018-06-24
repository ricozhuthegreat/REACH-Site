
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

function loadImage () {
    var c = document.getElementById("mainCanvas");
    if (c.getContext) {
      var ctx = c.getContext("2d");
      var img = new Image(820, 45);
      img.onload = function () {
            ctx.drawImage(img, 0, 0);
      };
      img.src = 'images/SampleREACH.jpg';
      // ctx.drawImage(img, 820, 450);
    }
}

function getQFromFile(fileName) {
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
