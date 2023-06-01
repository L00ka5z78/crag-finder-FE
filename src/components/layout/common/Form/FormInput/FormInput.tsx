import { IconType } from 'react-icons/lib';
import { MdArrowForwardIos } from 'react-icons/md';
import { ChangeEvent } from 'react';

import './FormInput.css';

interface Props {
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  name: string;
  type: string;
  placeholder: string;
  className?: string;
  labelTitle: string;
  value: string;
  IconInput?: IconType;
  isButtonSubmit?: boolean;
}

export const FormInput = ({
  onChange,
  name,
  type,
  placeholder,
  className,
  labelTitle,
  value,
  IconInput,
  isButtonSubmit,
}: Props) => {
  return (
    <div className={`input-box ${className}`}>
      <label htmlFor={name} className="labels">
        {labelTitle}
      </label>
      <div className="input-panel">
        {IconInput && <IconInput className="input-icon" />}
        <input
          className="input"
          type={type}
          name={name}
          id={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
        />
        {isButtonSubmit && (
          <button className="submitButton" type="submit">
            <MdArrowForwardIos className="arrow-icon" />
          </button>
        )}
      </div>
    </div>
  );
};
