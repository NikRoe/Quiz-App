export default {
  title: "Fieldset",
};

export const Fieldset = () => /* html */ `
<form class="Form">
    <fieldset class="Form__fieldset">
        <label for="question-input" class="Form__label">Frage</label>
        <textarea name="question-input" id="question-input" placeholder="Enter your question" rows="10"></textarea>
    </fieldset>

    <fieldset class="Form__fieldset">
        <label for="answer-input" class="Form__label">Antwort</label>
        <textarea name="answer-input" id="answer-input" placeholder="Enter the answer" rows="10"></textarea>
    </fieldset>

    <fieldset class="Form__fieldset">
        <label for="tag-input" class="Form__label">Tags</label>
        <textarea name="tag-input" id="tag-input" placeholder="Add some tags. Seperate by comma" rows="10"></textarea>
    </fieldset>
</form>`;
