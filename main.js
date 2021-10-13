const questions = [
  {
    question: "Are you a cat?",
    answer: true,
  },
  {
    question: "Are you a fish?",
    answer: false,
  },
  {
    question: "Are you a dog?",
    answer: false,
  },
  {
    question: "Are you a camel?",
    answer: true,
  },
];

let questionIndex = 0;

let correctAnswer = questions[questionIndex].answer;

updateProgress();

const sectionQuiz = document.querySelector(".quiz");

const myQuestion = document.querySelector(".question");
myQuestion.textContent = questions[questionIndex].question;

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

function createMyElement(tagName, properties) {
  const element = document.createElement(tagName);
  element.className = properties.className;
  element.textContent = properties.textContent;
  return element;
}

function showAnswerIsCorrect() {
  const p = createMyElement("p", {
    className: "correct",
    textContent: "Yay, this is correct!",
  });
  sectionQuiz.append(p);
  setTimeout(setNewQuestion, 1500);
}

function showAnswerIsWrong() {
  const p = createMyElement("p", {
    className: "incorrect",
    textContent: "Oh no, you're wrong.",
  });
  sectionQuiz.append(p);
  disableButtons();
}

function disableButtons() {
  yesButton.disabled = true;
  noButton.disabled = true;
}

function setNewQuestion() {
  questionIndex += 1;
  sectionQuiz.removeChild(document.querySelector(".correct"));
  if (questionIndex !== questions.length) {
    myQuestion.textContent = questions[questionIndex].question;
    correctAnswer = questions[questionIndex].answer;
    updateProgress();
  } else {
    quizEnd();
  }
}
function quizEnd() {
  document
    .querySelector(".quiz")
    .removeChild(document.querySelector(".answer"));
  document
    .querySelector(".update")
    .removeChild(document.querySelector(".progress"));
  myQuestion.textContent = "";
  const endElement = document.querySelector("h1");
  endElement.textContent = "Congratulation! You won!";
}
function updateProgress() {
  const progressElement = document.querySelector(".progress");
  progressElement.textContent = `Question ${questionIndex + 1}/${
    questions.length
  }`;
}
