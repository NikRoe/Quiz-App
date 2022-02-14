/* define vars for the button (showAnswer) and the answer (firstAnswer)
by default, the firstAnswer is hidden on opening the page and can be toggled */

const showAnswer = document.querySelector('[data-js="first-button"]');
const firstAnswer = document.querySelector('[data-js="first-answer"]');

showAnswer.addEventListener("click", () => {
  firstAnswer.classList.toggle("display-toggle");
  if (showAnswer.textContent === "Hide answer") {
    showAnswer.textContent = "Show answer";
  } else {
    showAnswer.textContent = "Hide answer";
  }
});
