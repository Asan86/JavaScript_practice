let message1 = document.getElementById("message1");
let message2 = document.getElementById("message2");
let message3 = document.getElementById("message3");

let answer = Math.floor(Math.random() * 100) + 1;

let no_of_guesses = 0;

let guesses_nums = [];

function play() {
  let user_guesses = document.getElementById("guess").value;

  if (user_guesses < 1 || user_guesses > 100) {
    alert("Please enter a number between 1 and 100.");
  } else {
    guesses_nums.push(user_guesses);
    no_of_guesses += 1;

    if (user_guesses < answer) {
      message1.textContent = "Your guess is too low.";
      message2.textContent = "No. of Guesses: " + no_of_guesses;
      message3.textContent = "Guessed numbers are: " + guesses_nums;
    } else if (user_guesses == answer) {
      message1.textContent = "Yippie You Win!!!";
      message2.textContent = "The number was: " + answer;
      message3.textContent = "You guess it in: " + no_of_guesses + " guesses";
      document.getElementById("my_btn").disabled = true;
    }
  }
}
