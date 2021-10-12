const correctAnswer = true;

const myQuestion = document.querySelector(".question");
myQuestion.textContent = "Are you a robot?";
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
  newP.textContent = "Yay, this is correct!";
  newP.className = "correct";
  document.body.append(newP);
  setTimeout(setNewQuestion, 2000);
}

function showAnswerIsWrong() {
  const newP = document.createElement("p");
  newP.textContent = "Oh no, you're wrong.";
  newP.className = "wrong";
  document.body.append(newP);
  disableButtons();
}

function disableButtons() {
  yesButton.disabled = true;
  noButton.disabled = true;
}

function setNewQuestion() {
  myQuestion.textContent = "Are you a cat?";
  document.body.removeChild(document.querySelector(".correct"));
  const correctAnswer = false;
}
