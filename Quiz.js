function check() {
  var ans = document.quiz.user.value;
  document.getElementById("answer").style.visibility = "visible";
  if (ans == "Ottawa") {
    document.getElementById("message").innerHTML = "Correct!";
  } else {
    document.getElementById("message").innerHTML = "Incorrect!";
  }
}
