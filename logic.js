function displayTurn() {
  const turn = document.querySelector('.turn');
  turn.textContent = `Player ${(step - 1) % 2 + 1}`;
}


button0.addEventListener("click", () => displayTurn())
button1.addEventListener("click", () => displayTurn())
button2.addEventListener("click", () => displayTurn())
button3.addEventListener("click", () => displayTurn())
button4.addEventListener("click", () => displayTurn())
button5.addEventListener("click", () => displayTurn())
button6.addEventListener("click", () => displayTurn())
button7.addEventListener("click", () => displayTurn())
button8.addEventListener("click", () => displayTurn())