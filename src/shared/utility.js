export const checkValidity = (elem) => {
  let isValid = true;

  if (!elem.validation) {
    return elem.valid = true;
  }

  if (elem.validation.require) {
    isValid = elem.value.trim() !== '' && isValid;
    elem.errorMessage = isValid ? elem.errorMessage : 'Enter text';
  }
  if (elem.validation.minLength) {
    isValid = elem.value.length >= elem.validation.minLength && isValid;
    elem.errorMessage = isValid ? elem.errorMessage : `MinLength is ${elem.validation.minLength}`;
  }
  if (elem.validation.maxLength) {
    isValid = elem.value.length <= elem.validation.maxLength && isValid;
    elem.errorMessage = isValid ? elem.errorMessage : `MaxLength is ${elem.validation.minLength}`;
  }
  elem.valid = isValid;
  return elem;
};