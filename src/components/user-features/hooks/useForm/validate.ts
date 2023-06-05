export interface Validate {
  required?: boolean;
  minLength?: number;
  maxLength?: number;
  email?: boolean;
  equalTo?: string;
  hasUpperCaseLetter?: boolean;
  hasLowerCaseLetter?: boolean;
  hasSpecialCharacters?: boolean;
  hasDigitCharacters?: boolean;
}
export const validate = () => {
  return null; //temporary
};
