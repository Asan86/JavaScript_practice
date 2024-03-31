let j = false;
let i = document.getElementById("menu").childNodes;

function expand() {
  if (j == false) {
    document.getElementById("add").style.transform = "rotate(45deg)"; 
    i[1].style.transform = "translateY(-160px)";
    i[3].style.transform = "translate(140px, -80px)";
    i[5].style.transform = "translate(140px, 80px)";
    i[7].style.transform = "translateY(160px)";
    i[9].style.transform = "translate(-140px, 80px)";
    i[11].style.transform = "translate(-140px, -80px)";
    j = true;
  } else {
    document.getElementById("add").style.transform = "rotate(0deg)"; 
    i[1].style.transform = "translateY(0px)";
    i[3].style.transform = "translate(0px )";
    i[5].style.transform = "translate(0px )";
    i[7].style.transform = "translateY(0px)";
    i[9].style.transform = "translate(0px)";
    i[11].style.transform = "translate(0px)";

    j = false;
  }
}
