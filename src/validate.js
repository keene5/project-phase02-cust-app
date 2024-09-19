import validator from 'validator';

export const validateEmail = (email) => {
    if (!validator.isEmail(email)) {
      return false;
    }
    return true;
  };

export const validatePassword = (password) => {
    if (!validator.isStrongPassword(password)) {
      return false;
    }
    return true;
  };

  




