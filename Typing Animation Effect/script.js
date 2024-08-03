let i = 0;
let text = "How to create typing animation.";
let speed = 250;

function type() {
  document.getElementById("type").innerHTML += text.charAt(i);
  i++;
  setTimeout(type, speed);
}

type();
