function displayTurn() {
  const turn = document.querySelector('#turn');
  turn.textContent = `Player ${(step - 1) % 2 + 1}`;
}

function clickHandler(id) {
  const button = document.getElementById(id);
  if (!button.hasChildNodes()) {
    // create an image tag and have it ready to be inserted into the grid
    const imgElement = document.createElement('img');
    imgElement.classList.add('button-image');

    if (step % 2 === 1) {
      imgElement.src = './cross.png';
      imgElement.alt = 'cross';
      button.appendChild(imgElement);
      step++;
      console.log(step)
      // update the corresponding board array with either 0 or 1 depending on if it is crosses or circles
      board[id] = 0;
    } else {
      imgElement.src = './circle.png';
      imgElement.alt = 'circle';
      button.appendChild(imgElement);
      step++;
      // update the corresponding board array with either 0 or 1 depending on if it is crosses or circles
      board[id] = 1;
    }
  }
}

// The function checkWin checks the win condition each time a move has been made
function checkWinSmall() {
  // // check all of the horizontal lines
  // if ((board[0] === 0 && board[1] === 0 && board[2] === 0) || (board[3] === 0 && board[4] === 0 && board[5] === 0)
  //   || (board[6] === 0 && board[7] === 0 && board[8] === 0)) {
  //   win = 0;
  //   score_one++;
  // }
  // else if ((board[0] === 1 && board[1] === 1 && board[2] === 1) || (board[3] === 1 && board[4] === 1 && board[5] === 1)
  //   || (board[6] === 1 && board[7] === 1 && board[8] === 1)) {
  //   win = 1;
  //   score_two++;
  // }
  // // check all of the vertical lines
  // else if ((board[0] === 0 && board[3] === 0 && board[6] === 0) || (board[1] === 0 && board[4] === 0 && board[7] === 0)
  //   || (board[2] === 0 && board[5] === 0 && board[8] === 0)) {
  //   win = 0;
  //   score_one++;
  // }
  // else if ((board[0] === 1 && board[3] === 1 && board[6] === 1) || (board[1] === 1 && board[4] === 1 && board[7] === 1)
  //   || (board[2] === 1 && board[5] === 1 && board[8] === 1)) {
  //   win = 1;
  //   score_two++;
  // }
  // // check all of the diagonal lines
  // else if ((board[0] === 0 && board[4] === 0 && board[8] === 0) || (board[2] === 0 && board[4] === 0 && board[6] === 0)) {
  //   win = 0;
  //   score_one++;
  // }
  // else if ((board[0] === 1 && board[4] === 1 && board[8] === 1) || (board[2] === 1 && board[4] === 1 && board[6] === 1)) {
  //   win = 1;
  //   score_two++;
  // }
}

// The function checkWin checks the win condition each time a move has been made
function checkWinLarge() {
}

