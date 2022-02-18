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
