/* creating new cards via form */

const form = document.querySelector("[data-js=form]");

form.addEventListener("submit", event => {
  event.preventDefault();

  const questionElement = form.elements.question;
  const answerElement = form.elements.answer;
  const tagsElement = form.elements.tags;

  const newCard = {
    question: questionElement.value,
    answer: answerElement.value,
    tags: tagsElement.value
      .split(",")
      .map(tag => tag.trim())
      .filter(tag => tag.length),
  };

  cards = [newCard, ...cards];
  renderCards();

  form.reset();
  questionElement.focus();
});

/* filtering via filter form */

const filterForm = document.querySelector("[data-js=filter-form]");
const cardsContainer = document.querySelector("[data-js=cards]");

const filterFormBookmarked = document.querySelector(
  "[data-js=filter-form-bookmarked]"
);
const bookmarkedCardsContainer = document.querySelector(
  "[data-js=cards-bookmarked]"
);

let currentFilter = "all";

let cards = [
  {
    question: "What is git?",
    answer: "Git is a tool to work with code.",
    tags: ["css", "shell", "web"],
    isBookmarked: false,
  },
  {
    question: "What is html?",
    answer: "HTML is Hypertext Markup Language. Google it.",
    tags: ["css", "shell", "web"],
    isBookmarked: true,
  },
  {
    question: "What is css?",
    answer: "Cascading style sheets. Google it.",
    tags: ["css", "basic", "web"],
    isBookmarked: false,
  },
  {
    question: "What is git?",
    answer: "Git is a tool to work with code.",
    tags: ["css", "shell", "web"],
    isBookmarked: true,
  },
  {
    question: "What is html?",
    answer: "HTML is Hypertext Markup Language. Google it.",
    tags: ["css", "shell", "web"],
    isBookmarked: true,
  },
  {
    question: "What is css?",
    answer: "Cascading style sheets. Google it.",
    tags: ["css", "basic", "web"],
    isBookmarked: false,
  },
];

filterForm.addEventListener("change", () => {
  currentFilter = filterForm.elements["tag-filter"].value;
  renderCards();
});

filterFormBookmarked.addEventListener("change", () => {
  currentFilter = filterFormBookmarked.elements["tag-filter"].value;
  renderCards();
});

renderCards();

function renderCards() {
  cardsContainer.innerHTML = "";

  cards
    .filter(
      card => card.tags.includes(currentFilter) || currentFilter === "all"
    )
    .forEach(card => {
      const cardElement = document.createElement("article");
      cardElement.className = "Card";
      cardElement.innerHTML = `
          <p>${card.question}</p>
          <img 
            class="Card__bookmark${
              card.isBookmarked ? " Card__bookmark-inactive" : ""
            }" 
            data-js="bookmark"/>
            <button class="Button__default" data-js="card-button">Show answer</button>
            <p data-js="answer" hidden>${card.answer}</p>
          <ul role="list" class="Card__tag-list">
            ${card.tags
              .map(tag => `<li class="Card__tag">${tag}</li>`)
              .join("")}
          </ul>
        `;
      cardsContainer.append(cardElement);

      const bookmarkElement = cardElement.querySelector("[data-js=bookmark]");
      bookmarkElement.addEventListener("click", () => {
        card.isBookmarked = !card.isBookmarked;
        bookmarkElement.classList.toggle("Card__bookmark-inactive");
      });

      const answerButton = cardElement.querySelector("[data-js=card-button]");
      const answerElement = cardElement.querySelector("[data-js=answer]");

      answerButton.addEventListener("click", () => {
        answerElement.toggleAttribute("hidden");
        if (answerButton.textContent === "Hide answer") {
          answerButton.textContent = "Show answer";
        } else {
          answerButton.textContent = "Hide answer";
        }
      });
    });

  bookmarkedCardsContainer.innerHTML = "";

  cards
    .filter(
      card =>
        (card.isBookmarked && card.tags.includes(currentFilter)) ||
        (card.isBookmarked && currentFilter === "all")
    )
    .forEach(card => {
      const cardElement = document.createElement("article");
      cardElement.className = "Card";
      cardElement.innerHTML = `
            <p>${card.question}</p>
            <img 
              class="Card__bookmark${
                card.isBookmarked ? " Card__bookmark-inactive" : ""
              }" 
              data-js="bookmark"/>
              <button class="Button__default" data-js="card-button">Show answer</button>
              <p data-js="answer" hidden>${card.answer}</p>
            <ul role="list" class="Card__tag-list">
              ${card.tags
                .map(tag => `<li class="Card__tag">${tag}</li>`)
                .join("")}
            </ul>
          `;
      bookmarkedCardsContainer.append(cardElement);

      const bookmarkElement = cardElement.querySelector("[data-js=bookmark]");
      bookmarkElement.addEventListener("click", () => {
        card.isBookmarked = !card.isBookmarked;
        bookmarkElement.classList.toggle("Card__bookmark-inactive");
      });

      const answerButton = cardElement.querySelector("[data-js=card-button]");
      const answerElement = cardElement.querySelector("[data-js=answer]");

      answerButton.addEventListener("click", () => {
        answerElement.toggleAttribute("hidden");
        if (answerButton.textContent === "Hide answer") {
          answerButton.textContent = "Show answer";
        } else {
          answerButton.textContent = "Hide answer";
        }
      });
    });
}
