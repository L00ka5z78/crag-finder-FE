import * as React from 'react';
import './Input.css';

type Props = React.InputHTMLAttributes<HTMLInputElement>;

export const Input = ({ ...rest }: Props) => <input {...rest} />;
