export const requiredField = (value) => {
  if (value) {
    return undefined;
  }
  return "Поле обязательно";
};

export const maxLengthCreator = (maxLength) => (value) => {
  if (value && value.length <= maxLength) {
    return undefined;
  }

  return `Максимальная длина ${maxLength} символов`;
};
