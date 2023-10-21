/* Course: SENG 513 */
/* Date: OCT 20, 2023 */
/* Assignment 2 */
/* Name: Jizhe Li */
/* UCID: 30115255 */
let step = 1;
const size = 9;
const board = Array(size).fill(-1); // initialize all the elements of the array to be -1

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
      // update the array
      board[id] = 0;
    } else {
      imgElement.src = './circle.png';
      imgElement.alt = 'circle';
      button.appendChild(imgElement);
      step++;
      // update the array
      board[id] = 1;
    }
  }
}

const button0 = document.getElementById("0")
const button1 = document.getElementById("1")
const button2 = document.getElementById("2")
const button3 = document.getElementById("3")
const button4 = document.getElementById("4")
const button5 = document.getElementById("5")
const button6 = document.getElementById("6")
const button7 = document.getElementById("7")
const button8 = document.getElementById("8")

button0.addEventListener("click", () => clickHandler(button0.id))
button1.addEventListener("click", () => clickHandler(button1.id))
button2.addEventListener("click", () => clickHandler(button2.id))
button3.addEventListener("click", () => clickHandler(button3.id))
button4.addEventListener("click", () => clickHandler(button4.id))
button5.addEventListener("click", () => clickHandler(button5.id))
button6.addEventListener("click", () => clickHandler(button6.id))
button7.addEventListener("click", () => clickHandler(button7.id))
button8.addEventListener("click", () => clickHandler(button8.id))