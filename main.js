const correctAnswer = true;

const myQuestion = document.querySelector(".question");
myQuestion.textContent = "Did it work?";

const alertYes = document.querySelector(".yes");
alertYes.onclick = function () {
  if (correctAnswer === true) {
    alert("Oh yes!");
  } else {
    alert("This is incorrect!!!");
  }
};

const alertNo = document.querySelector(".no");
alertNo.onclick = function () {
  if (correctAnswer === false) {
    alert("Oh yes!");
  } else {
    alert("This is incorrect!!!");
  }
};
