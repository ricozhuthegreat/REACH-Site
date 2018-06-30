
function store (form) {

    document.getElementById("message").innerHTML = "";

    var username = form["username"];
    var password = form["password"];

    localStorage.setItem("username", username.value);
        // window.alert(localStorage.getItem("username"));
    localStorage.setItem("password", password.value);
        // window.alert(localStorage.getItem("password"));
    localStorage.setItem("score", 0);
    localStorage.setItem("totalQ", 0);

    document.getElementById('message').innerHTML = "Welcome, " + localStorage.getItme("username");
    window.alert("Welcome, " + localStorage.getItem(username));

    return false;
}

function login (form) {

    var inputUsername = form["username"];
    var inputPassword = form["password"];

    var username = inputUsername.value;
    var password = inputPassword.value;

    if ((username == localStorage.getItem("username")) && (password == localStorage.getItem("password"))) {
        window.alert("Welcome back, " + localStorage.getItem("username"));
    } else {
        window.alert("Invalid Log in");
    }

    return false;
}
