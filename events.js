/* define vars and event for getting a counter of how many symbols
 have been put into the textarea of the form */

const textfieldInput = document.querySelector('[data-js="input-area"]');
const textfieldCounter = document.querySelector('[data-js="input-counter"]');

textfieldInput.addEventListener("input", () => {
  textfieldCounter.textContent = textfieldInput.value.length;
});
