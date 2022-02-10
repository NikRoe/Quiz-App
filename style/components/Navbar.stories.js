export default {
  title: "Navbar",
};

export const Navbar = () => /*html*/ `    <footer class="Navbar__wrapper">
<a class="Navbar__content" href="index.html"
  ><img
    src="assets/home-svgrepo-com.svg"
    class="Navbar__images"
    alt="navigate to home"
/></a>
<a class="Navbar__content" href="bookmarks.html"
  ><img
    src="assets/bookmark-alt-svgrepo-com.svg"
    class="Navbar__images"
    alt="navigate to bookmarks"
/></a>
<a class="Navbar__content" href="create.html"
  ><img
    src="assets/note-svgrepo-com.svg"
    class="Navbar__images"
    alt="navigate to create page"
/></a>

<a class="Navbar__content"
  ><img
    src="assets/profile-svgrepo-com.svg"
    class="Navbar__images"
    alt="navigate to profile page"
/></a>
</footer>`;

export const Active = () => /*html */ `    <footer class="Navbar__wrapper">
<a class="Navbar__content" href="index.html"
  ><img
    src="assets/home-svgrepo-com.svg"
    class="Navbar__images"
    alt="navigate to home"
/></a>
<a class="Navbar__content" href="bookmarks.html"
  ><img
    src="assets/bookmark-alt-svgrepo-com.svg"
    class="Navbar__images"
    alt="navigate to bookmarks"
/></a>
<a class="Navbar__content" href="create.html"
  ><img
    src="assets/note-svgrepo-com.svg"
    class="Navbar__images"
    alt="navigate to create page"
/></a>

<a class="Navbar__content Navbar--active"
  ><img
    src="assets/profile-svgrepo-com.svg"
    class="Navbar__images"
    alt="navigate to profile page"
/></a>
</footer>`;
