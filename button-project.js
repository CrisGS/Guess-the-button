let randomNumber = Math.floor((Math.random() * 3) + 1);

function checkWinOrLose(clickedButton) {
  if (randomNumber == clickedButton) {
    alert("BooYaaah! You chose the right one :) Congratulations! You are the champion!");
  } else {
    alert("Oops! You push the wrong button! Maybe the next choice will be the right one");
  }
}

function resetGame() {
  location.reload();
}