export const rulesText = {
  required: (field) => `Треба ввести ${field}.`,
};
export const addFormRulesImage = {
  required: (field) => `Треба додати ${field}.`,
};

export const adminRules = {
  login: {
    required: { value: true, message: rulesText.required('логін') },
  },
  password: {
    required: { value: true, message: rulesText.required('пароль') },
  },
};

export const addFormRules = {
  login: {
    required: { value: true, message: rulesText.required('логін') },
  },
  password: {
    required: { value: true, message: rulesText.required('пароль') },
  },
  image: {
    required: { value: true, message: addFormRulesImage.required('логотип') },
  },
  description: {
    required: { value: true, message: rulesText.required('опис') },
  },
};
