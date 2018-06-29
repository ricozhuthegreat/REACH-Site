
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

function getAbout () {
    if (document.getElementById("about").style.display === "none") {
        document.getElementById("about").style.display = "block";
    } else {
        document.getElementById("about").style.display = "none";
    }
}
