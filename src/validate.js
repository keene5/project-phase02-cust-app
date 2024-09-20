import validator from 'validator';
import { isUnsanitaryInput } from "./sanitize.js";

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

  export function determineErrors(errors, formObject) {
    let newErrors = { ...errors };
    let hasErrors = false;
  
    if (formObject.name === "") {
      newErrors.name = "Name is required";
      hasErrors = true;
    } else if (isUnsanitaryInput(formObject.name)) {
      newErrors.name = "Name contains unsanitary characters";
      hasErrors = true;
    }
  
    if (formObject.email === "") {
      newErrors.email = "Email is required";
      hasErrors = true;
    } else if (isUnsanitaryInput(formObject.email)) {
      newErrors.email = "Email contains unsanitary characters";
      hasErrors = true;
    } else if (!validateEmail(formObject.email)) {
      newErrors.email = "Invalid email";
      hasErrors = true;
    }
  
    if (formObject.password === "") {
      newErrors.password = "Password is required";
      hasErrors = true;
    } else if (isUnsanitaryInput(formObject.password)) {
      newErrors.password = "Password contains unsanitary characters";
      hasErrors = true;
    } else if (!validatePassword(formObject.password)) {
      newErrors.password = "Invalid password";
      hasErrors = true;
    }
    return { hasErrors, newErrors };
  }

  




