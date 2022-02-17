/* define vars for the button (showAnswer) and the answer (firstAnswer)
by default, the firstAnswer is hidden on opening the page and can be toggled */

const showAnswer = document.querySelector('[data-js="first-button"]');
const firstAnswer = document.querySelector('[data-js="first-answer"]');

showAnswer?.addEventListener("click", () => {
  firstAnswer.classList.toggle("display-toggle");
  if (showAnswer.textContent === "Hide answer") {
    showAnswer.textContent = "Show answer";
  } else {
    showAnswer.textContent = "Hide answer";
  }
});

/* define vars and event for getting a counter of how many symbols
 have been put into the textarea of the form */

const textfieldInput = document.querySelector('[data-js="input-area"]');
const textfieldCounter = document.querySelector('[data-js="input-counter"]');

textfieldInput?.addEventListener("input", () => {
  if (textfieldInput.value.length <= 140) {
    textfieldCounter.textContent =
      140 - textfieldInput.value.length + " symbols left";
  } else {
    textfieldCounter.textContent = "No more symbols left!!! :(";
  }
});

/* define event for bookmark-icon exchange when clicked */

const bookmarkImage = document.querySelector('[data-js="bookmark-image"]');

bookmarkImage?.addEventListener("click", () => {
  if (
    bookmarkImage.src ===
    "http://127.0.0.1:3000/assets/bookmark-svgrepo-com.svg"
  ) {
    bookmarkImage.src = "assets/bookmark-alt-svgrepo-com.svg";
  } else {
    bookmarkImage.src = "assets/bookmark-svgrepo-com.svg";
  }
});

console.log(bookmarkImage.src);
