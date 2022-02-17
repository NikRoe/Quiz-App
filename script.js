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
  } else if (
    bookmarkImage.src ===
    "https://quiz-app-bice.vercel.app/assets/bookmark-svgrepo-com.svg"
  ) {
    bookmarkImage.src =
      "https://quiz-app-bice.vercel.app/assets/bookmark-alt-svgrepo-com.svg";
  } else if (
    bookmarkImage.src ===
    "https://quiz-app-bice.vercel.app/assets/bookmark-alt-svgrepo-com.svg"
  ) {
    bookmarkImage.src =
      "https://quiz-app-bice.vercel.app/assets/bookmark-svgrepo-com.svg";
  } else {
    bookmarkImage.src = "assets/bookmark-svgrepo-com.svg";
  }
});

console.log(bookmarkImage.src);

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

indexNavbar?.addEventListener("click", () => {
  indexNavbar.classList.add("Navbar--active");
  bookmarksNavbar.classList.remove("Navbar--active");
  createNavbar.classList.remove("Navbar--active");
  profileNavbar.classList.remove("Navbar--active");
  indexPage.classList.remove("display-toggle");
  bookmarksPage.classList.add("display-toggle");
  createPage.classList.add("display-toggle");
  profilePage.classList.add("display-toggle");
});

bookmarksNavbar?.addEventListener("click", () => {
  bookmarksNavbar.classList.add("Navbar--active");
  indexNavbar.classList.remove("Navbar--active");
  createNavbar.classList.remove("Navbar--active");
  profileNavbar.classList.remove("Navbar--active");
  bookmarksPage.classList.remove("display-toggle");
  indexPage.classList.add("display-toggle");
  createPage.classList.add("display-toggle");
  profilePage.classList.add("display-toggle");
});

createNavbar?.addEventListener("click", () => {
  createNavbar.classList.add("Navbar--active");
  indexNavbar.classList.remove("Navbar--active");
  bookmarksNavbar.classList.remove("Navbar--active");
  profileNavbar.classList.remove("Navbar--active");
  createPage.classList.remove("display-toggle");
  bookmarksPage.classList.add("display-toggle");
  indexPage.classList.add("display-toggle");
  profilePage.classList.add("display-toggle");
});

profileNavbar?.addEventListener("click", () => {
  profileNavbar.classList.add("Navbar--active");
  indexNavbar.classList.remove("Navbar--active");
  bookmarksNavbar.classList.remove("Navbar--active");
  createNavbar.classList.remove("Navbar--active");
  profilePage.classList.remove("display-toggle");
  bookmarksPage.classList.add("display-toggle");
  indexPage.classList.add("display-toggle");
  createPage.classList.add("display-toggle");
});
