export default {
  title: "Card",
};

export const Default = () => /*html*/ `
<article class="Card">
  <h2 class="Card__title">Frage 1</h2>
  <img
  src="../../assets/bookmars-svgrepo-com.svg"
  alt="unchecked bookmark"
  class="Card__bookmark"
/>
  <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, 
sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. 
At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. 
Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. 
At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
  </p>
  <button type="button" class="Button__default" data-js="first-button">
  Show Answer
  </button>
  <p class="display-toggle" data-js="first-answer">
    Unheimlich gute Antwort, die keine Fragen offen lässt.
  </p>
  <div class="Card__tag__wrapper">
    <p class="Card__tags">Tag 1</p>
    <p class="Card__tags">Tag 2</p>
    <p class="Card__tags">Tag 3</p>
    <p class="Card__tags">Tag 4</p>
  </div>
</article>
`;

export const HideAnswer = () => /* html */ `
<article class="Card">
  <h2 class="Card__title">Frage 1</h2>
  <img
  src="assets/bookmark-svgrepo-com.svg"
  alt="unchecked bookmark"
  class="Card__bookmark"
/>
  <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, 
sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. 
At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. 
Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. 
At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
  </p>
  <button type="button" class="Button__default">Hide Answer</button>
  <p>Unheimlich gute Antwort, die alle Fragen auf einmal klärt</p>
    <div class="Card__tag__wrapper">
      <p class="Card__tags">Tag 1</p>
      <p class="Card__tags">Tag 2</p>
      <p class="Card__tags">Tag 3</p>
      <p class="Card__tags">Tag 4</p>
    </div>
</article>
`;

export const Bookmarked = () => /* html */ `
<article class="Card">
  <h2 class="Card__title">Frage 1</h2>
  <img
  src="assets/bookmark-alt-svgrepo-com.svg"
  alt="checked bookmark"
  class="Card__bookmark--active"
/>
  <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, 
sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. 
At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. 
Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. 
At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
  </p>
  <button type="button" class="Button__default">Hide Answer</button>
  <p>Unheimlich gute Antwort, die alle Fragen auf einmal klärt</p>
    <div class="Card__tag__wrapper">
      <p class="Card__tags">Tag 1</p>
      <p class="Card__tags">Tag 2</p>
      <p class="Card__tags">Tag 3</p>
      <p class="Card__tags">Tag 4</p>
    </div>
</article>
`;
