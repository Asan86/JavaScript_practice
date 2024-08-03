let i = 0;
function glow() {
  if (i === 0) {
    document.getElementById("light").style.visibility = "visible";
    i = 1;
    document.getElementById("button").style.top = "80px";
    document.getElementById("button").style.boxShadow = "0px 5px #666666";
  } else {
    document.getElementById("light").style.visibility = "hidden";
    i = 0;
    document.getElementById("button").style.top = "85px";
    document.getElementById("button").style.boxShadow = "none";
  }
}
