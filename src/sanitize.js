

// validateInput.js
import DOMPurify from 'dompurify';

export const isUnsanitaryInput = (input) => {
  const sanitizedInput = DOMPurify.sanitize(input);
  return sanitizedInput !== input;
};