const correctAnswer = true;

const myQuestion = document.querySelector(".question");
myQuestion.textContent = "Did it work?";
/*
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
*/
document.body.onload = myAnswer;
function myAnswer() {
  const newP = document.createElement("p");
  const newAnswer = document.createTextNode("Oh yes, this is correct!");
  newP.appendChild(newAnswer);
  const currentP = document.getElementById("emptyP");
  document.body.insertBefore(newP, emptyP);
}
