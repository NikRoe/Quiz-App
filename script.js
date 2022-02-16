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

/* define vars and event for getting a counter of how many symbols
 have been put into the textarea of the form */

// const textfieldInput = document.querySelector('[data-js="input-area"]');
// const textfieldCounter = document.querySelector('[data-js="input-counter"]');

// textfieldInput.addEventListener("input", () => {
//   textfieldCounter.textContent = textfieldInput.value.length;
// });

// console.log(textfieldInput);
// console.log(textfieldCounter);
