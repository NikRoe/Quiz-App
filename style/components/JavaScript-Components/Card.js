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
    if (
      bookmark.src === "http://127.0.0.1:3000/assets/bookmark-svgrepo-com.svg"
    ) {
      bookmark.src = "assets/bookmark-alt-svgrepo-com.svg";
    } else if (
      bookmark.src ===
      "https://quiz-app-bice.vercel.app/assets/bookmark-svgrepo-com.svg"
    ) {
      bookmark.src =
        "https://quiz-app-bice.vercel.app/assets/bookmark-alt-svgrepo-com.svg";
    } else if (
      bookmark.src ===
      "https://quiz-app-bice.vercel.app/assets/bookmark-alt-svgrepo-com.svg"
    ) {
      bookmark.src =
        "https://quiz-app-bice.vercel.app/assets/bookmark-svgrepo-com.svg";
    } else {
      bookmark.src = "assets/bookmark-svgrepo-com.svg";
    }
  });
});
