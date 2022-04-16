// add error message/class
const showInputError = (input, formEl, { errorClass, inputErrorClass }) => {
  const errorSpan = formEl.querySelector(`#${input.id}-error`);
  errorSpan.textContent = input.validationMessage;
  errorSpan.classList.add(errorClass);
  input.classList.add(inputErrorClass);
};

// remove error message/class
const hideInputError = (input, formEl, { errorClass, inputErrorClass }) => {
  const errorSpan = formEl.querySelector(`#${input.id}-error`);
  errorSpan.textContent = "";
  errorSpan.classList.remove(errorClass);
  input.classList.remove(inputErrorClass);
};

const checkInputValidity = (formEl, input, settings) => {
  if(input.validity.valid) {
    hideInputError(input, formEl, settings);
  } else {
    // not valid
    showInputError(input, formEl, settings);
  };
};

const hasValidInputs = (inputList) => inputList.every((input) => input.validity.valid === true);

const toggleButton = (inputList, button, settings) => {
  if (hasValidInputs(inputList)) {
    button.disabled = false;
    button.classList.remove(settings.inactiveButtonClass);
  } else {
    button.disabled = true;
    button.classList.add(settings.inactiveButtonClass);
  }
};

const setEventListeners = (formEl, settings) => {
  const inputList = [...formEl.querySelectorAll(settings.inputSelector)];
  const submitButton = formEl.querySelector(settings.submitButtonSelector);
  inputList.forEach((input) => {
    input.addEventListener('input', (e) => {
      // check validity
      checkInputValidity(formEl, input, settings);
      // toggle the button
      toggleButton(inputList, submitButton, settings);
    });
  });
};

const enableValidation = (settings) => {
  const formElements = [...document.querySelectorAll(settings.formSelector)];
  formElements.forEach((formEl) => {
    formEl.addEventListener('submit', (e) => e.preventDefault());
    setEventListeners(formEl, settings);
  });  
};

enableValidation({
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible"
});