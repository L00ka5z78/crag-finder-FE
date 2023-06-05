import { useState } from 'react';
import { Validate } from './validate';

const setInitialErrors = <T extends Record<string, string>>(
  initialFormState: T
) => {
  let initialErrors: Record<string, null> = {};

  for (const key of Object.keys(initialFormState)) {
    initialErrors[key] = null;
  }

  return initialErrors as Record<keyof T, null>;
};

export const useFormHook = <T extends Record<string, string>>(
  initialFormState: T
) => {
  const [isError, setIsError] = useState(false);
  const [errors, setErrors] = useState<Record<keyof T, string | null>>(
    setInitialErrors(initialFormState)
  );
  const [form, setForm] = useState<T>(initialFormState);

  const formValidators: Record<string, Validate> = {};
  const errorMessages: Record<string, string> = {};

  // It adds validators to the given form field and returns html tags
  const tag = (name: string, validators: Validate, errorMessage?: string) => {
    formValidators[name] = validators;
    if (errorMessage) {
      errorMessages[name] = errorMessage;
    }

    return {
      name: name,
      id: name,
    };
  };

  return null; // temporary
};
