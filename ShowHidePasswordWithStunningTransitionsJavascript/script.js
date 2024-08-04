let state = false;

function toggle() {
  if (state) {
    document.getElementById("password").setAttribute("type", "password");
    document.getElementById("eye-wrapper").style.boxShadow = "0 0 0 0 #ffffff";
    document.getElementById("open").style.display = "none";
    document.getElementById("close").style.display = "block";
    state = false;
  } else {
    document.getElementById("password").setAttribute("type", "text");
    document.getElementById("eye-wrapper").style.boxShadow = "0 0 0 285px #fff";
    document.getElementById("open").style.display = "block";
    document.getElementById("close").style.display = "none";
    state = true;
  }
}
// let state = false;

// function toggle() {
//   const passwordField = document.getElementById("password");
//   const eyeWrapper = document.getElementById("eye-wrapper");
//   const openIcon = document.getElementById("open");

//   if (state) {
//     passwordField.setAttribute("type", "password");
//     eyeWrapper.style.boxShadow = "0 0 0 0 #ffffff";
//     openIcon.style.display = "block";
//     state = false;
//   } else {
//     passwordField.setAttribute("type", "text");
//     eyeWrapper.style.boxShadow = "0 0 0 285px #ffffff";
//     openIcon.style.display = "none";
//     state = true;
//   }
// }
