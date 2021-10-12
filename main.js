const questionList = [
  "Are you a cat?",
  "Are you a fish?",
  "Are you a dog?",
  "Are you a camel?",
];

const answerList = [true, false, false, true];

let questionIndex = 0;

let correctAnswer = answerList[questionIndex];

const myQuestion = document.querySelector(".question");
myQuestion.textContent = questionList[0];

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
  setTimeout(setNewQuestion, 1500);
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
  questionIndex += 1;
  myQuestion.textContent = questionList[questionIndex];
  correctAnswer = answerList[questionIndex];
  document.body.removeChild(document.querySelector(".correct"));
  quizEnd();
}
function quizEnd() {
  if (questionIndex === 4) {
    document
      .querySelector(".quiz")
      .removeChild(document.querySelector(".answer"));
    const endElement = document.querySelector("h1");
    endElement.textContent = "Congratulation! You won!";
  }
}
