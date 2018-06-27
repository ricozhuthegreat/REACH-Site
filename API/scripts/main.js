
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

function check () {
  var ans = document.quiz.user.value;
  document.getElementById("answer").style.visibility = "visible";
  if (ans === "answer") {
    document.getElementById("message").innerHTML = "Correct!";
  } else {
    document.getElementById("message").innerHTML = "Incorrect!";
  }
}
