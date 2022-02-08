export default {
  title: "Navbar",
};

export const Navbar = () => /*html*/ `<footer class="Navbar Navbar__wrapper">
<a class="Navbar__content">Frontpage</a>
<a class="Navbar__content">Bookmarks</a>
<a class="Navbar__content">Notes</a>
<a class="Navbar__content">Profile</a>
</footer>`;

export const Highlight =
  () => /*html */ `<footer class="Navbar Navbar__wrapper">
<a class="Navbar__content Navbar--highlight">Frontpage</a>
<a class="Navbar__content">Bookmarks</a>
<a class="Navbar__content">Notes</a>
<a class="Navbar__content">Profile</a>
</footer>`;
