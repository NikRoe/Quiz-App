/* define vars for buttons and answers
by default, the answers are hidden on opening the page 
and can be toggled by clicking on the show answer button*/

const answerContainer = document.querySelectorAll(
  '[data-js="answer-container"]'
);

answerContainer.forEach(answer => {
  const answerButton = answer.querySelector('[data-js="answer-button"]');
  const answerAnswer = answer.querySelector('[data-js="answer"]');
  answerButton.addEventListener("click", () => {
    answerAnswer.classList.toggle("display-toggle");
    if (answerButton.textContent === "Hide answer") {
      answerButton.textContent = "Show answer";
    } else {
      answerButton.textContent = "Hide answer";
    }
  });
});

/* define event for bookmark-icon exchange when clicked */

const bookmarkIcons = document.querySelectorAll('[data-js="bookmark-image"]');

bookmarkIcons.forEach(bookmark => {
  bookmark.addEventListener("click", () => {
    if (bookmark.classList.contains("Card__bookmark-active")) {
      bookmark.classList.remove("Card__bookmark-active");
      bookmark.classList.add("Card__bookmark-inactive");
    } else {
      bookmark.classList.add("Card__bookmark-active");
      bookmark.classList.remove("Card__bookmark-inactive");
    }
  });
});
