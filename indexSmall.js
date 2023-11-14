/* Course: SENG 513 */
/* Date: NOV 13, 2023 */
/* Assignment 3 */
/* Name: Jizhe Li */
/* UCID: 30115255 */

let step = 1;
let win = -1;
let score_one = 0;
let score_two = 0;
let score_draw = 0;
let first_id = -1;
let second_id = -1;
let third_id = -1;

const button0 = document.getElementById("0");
const button1 = document.getElementById("1");
const button2 = document.getElementById("2");
const button3 = document.getElementById("3");
const button4 = document.getElementById("4");
const button5 = document.getElementById("5");
const button6 = document.getElementById("6");
const button7 = document.getElementById("7");
const button8 = document.getElementById("8");

// render either 'O' or 'X' onto the board
button0.addEventListener("click", () => clickHandler(button0.id));
button1.addEventListener("click", () => clickHandler(button1.id));
button2.addEventListener("click", () => clickHandler(button2.id));
button3.addEventListener("click", () => clickHandler(button3.id));
button4.addEventListener("click", () => clickHandler(button4.id));
button5.addEventListener("click", () => clickHandler(button5.id));
button6.addEventListener("click", () => clickHandler(button6.id));
button7.addEventListener("click", () => clickHandler(button7.id));
button8.addEventListener("click", () => clickHandler(button8.id));

// check the win condition each time a move has been made (the implementation for function checkWin is in logic.js)
button0.addEventListener("click", () => checkWinSmall());
button1.addEventListener("click", () => checkWinSmall());
button2.addEventListener("click", () => checkWinSmall());
button3.addEventListener("click", () => checkWinSmall());
button4.addEventListener("click", () => checkWinSmall());
button5.addEventListener("click", () => checkWinSmall());
button6.addEventListener("click", () => checkWinSmall());
button7.addEventListener("click", () => checkWinSmall());
button8.addEventListener("click", () => checkWinSmall());

// display the turn after each move
button0.addEventListener("click", () => displayTurn());
button1.addEventListener("click", () => displayTurn());
button2.addEventListener("click", () => displayTurn());
button3.addEventListener("click", () => displayTurn());
button4.addEventListener("click", () => displayTurn());
button5.addEventListener("click", () => displayTurn());
button6.addEventListener("click", () => displayTurn());
button7.addEventListener("click", () => displayTurn());
button8.addEventListener("click", () => displayTurn());
