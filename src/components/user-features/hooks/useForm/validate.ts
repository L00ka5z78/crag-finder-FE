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

const required = (text: string) => {
  return text.trim().length > 0;
};
const minLength = (text: string, minimumLength: number) => {
  return text.length >= minimumLength;
};

const maxLength = (text: string, maximumLength: number) => {
  return text.length <= maximumLength;
};

const isEmail = (text: string) => {
  return /.+@.+\..+/.test(text);
};

const isEqualTo = (text: string, text2: string) => {
  return text === text2;
};

const hasUpperCaseLetter = (text: string) => {
  return new RegExp(/[A-Z]/).test(text);
};
const hasLowerCaseLetter = (text: string) => {
  return new RegExp(/[a-z]/).test(text);
};
const hasSpecialCharacters = (text: string) => {
  return new RegExp(/[~`!@#$%^&*()_\-+={[}\]|:;"'<,>.?/]/).test(text);
};
const hasDigitCharacters = (text: string) => {
  return new RegExp(/[0-9]/).test(text);
};

export const validate = (text: string, validators: Validate): string | null => {
  for (const key of Object.keys(validators) as (keyof Validate)[]) {
    switch (key) {
      case 'required':
        if (!required(text)) {
          return 'Has to be filled in.';
        }
        break;

      case 'minLength':
        if (!minLength(text, validators.minLength!)) {
          return `Has to be longer than ${
            validators.minLength! - 1
          } characters.`;
        }
        break;

      case 'maxLength':
        if (!maxLength(text, validators.maxLength!)) {
          return `Has to be not longer than ${validators.maxLength!} characters.`;
        }
        break;

      case 'email':
        if (!isEmail(text)) {
          return 'Has to be email format.';
        }
        break;

      case 'equalTo':
        if (!isEqualTo(text, validators.equalTo!)) {
          return `Has to be equal to: ${validators.equalTo!}`;
        }
        break;

      case 'hasDigitCharacters':
        if (!hasDigitCharacters(text)) {
          return `Has to have at least one digit character.`;
        }
        break;

      case 'hasLowerCaseLetter':
        if (!hasLowerCaseLetter(text)) {
          return `Has to have at least one lowercase letter.`;
        }
        break;

      case 'hasSpecialCharacters':
        if (!hasSpecialCharacters(text)) {
          return `Has to have at least one special character.`;
        }
        break;

      case 'hasUpperCaseLetter':
        if (!hasUpperCaseLetter(text)) {
          return `Has to have at least one uppercase letter.`;
        }
        break;

      default:
        break;
    }
  }

  return null;
};
