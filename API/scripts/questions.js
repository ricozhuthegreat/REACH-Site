
// These two arrays would be initialzed with a qestion reader
var questions = {};
var answers = {};

var N = 0;
// index of the current question the user is on
var curr = 0;

function checkAcc() {
    if (localStorage.getItem("username") === null) {
        window.alert("You don't have an account registered!");
    } else {
        window.alert("Welcome back, " + localStorage.getItem("username") + "!");
    }
}

function renderQuestionsAns (text) {
    var mainQDivRef = document.getElementById("mainQ");
    var mainQDiv = document.createElement("div");

    var index = 0;
    text.forEach(function () {
        var currQ = text.question;
        var currA = text.answer;
        questions[index] = currQ;
        answers[index] = currA;
        index++;
    });

    mainQDiv.innerHTML = questions[curr];
    mainQDivRef.appendChild(mainQDiv);
}

function getQuestionsAns () {
    var req = new XMLHttpRequest();
  //  req.onload() = function () {

  //  };
    req.open("GET", "questions.json", true);
    var text = JSON.parse(req.responseText);
    getQA(text);
    req.send(null);
}

function getQA (text) {
    renderQuestionsAns(text);
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
