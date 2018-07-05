
// These two arrays would be initialzed with a qestion reader
var questions = {};
var answers = {};

var N = 0;
// index of the current question the user is on
var curr = 0;

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

function check (num) {
    var inputAns = document.quiz.user.value;
    var answer = getAns(num);
    document.getElementById("answer").style.visibility = "visible";
    if (inputAns === answer) {
        document.getElementById("message").innerHTML = "Correct!";
        score++;
        totalQ++;
        // Make an update to the local storage
        localStorage.getItem("score") = score;
        localStorage.getItem("totalQ") = totalQuestions;
    } else {
        document.getElementById("message").innerHTML = "Incorrect!";
        totalQ++;
        localStorage.getItem("totalQ") = totalQuestions;
    }
}

function readLine (q) {
    var lines = this.result.split('\n');
    for(var line = 0; line < lines.length; line++){
        if (line%2 == 0) {
            questions[line] = lines[line];
        } else {
            answers[line] = lines[line];
        }

    }
}

function getQFromLoc () {

    var fileInput = document.getElementById("fileInput");
    var fileDisplayArea = document.getElementById("mainQ");

    fileInput.addEventListener("change", function(e) {
            var file = fileInput.files[0];
            var textType = /text.*/;

            if (file.type.match(textType)) {
                var reader = new FileReader();

                var wholeText = reader.result;

                reader.onload = function(e) {
                    //readLine(wholeText);
                    window.alert(wholeText);
                    mainQ.innterHTML = wholeText;
                    //mainQ.innerHTML = questions[0];
                }
                reader.readAsText(file);
            } else {
                fileDisplayArea.innerText = "File not supported!"
            }
    });
}
