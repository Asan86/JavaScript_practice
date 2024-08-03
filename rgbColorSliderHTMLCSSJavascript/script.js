function colors() {
  let red = document.getElementById("red").value;
  console.log(red);

  let green = document.getElementById("green").value;

  let blue = document.getElementById("blue").value;

  document.body.style.backgroundColor =
    "rgb(" + red + "," + green + "," + blue + ")";

  document.getElementById("output").innerHTML =
    "rgb(" + red + "," + green + "," + blue + ")";
}
