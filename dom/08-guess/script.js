const randomNum = Math.floor(Math.random() * 100);
const message = document.querySelector("#message");
const btn = document.querySelector("button");

let attempts = 10;

btn.onclick = function () {
  const input = document.querySelector("input");
  const value = Number(input.value);

  if (input.value == "" || value > 99) {
    alert("Enter a number");
    return;
  }

  if (attempts === 0) {
    message.innerText = "You dont have attemps ";
    endGame();
    return;
  }


  attempts--;


  if (value === randomNum) {
    message.innerText =`You guessed a right Number  in ${attempts} guesses , congrats`;
    message.style.color = "green";
    endGame();
  } else if (value > randomNum) {
    message.innerText = `your guess Number is High ,  try a lower number, you have ${attempts} guesss left`;
    message.style.color = "red";
  } else if (value < randomNum) {
    message.innerText = `your guess Number is Low ,  try a High number, you have ${attempts} guesss left`;
    message.style.color = "blue";
  } else {
    message.innerText = "Something is Wrong";
    message.style.color = "red";
  }


};

function endGame() {
  input.disabled = true;
  btn.disabled = true;
}
