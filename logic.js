function displayTurn() {
  const turn = document.getElementById('turn');
  turn.textContent = `Player ${(step - 1) % 2 + 1}`;
}

function clickHandler(id) {
  const button = document.getElementById(id);
  if (!button.hasChildNodes()) {
    // create an image tag and have it ready to be inserted into the grid
    const imgElement = document.createElement("img");
    imgElement.classList.add("button-image");

    if (step % 2 === 1) {
      imgElement.src = "./assets/cross.png";
      imgElement.alt = "cross";
      button.appendChild(imgElement);
      step++;
      // update the corresponding board array with either 0 or 1 depending on if it is crosses or circles
      board[id] = 0;
    } else {
      imgElement.src = "./assets/circle.png";
      imgElement.alt = "circle";
      button.appendChild(imgElement);
      step++;
      // update the corresponding board array with either 0 or 1 depending on if it is crosses or circles
      board[id] = 1;
    }
  }
}

// Function to show the winning pop-up panel
function showWinner(winner) {
  // Create the modal background
  const modalBackground = document.createElement("div");
  modalBackground.style.position = "fixed";
  modalBackground.style.top = "0";
  modalBackground.style.left = "0";
  modalBackground.style.width = "100%";
  modalBackground.style.height = "100%";
  modalBackground.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
  modalBackground.style.display = "flex";
  modalBackground.style.justifyContent = "center";
  modalBackground.style.alignItems = "center";
  modalBackground.style.zIndex = "1000";

  // Create the modal panel
  const modalPanel = document.createElement("div");
  modalPanel.style.width = "50%";
  modalPanel.style.maxWidth = "400px";
  modalPanel.style.padding = "20px";
  modalPanel.style.backgroundColor = "#fff";
  modalPanel.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.1)";
  modalPanel.style.borderRadius = "10px";
  modalPanel.style.textAlign = "center";
  modalPanel.style.color = "black";
  if (winner === "X" || winner === "O") {
    modalPanel.innerHTML = `<h1>Congratulations ${winner} wins!</h1>`;
  } else {
    modalPanel.innerHTML = "<h1>It is a draw!</h1>";
  }

  // Create the close button
  const closeButton = document.createElement("button");
  closeButton.textContent = "Close";
  closeButton.style.marginTop = "20px";
  closeButton.style.padding = "10px 20px";
  closeButton.style.fontSize = "16px";
  closeButton.style.backgroundColor = "#444";
  closeButton.style.color = "#fff";
  closeButton.style.border = "none";
  closeButton.style.borderRadius = "5px";
  closeButton.style.cursor = "pointer";

  // Append the close button to the modal panel
  modalPanel.appendChild(closeButton);

  // Append the modal panel to the modal background
  modalBackground.appendChild(modalPanel);

  // Append the modal background to the body
  document.body.appendChild(modalBackground);

  // Add event listener to the close button to remove the modal from the DOM
  closeButton.addEventListener("click", function () {
    document.body.removeChild(modalBackground);
  });
}

// Function to draw a line through the winning combination
function drawWinningLine(size, ...winningCombination) {
  // Get the positions of the buttons in the winning combination
  const positions = winningCombination.map((id) => {
    return document.getElementById(id).getBoundingClientRect();
  });

  // Create an SVG element to hold the line
  const svgNS = "http://www.w3.org/2000/svg";
  const line = document.createElementNS(svgNS, "line");
  const svg = document.createElementNS(svgNS, "svg");

  // Set attributes for the SVG element
  svg.setAttribute("width", "100%");
  svg.setAttribute("height", "80%");
  svg.style.position = "absolute";
  svg.style.top = "0";
  svg.style.left = "0";
  svg.style.zIndex = "10";

  let startX = null;
  let startY = null;
  let endX = null;
  let endY = null;

  if (size === 3) {
    // Assuming a horizontal win, calculate the start and end points
    startX = positions[0].left + positions[0].width / 2 + window.scrollX;
    startY = positions[0].top + positions[0].height / 2 + window.scrollY;
    endX = positions[2].left + positions[2].width / 2 + window.scrollX;
    endY = positions[2].top + positions[2].height / 2 + window.scrollY;
  } else if (size === 4) {
    // Assuming a horizontal win, calculate the start and end points
    startX = positions[0].left + positions[0].width / 2 + window.scrollX;
    startY = positions[0].top + positions[0].height / 2 + window.scrollY;
    endX = positions[2].left + positions[2].width / 2 + window.scrollX;
    endY = positions[2].top + positions[2].height / 2 + window.scrollY;
  }

  // Set attributes for the line element
  line.setAttribute("x1", startX);
  line.setAttribute("y1", startY);
  line.setAttribute("x2", endX);
  line.setAttribute("y2", endY);
  line.setAttribute("stroke", "#FFFF00");
  line.setAttribute("stroke-width", "8");

  // Add the line to the SVG
  svg.appendChild(line);

  // Add the SVG to the body of the document
  document.body.appendChild(svg);
}

// The function checkWin checks the win condition each time a move has been made
function checkWinSmall() {
  // check all of the horizontal lines
  if (
    (board[0] === 0 && board[1] === 0 && board[2] === 0) ||
    (board[3] === 0 && board[4] === 0 && board[5] === 0) ||
    (board[6] === 0 && board[7] === 0 && board[8] === 0)
  ) {
    win = 0;
    score_one++;
    if (board[0] === 0) {
      first_id = 0;
      second_id = 1;
      third_id = 2;
    } else if (board[3] === 0) {
      first_id = 3;
      second_id = 4;
      third_id = 5;
    } else {
      first_id = 6;
      second_id = 7;
      third_id = 8;
    }
  } else if (
    (board[0] === 1 && board[1] === 1 && board[2] === 1) ||
    (board[3] === 1 && board[4] === 1 && board[5] === 1) ||
    (board[6] === 1 && board[7] === 1 && board[8] === 1)
  ) {
    win = 1;
    score_two++;
    if (board[0] === 1) {
      first_id = 0;
      second_id = 1;
      third_id = 2;
    } else if (board[3] === 1) {
      first_id = 3;
      second_id = 4;
      third_id = 5;
    } else {
      first_id = 6;
      second_id = 7;
      third_id = 8;
    }
  }
  // check all of the vertical lines
  else if (
    (board[0] === 0 && board[3] === 0 && board[6] === 0) ||
    (board[1] === 0 && board[4] === 0 && board[7] === 0) ||
    (board[2] === 0 && board[5] === 0 && board[8] === 0)
  ) {
    win = 0;
    score_one++;
    if (board[0] === 0) {
      first_id = 0;
      second_id = 3;
      third_id = 6;
    } else if (board[1] === 0) {
      first_id = 1;
      second_id = 4;
      third_id = 7;
    } else {
      first_id = 2;
      second_id = 5;
      third_id = 8;
    }
  } else if (
    (board[0] === 1 && board[3] === 1 && board[6] === 1) ||
    (board[1] === 1 && board[4] === 1 && board[7] === 1) ||
    (board[2] === 1 && board[5] === 1 && board[8] === 1)
  ) {
    win = 1;
    score_two++;
    if (board[0] === 1) {
      first_id = 0;
      second_id = 3;
      third_id = 6;
    } else if (board[1] === 1) {
      first_id = 1;
      second_id = 4;
      third_id = 7;
    } else {
      first_id = 2;
      second_id = 5;
      third_id = 8;
    }
  }
  // check all of the diagonal lines
  else if (
    (board[0] === 0 && board[4] === 0 && board[8] === 0) ||
    (board[2] === 0 && board[4] === 0 && board[6] === 0)
  ) {
    win = 0;
    score_one++;
    if (board[0] === 0) {
      first_id = 0;
      second_id = 4;
      third_id = 8;
    } else {
      first_id = 2;
      second_id = 4;
      third_id = 6;
    }
  } else if (
    (board[0] === 1 && board[4] === 1 && board[8] === 1) ||
    (board[2] === 1 && board[4] === 1 && board[6] === 1)
  ) {
    win = 1;
    score_two++;
    if (board[0] === 1) {
      first_id = 0;
      second_id = 4;
      third_id = 8;
    } else {
      first_id = 2;
      second_id = 4;
      third_id = 6;
    }
  } else if (
    board[0] !== -1 &&
    board[1] !== -1 &&
    board[2] !== -1 &&
    board[3] !== -1 &&
    board[4] !== -1 &&
    board[5] !== -1 &&
    board[6] !== -1 &&
    board[7] !== -1 &&
    board[8] !== -1
  ) {
    win = 2;
    score_draw++;
  }

  if (win !== -1) {
    // update the dashboard score
    const one = document.getElementById("score-one");
    const draw = document.getElementById("score-draw");
    const two = document.getElementById("score-two");

    one.textContent = `${score_one}`;
    draw.textContent = `${score_draw}`;
    two.textContent = `${score_two}`;

    if (win !== 2) {
      // Call the function to draw the line
      drawWinningLine(3, first_id, second_id, third_id);
    }

    if (win === 0) {
      showWinner("X");
    } else if (win === 1) {
      showWinner("O");
    } else {
      showWinner("Draw");
    }
    win = -1;
  }
}

// The function checkWin checks the win condition each time a move has been made
function checkWinLarge() {
  // check all of the horizontal lines
  if (
    (board[0] === 0 && board[1] === 0 && board[2] === 0) ||
    (board[1] === 0 && board[2] === 0 && board[3] === 0) ||
    (board[4] === 0 && board[5] === 0 && board[6] === 0) ||
    (board[5] === 0 && board[6] === 0 && board[7] === 0) ||
    (board[8] === 0 && board[9] === 0 && board[10] === 0) ||
    (board[9] === 0 && board[10] === 0 && board[11] === 0) ||
    (board[12] === 0 && board[13] === 0 && board[14] === 0) ||
    (board[13] === 0 && board[14] === 0 && board[15] === 0)
  ) {
    win = 0;
    score_one++;
    if (board[0] === 0) {
      first_id = 0;
      second_id = 1;
      third_id = 2;
    } else if (board[3] === 0) {
      first_id = 1;
      second_id = 2;
      third_id = 3;
    } else if (board[4] === 0) {
      first_id = 4;
      second_id = 5;
      third_id = 6;
    } else if (board[7] === 0) {
      first_id = 5;
      second_id = 6;
      third_id = 7;
    } else if (board[8] === 0) {
      first_id = 8;
      second_id = 9;
      third_id = 10;
    } else if (board[11] === 0) {
      first_id = 9;
      second_id = 10;
      third_id = 11;
    } else if (board[12] === 0) {
      first_id = 12;
      second_id = 13;
      third_id = 14;
    } else {
      first_id = 13;
      second_id = 14;
      third_id = 15;
    }
  } else if (
    (board[0] === 1 && board[1] === 1 && board[2] === 1) ||
    (board[1] === 1 && board[2] === 1 && board[3] === 1) ||
    (board[4] === 1 && board[5] === 1 && board[6] === 1) ||
    (board[5] === 1 && board[6] === 1 && board[7] === 1) ||
    (board[8] === 1 && board[9] === 1 && board[10] === 1) ||
    (board[9] === 1 && board[10] === 1 && board[11] === 1) ||
    (board[12] === 1 && board[13] === 1 && board[14] === 1) ||
    (board[13] === 1 && board[14] === 1 && board[15] === 1)
  ) {
    win = 1;
    score_two++;
    if (board[0] === 1) {
      first_id = 0;
      second_id = 1;
      third_id = 2;
    } else if (board[3] === 1) {
      first_id = 1;
      second_id = 2;
      third_id = 3;
    } else if (board[4] === 1) {
      first_id = 4;
      second_id = 5;
      third_id = 6;
    } else if (board[7] === 1) {
      first_id = 5;
      second_id = 6;
      third_id = 7;
    } else if (board[8] === 1) {
      first_id = 8;
      second_id = 9;
      third_id = 10;
    } else if (board[11] === 1) {
      first_id = 9;
      second_id = 10;
      third_id = 11;
    } else if (board[12] === 1) {
      first_id = 12;
      second_id = 13;
      third_id = 14;
    } else {
      first_id = 13;
      second_id = 14;
      third_id = 15;
    }
  }
  // check all of the vertical lines
  else if (
    (board[0] === 0 && board[4] === 0 && board[8] === 0) ||
    (board[4] === 0 && board[8] === 0 && board[12] === 0) ||
    (board[1] === 0 && board[5] === 0 && board[9] === 0) ||
    (board[5] === 0 && board[9] === 0 && board[13] === 0) ||
    (board[2] === 0 && board[6] === 0 && board[10] === 0) ||
    (board[6] === 0 && board[10] === 0 && board[14] === 0) ||
    (board[3] === 0 && board[7] === 0 && board[11] === 0) ||
    (board[7] === 0 && board[11] === 0 && board[15] === 0)
  ) {
    win = 0;
    score_one++;
    if (board[0] === 0) {
      first_id = 0;
      second_id = 4;
      third_id = 8;
    } else if (board[12] === 0) {
      first_id = 4;
      second_id = 8;
      third_id = 12;
    } else if (board[1] === 0) {
      first_id = 1;
      second_id = 5;
      third_id = 9;
    } else if (board[13] === 0) {
      first_id = 5;
      second_id = 9;
      third_id = 13;
    } else if (board[2] === 0) {
      first_id = 2;
      second_id = 6;
      third_id = 10;
    } else if (board[14] === 0) {
      first_id = 6;
      second_id = 10;
      third_id = 14;
    } else if (board[3] === 0) {
      first_id = 3;
      second_id = 7;
      third_id = 11;
    } else {
      first_id = 7;
      second_id = 11;
      third_id = 15;
    }
  } else if (
    (board[0] === 1 && board[4] === 1 && board[8] === 1) ||
    (board[4] === 1 && board[8] === 1 && board[12] === 1) ||
    (board[1] === 1 && board[5] === 1 && board[9] === 1) ||
    (board[5] === 1 && board[9] === 1 && board[13] === 1) ||
    (board[2] === 1 && board[6] === 1 && board[10] === 1) ||
    (board[6] === 1 && board[10] === 1 && board[14] === 1) ||
    (board[3] === 1 && board[7] === 1 && board[11] === 1) ||
    (board[7] === 1 && board[11] === 1 && board[15] === 1)
  ) {
    win = 1;
    score_two++;
    if (board[0] === 1) {
      first_id = 0;
      second_id = 4;
      third_id = 8;
    } else if (board[12] === 1) {
      first_id = 4;
      second_id = 8;
      third_id = 12;
    } else if (board[1] === 1) {
      first_id = 1;
      second_id = 5;
      third_id = 9;
    } else if (board[13] === 1) {
      first_id = 5;
      second_id = 9;
      third_id = 13;
    } else if (board[2] === 1) {
      first_id = 2;
      second_id = 6;
      third_id = 10;
    } else if (board[14] === 1) {
      first_id = 6;
      second_id = 10;
      third_id = 14;
    } else if (board[3] === 1) {
      first_id = 3;
      second_id = 7;
      third_id = 11;
    } else {
      first_id = 7;
      second_id = 11;
      third_id = 15;
    }
  }
  // check all of the diagonal lines
  else if (
    (board[0] === 0 && board[5] === 0 && board[10] === 0) ||
    (board[5] === 0 && board[10] === 0 && board[15] === 0) ||
    (board[4] === 0 && board[9] === 0 && board[14] === 0) ||
    (board[1] === 0 && board[6] === 0 && board[11] === 0) ||
    (board[3] === 0 && board[6] === 0 && board[9] === 0) ||
    (board[6] === 0 && board[9] === 0 && board[12] === 0) ||
    (board[2] === 0 && board[5] === 0 && board[8] === 0) ||
    (board[7] === 0 && board[10] === 0 && board[13] === 0)
  ) {
    win = 0;
    score_one++;
    if (board[0] === 0) {
      first_id = 0;
      second_id = 5;
      third_id = 10;
    } else if (board[15] === 0) {
      first_id = 5;
      second_id = 10;
      third_id = 15;
    } else if (board[4] === 0) {
      first_id = 4;
      second_id = 9;
      third_id = 14;
    } else if (board[1] === 0) {
      first_id = 1;
      second_id = 6;
      third_id = 11;
    } else if (board[3] === 0) {
      first_id = 3;
      second_id = 6;
      third_id = 9;
    } else if (board[6] === 0) {
      first_id = 6;
      second_id = 9;
      third_id = 12;
    } else if (board[2] === 0) {
      first_id = 2;
      second_id = 5;
      third_id = 8;
    } else {
      first_id = 7;
      second_id = 10;
      third_id = 13;
    }
  } else if (
    (board[0] === 1 && board[5] === 1 && board[10] === 1) ||
    (board[5] === 1 && board[10] === 1 && board[15] === 1) ||
    (board[4] === 1 && board[9] === 1 && board[14] === 1) ||
    (board[1] === 1 && board[6] === 1 && board[11] === 1) ||
    (board[3] === 1 && board[6] === 1 && board[9] === 1) ||
    (board[6] === 1 && board[9] === 1 && board[12] === 1) ||
    (board[2] === 1 && board[5] === 1 && board[8] === 1) ||
    (board[7] === 1 && board[10] === 1 && board[13] === 1)
  ) {
    win = 1;
    score_two++;
    if (board[0] === 1) {
      first_id = 0;
      second_id = 5;
      third_id = 10;
    } else if (board[15] === 1) {
      first_id = 5;
      second_id = 10;
      third_id = 15;
    } else if (board[4] === 1) {
      first_id = 4;
      second_id = 9;
      third_id = 14;
    } else if (board[1] === 1) {
      first_id = 1;
      second_id = 6;
      third_id = 11;
    } else if (board[3] === 1) {
      first_id = 3;
      second_id = 6;
      third_id = 9;
    } else if (board[6] === 1) {
      first_id = 6;
      second_id = 9;
      third_id = 12;
    } else if (board[2] === 1) {
      first_id = 2;
      second_id = 5;
      third_id = 8;
    } else {
      first_id = 7;
      second_id = 10;
      third_id = 13;
    }
  } else if (
    board[0] !== -1 &&
    board[1] !== -1 &&
    board[2] !== -1 &&
    board[3] !== -1 &&
    board[4] !== -1 &&
    board[5] !== -1 &&
    board[6] !== -1 &&
    board[7] !== -1 &&
    board[8] !== -1 &&
    board[9] !== -1 &&
    board[10] !== -1 &&
    board[11] !== -1 &&
    board[12] !== -1 &&
    board[13] !== -1 &&
    board[14] !== -1 &&
    board[15] !== -1
  ) {
    win = 2;
    score_draw++;
  }

  if (win !== -1) {
    // update the dashboard score
    const one = document.getElementById("score-one");
    const draw = document.getElementById("score-draw");
    const two = document.getElementById("score-two");

    one.textContent = `${score_one}`;
    draw.textContent = `${score_draw}`;
    two.textContent = `${score_two}`;

    if (win !== 2) {
      // Call the function to draw the line
      drawWinningLine(4, first_id, second_id, third_id);
    }

    if (win === 0) {
      showWinner("X");
    } else if (win === 1) {
      showWinner("O");
    } else {
      showWinner("Draw");
    }
    win = -1;
  }
}

