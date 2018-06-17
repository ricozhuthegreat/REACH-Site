<Script>
  function getQ() {
    return "Hi";
  }
  function printQ() {
    var canvas = document.getElementById('question');
    var ctx = canvas.getContext("2d");
    ctx.font = "50px Arial";
    ctx.fillStyle = "black";
    ctx.textAlign = "center";
    ctx.fillText(getQ(), canvas.width/2, canvas.height/2);
  }
</Script>
