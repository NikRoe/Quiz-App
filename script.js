/* define vars for buttons and the answers
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

/* define vars and event for getting a counter of how many symbols
 have been put into the textarea of the form */

const textFields = document.querySelectorAll('[data-js="textfield-fieldset"]');

console.log(textFields);

textFields.forEach(inputField => {
  const textfieldCounter = inputField.querySelector(
    '[data-js="input-counter"]'
  );
  const textfieldInput = inputField.querySelector('[data-js="input-area"]');
  console.log(textfieldCounter, "counter");
  console.log(textfieldInput, "input");
  inputField.addEventListener("input", () => {
    if (textfieldInput.value.length <= 140) {
      textfieldCounter.textContent =
        140 - textfieldInput.value.length + " symbols left";
    } else {
      textfieldCounter.textContent = "No more symbols left!!! :(";
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

/* create variables for each mayor section and corresponding navbar part.
add events for each navbar part to en-/disable mayor section's visibility */

const indexPage = document.querySelector('[data-js="index-Page"]');
const bookmarksPage = document.querySelector('[data-js="bookmarks-Page"]');
const createPage = document.querySelector('[data-js="create-Page"]');
const profilePage = document.querySelector('[data-js="profile-Page"]');

const indexNavbar = document.querySelector('[data-js="index-navbar"]');
const bookmarksNavbar = document.querySelector('[data-js="bookmarks-navbar"]');
const createNavbar = document.querySelector('[data-js="create-navbar"]');
const profileNavbar = document.querySelector('[data-js="profile-navbar"]');

indexNavbar.addEventListener("click", () => {
  indexNavbar.classList.add("Navbar--active");
  bookmarksNavbar.classList.remove("Navbar--active");
  createNavbar.classList.remove("Navbar--active");
  profileNavbar.classList.remove("Navbar--active");
  indexPage.classList.remove("display-toggle");
  bookmarksPage.classList.add("display-toggle");
  createPage.classList.add("display-toggle");
  profilePage.classList.add("display-toggle");
  window.scrollTo(0, 0);
});

bookmarksNavbar.addEventListener("click", () => {
  bookmarksNavbar.classList.add("Navbar--active");
  indexNavbar.classList.remove("Navbar--active");
  createNavbar.classList.remove("Navbar--active");
  profileNavbar.classList.remove("Navbar--active");
  bookmarksPage.classList.remove("display-toggle");
  indexPage.classList.add("display-toggle");
  createPage.classList.add("display-toggle");
  profilePage.classList.add("display-toggle");
  window.scrollTo(0, 0);
});

createNavbar.addEventListener("click", () => {
  createNavbar.classList.add("Navbar--active");
  indexNavbar.classList.remove("Navbar--active");
  bookmarksNavbar.classList.remove("Navbar--active");
  profileNavbar.classList.remove("Navbar--active");
  createPage.classList.remove("display-toggle");
  bookmarksPage.classList.add("display-toggle");
  indexPage.classList.add("display-toggle");
  profilePage.classList.add("display-toggle");
  window.scrollTo(0, 0);
});

profileNavbar.addEventListener("click", () => {
  profileNavbar.classList.add("Navbar--active");
  indexNavbar.classList.remove("Navbar--active");
  bookmarksNavbar.classList.remove("Navbar--active");
  createNavbar.classList.remove("Navbar--active");
  profilePage.classList.remove("display-toggle");
  bookmarksPage.classList.add("display-toggle");
  indexPage.classList.add("display-toggle");
  createPage.classList.add("display-toggle");
  window.scrollTo(0, 0);
});
