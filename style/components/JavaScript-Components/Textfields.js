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
