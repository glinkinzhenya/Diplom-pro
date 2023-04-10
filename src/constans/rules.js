export const rulesText = {
  required: (field) => `Треба ввести ${field}.`,
};
export const rulesImage = {
  required: (field) => `Треба додати ${field}.`,
};

export const adminRules = {
  login: {
    required: { value: true, message: rulesText.required('логін') },
  },
  password: {
    required: { value: true, message: rulesText.required('пароль') },
  },
  image: {
    required: { value: true, message: rulesImage.required('логотип') },
  },
};
