
// These two arrays would be initialzed with a qestion reader
var qustions = {};
var answers = {};

function renderQuestions (questions) {
      window.alert("There");
    var mainQDivRef = document.getElementById("mainQ");
    var mainQDiv = document.createElement("div");

    mainQDiv.innerHTML = questions.question;
    mainQDivRef.appendChild(mainQDiv);
}

function getQuestions () {
    var req = new XMLHttpRequest();
  //  req.onload() = function () {

  //  };
    req.open("GET", "questions.json", true);
    var questions = JSON.parse(req.responseText);
    getQ(questions);
    req.send(null);
}

function getQ (questions) {
      window.alert("Hello");
    renderQuestions(questions);
}


function getAns (num) {
    var answer = answers[num];
}

function check (num) {
    var inputAns = document.quiz.user.value;
    var answer = getAns(num);
    document.getElementById("answer").style.visibility = "visible";
    if (inputAns === answer) {
      document.getElementById("message").innerHTML = "Correct!";
    } else {
      document.getElementById("message").innerHTML = "Incorrect!";
    }
}
