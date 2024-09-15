let numberToGuess = Math.round(Math.random() * 100);
let trys = 0;

function guessTheNumber() {
  trys = trys + 1;
  displayTrys.innerHTML = "Trys: " + trys;

  if (numberToGuess == myNumber.value) {
    headline.innerHTML = "You have won!!!🕵️‍♂️🎉🧠";
    const jsConfetti = new JSConfetti();
    jsConfetti.addConfetti();
  }

  if (numberToGuess > myNumber.value) {
    headline.innerHTML = "To Small Buddy!";
  }

  if (numberToGuess < myNumber.value) {
    headline.innerHTML = "To Big Buddy!";
  }
}
