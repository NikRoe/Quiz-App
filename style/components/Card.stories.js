export default {
  title: "Card",
};

export const Default = () => /*html*/ `
<article class="Card">
  <h2 class="Card__title">Frage 1</h2>
  <p class="Card__bookmark"></p>
  <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, 
sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. 
At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. 
Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. 
At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
  </p>
  <button type="button">Show Answer</button>
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
  <p class="Card__bookmark"></p>
  <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, 
sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. 
At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. 
Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. 
At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
  </p>
  <button type="button">Hide Answer</button>
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
  <p class="Card__bookmark--active"></p>
  <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, 
sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. 
At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. 
Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. 
At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
  </p>
  <button type="button">Hide Answer</button>
  <p>Unheimlich gute Antwort, die alle Fragen auf einmal klärt</p>
    <div class="Card__tag__wrapper">
      <p class="Card__tags">Tag 1</p>
      <p class="Card__tags">Tag 2</p>
      <p class="Card__tags">Tag 3</p>
      <p class="Card__tags">Tag 4</p>
    </div>
</article>
`;
