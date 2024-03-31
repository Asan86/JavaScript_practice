let i = 0;
function toggle() {
  if (i == 0) {
    document.getElementById("arrow").style.transform = "rotate(-180deg)";
    document.getElementById("menu").style.left = "0";
    i = 1;
  } else {
    document.getElementById("arrow").style.transform = "rotate(0deg)";
    document.getElementById("menu").style.left = "-100px";
    i = 0;
  }
}
 
