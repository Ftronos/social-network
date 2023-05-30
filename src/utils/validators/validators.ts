export type FieldValidator_type = (value: string) => string | undefined;

export const requiredField: FieldValidator_type = (value) => {
  if (value) {
    return undefined;
  }
  return "Поле обязательно";
};

export const maxLengthCreator =
  (maxLength: number): FieldValidator_type =>
  (value) => {
    if (value && value.length <= maxLength) {
      return undefined;
    }

    return `Максимальная длина ${maxLength} символов`;
  };
