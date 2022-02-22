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

const allPages = document.querySelectorAll(".page");
const allNavbarElements = document.querySelectorAll(".Navbar__content");

indexNavbar.addEventListener("click", () => {
  allNavbarElements.forEach(element => {
    element.classList.remove("Navbar--active");
  });
  indexNavbar.classList.add("Navbar--active");
  allPages.forEach(page => {
    page.classList.add("display-toggle");
  });
  indexPage.classList.remove("display-toggle");
  window.scrollTo(0, 0);
});

bookmarksNavbar.addEventListener("click", () => {
  allNavbarElements.forEach(element => {
    element.classList.remove("Navbar--active");
  });
  bookmarksNavbar.classList.add("Navbar--active");
  allPages.forEach(page => {
    page.classList.add("display-toggle");
  });
  bookmarksPage.classList.remove("display-toggle");
  window.scrollTo(0, 0);
});

createNavbar.addEventListener("click", () => {
  allNavbarElements.forEach(element => {
    element.classList.remove("Navbar--active");
  });
  createNavbar.classList.add("Navbar--active");
  allPages.forEach(page => {
    page.classList.add("display-toggle");
  });
  createPage.classList.remove("display-toggle");
  window.scrollTo(0, 0);
});

profileNavbar.addEventListener("click", () => {
  allNavbarElements.forEach(element => {
    element.classList.remove("Navbar--active");
  });
  profileNavbar.classList.add("Navbar--active");
  allPages.forEach(page => {
    page.classList.add("display-toggle");
  });
  profilePage.classList.remove("display-toggle");
  window.scrollTo(0, 0);
});
