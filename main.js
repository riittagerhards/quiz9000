const correctAnswer = false;

const myQuestion = document.querySelector(".question");
myQuestion.textContent = "Did it work?";
/*
const yesButton = document.querySelector(".yes");
yesButton.onclick = function () {
  if (correctAnswer === true) {
    alert("Oh yes!");
  } else {
    alert("This is incorrect!!!");
  }
};

const noButton = document.querySelector(".no");
noButton.onclick = function () {
  if (correctAnswer === false) {
    alert("Oh yes!");
  } else {
    alert("This is incorrect!!!");
  }
};
*/
const yesButton = document.querySelector(".yes");
yesButton.onclick = function () {
  if (correctAnswer === true) {
    showAnswerIsCorrect();
  } else {
    showAnswerIsWrong();
  }
};
const noButton = document.querySelector(".no");
noButton.onclick = function () {
  if (correctAnswer === false) {
    showAnswerIsCorrect();
  } else {
    showAnswerIsWrong();
  }
};

function showAnswerIsCorrect() {
  const newP = document.createElement("p");
  const newAnswer = document.createTextNode("Oh yes, this is correct!");
  newP.appendChild(newAnswer);
  newP.className = "correct";
  const currentP = document.getElementById("emptyP");
  document.body.insertBefore(newP, emptyP);
}

function showAnswerIsWrong() {
  const newP = document.createElement("p");
  const newAnswer = document.createTextNode("Oh no, this is so not correct!");
  newP.appendChild(newAnswer);
  newP.className = "wrong";
  const currentP = document.getElementById("emptyP");
  document.body.insertBefore(newP, emptyP);
}
