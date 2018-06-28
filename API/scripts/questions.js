
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
