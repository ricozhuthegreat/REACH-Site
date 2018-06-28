
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
