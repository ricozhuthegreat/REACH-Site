
var rawScore = 0;
var totalQuestions = 0;

function checkAcc () {
    if (localStorage.getItem("username") === null) {
        window.alert("You don't have an account registered!");
    } else {
        window.alert("Welcome back, " + localStorage.getItem("username") + "!");
        rawScore = localStorage.getItem("score");
        totalQuestions = localStorage.getItem("totalQ");
    }
}

function calcScore (rawScore) {
    return (rawScore / totalQuestions) * 100;
}
