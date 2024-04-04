let i = 0;
function pop() {
  if (i == 0) {
    document.getElementById("item1").style.transform = "translateX(-150px)";
    document.getElementById("item2").style.transform =
      "translate(-100px, -100px)";
    document.getElementById("item3").style.transform = "translateY(-150px)";
    document.getElementById("item4").style.transform =
      "translate(100px, -100px)";
    document.getElementById("item5").style.transform = "translateX(150px)";
    i = 1;
  } else {
    document.getElementById("item1").style.transform = "translate(0)";
    document.getElementById("item2").style.transform = "translate(0)";
    document.getElementById("item3").style.transform = "translate(0)";
    document.getElementById("item4").style.transform = "translate(0)";
    document.getElementById("item5").style.transform = "translate(0)";
    i = 0;
  }
}
